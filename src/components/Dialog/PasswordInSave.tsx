import React, {useCallback, useEffect, useMemo, useState} from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter, DrawerCloseButton, Input, Checkbox
} from "@chakra-ui/react";
import {Box, Stack, Text} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, StateType} from "../../reducers/state";
import {cancelPasswordAction} from "../../reducers/action";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";
import {useRecoilState} from "recoil";
import {
	languageState,
	tokenReceiverAddr,
	vaultNameState,
	labelNameState,
	savedContentState,
	vaultPasswordState
} from "../../hooks/Atoms";
import { ChangeEvent } from "react";
import {TextInput} from "../TextInput/textinput";
import {CryptoMachine} from "../../lib/crypto";
import {etherClient} from "../../ethers/etherClient";
import {useSuccessToast, useWarningToast} from "../../hooks/useToast";

const PasswordInSave:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [isOpen, setOpen] = useState<boolean>(false)
	const dispatch = useDispatch();

	const isPassword = useSelector((state:StateType)=>state.password);
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const [vaultName, ] = useRecoilState(vaultNameState);
	const [labelName, ] = useRecoilState(labelNameState);
	const [savedContent,] = useRecoilState(savedContentState);
	const [password, setPassword] = useRecoilState(vaultPasswordState);
	const [receiverAddr,] = useRecoilState(tokenReceiverAddr)
	const [lang, ] = useRecoilState(languageState)

	const [passwordHolder, setPasswordHolder]	= useState<string>("password ...")
	const [checked, setChecked] = useState<boolean>(false)
	const handleCheckChange = (event: ChangeEvent<HTMLInputElement>)=>setChecked(event.target.checked)
	const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>)=>setPassword(event.currentTarget.value)

	const warningToast = useWarningToast()
	const successToast = useSuccessToast()
	useMemo(()=>{
		if(lang==='zh-CN'){
			setPasswordHolder("密钥...")
		}

		if(lang==='en-US'){
			setPasswordHolder("password ...")
		}
	},[lang])

	const tokenReceiverAddress = useMemo(()=>{
		if(checked===false) return;
		return(
			<Stack spacing='24px'>
				<Box>
					<Text fontSize="15px" color="white">
						<Trans>Token Receiver: </Trans>
					</Text>
					<Input  id='username' placeholder={receiverAddr.substr(0,10)+" ... "+ receiverAddr.substr(-8)} />
				</Box>
			</Stack>
		);
	},[checked])

	const economicModelDesc = useMemo(()=>{
		if(checked===false) return;
		return(
			<Box marginY="20px">
					<Text marginY="10px" color="white">
						<Trans>1. 21 million tokens are given to community users as an incentive cycle;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>2. Incentives are generated along with the user's storage behavior. If there is no storage, there will be no incentives;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>3. In the first cycle, the excitation amount is 2100 each time it is stored; </Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>4. When entering the next cycle, each excitation amount is half of the previous cycle;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>5. With each user's token incentive, a 10% increment will be issued to the DAO address;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>6. Using the displacement halving, the total amount of token incentives for a complete cycle is about 23.1 million;</Trans>
					</Text>
			</Box>
		)
	},[checked])

	useEffect(()=>{
		if(isPassword===true){
			setOpen(true);
		}
	},[isPassword])

	const doCancel = useCallback(()=>{
		dispatch(cancelPasswordAction(ActionType.CLICK_SAVE, isConnection))
		setOpen(isOpen)

		// clear memory data
	},[dispatch])

	const doSubmit = useCallback(async ()=>{
		let encryptor = new CryptoMachine();
		if(vaultName===undefined || password===undefined ||
			savedContent === undefined || labelName===undefined){
			if(lang==='zh-CN'){
				warningToast("输入内容有误,请检查")
			}

			if(lang==='en-US'){
				warningToast("Undefined content, check again")
			}
			return
		}

		etherClient.connectSeedlistContract()
		etherClient.connectSigner()
		if(!etherClient.client){
			console.error("connect signer error in signup")
		}

		let params = await encryptor.calculateVaultHasRegisterParams(vaultName, password)
		let res = await etherClient.client?.vaultHasRegister(params.address, params.deadline, params.signature.r, params.signature.s, params.signature.v);
		if(res === false){
			if(lang==='zh-CN'){
				warningToast("请您先注册空间名");
			}

			if(lang==='en-US'){
				warningToast("Regist vault name firstly");
			}
			return;
		}
		if(checked === true){
			let hasMintedParams = await  encryptor.calculateHasMintedParams(vaultName, password);
			let hasMintedRes = await etherClient.client?.hasMinted(hasMintedParams.address, hasMintedParams.deadline, hasMintedParams.signature.r,
				hasMintedParams.signature.s, hasMintedParams.signature.v);
			if(hasMintedRes === true){
				if(lang==='zh-CN'){
					warningToast("一个存储空间，只能参与一次通证铸造");
				}
				if(lang==='en-US'){
					warningToast("Mint only once with same vault name");
				}
				return
			}

			let mintedSaveParams = await encryptor.calculateSaveWithMintingParams(vaultName, password, savedContent, labelName, receiverAddr);
			let mintedSaveRes = await etherClient.client?.saveDataWithMinting(mintedSaveParams.address, savedContent, labelName,
				receiverAddr, mintedSaveParams.deadline, mintedSaveParams.signature.r,
				mintedSaveParams.signature.s, mintedSaveParams.signature.v);

			if(lang==='zh-CN'){
				successToast("存储成功，并完成通证铸造");
			}

			if(lang==='en-US'){
				successToast("save with mint success");
			}
		}else{
			let saveParams = await encryptor.calculateSaveWithoutMintingParams(vaultName, password, savedContent, labelName);
			let saveRes = await etherClient.client?.saveDataWithoutMinting(saveParams.address, savedContent, labelName,
				saveParams.deadline, saveParams.signature.r,
				saveParams.signature.s, saveParams.signature.v);

			if(lang==='zh-CN'){
				successToast("存储成功");
			}

			if(lang==='en-US'){
				successToast("save success");
			}
		}

	},[vaultName, savedContent, labelName, password, receiverAddr, checked])

	return(
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={doCancel}
			closeOnOverlayClick={false}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth='1px'>

					<Text fontSize="18px" color="white">
						<Trans> Please enter your password </Trans>
					</Text>
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing='24px'>
						<Box>
							<Text fontSize="18px" color="white"> </Text>
							<TextInput
								placeholder={passwordHolder}
								type={'password'}
								value={password}
								onChange={handlePasswordChange}
							/>

						</Box>
					</Stack>
					<Stack spacing='30px'>
						<Box marginY="20px">
							<Checkbox
								size='md'
								colorScheme='orange'
								isChecked={checked}
								onChange={handleCheckChange}
							>
								<Text color="white">
									<Trans>I want to mint seed incentive token</Trans>
								</Text>
							</Checkbox>
							{economicModelDesc}
							{tokenReceiverAddress}
						</Box>
					</Stack>
				</DrawerBody>

				<DrawerFooter borderTopWidth='1px'>
					<Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={doCancel}>
						<Trans>Cancel</Trans>
					</Button>
					<Button colorScheme='blackAlpha' mr={3} onClick={doSubmit}>
						<Trans>Submit</Trans>
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
export {PasswordInSave};
