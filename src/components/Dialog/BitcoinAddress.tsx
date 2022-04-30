import React, {useCallback, useEffect, useMemo, useState} from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter, DrawerCloseButton, Input, IconButton, Checkbox, HStack, Tooltip, Spacer, Flex, GridItem, Grid
} from "@chakra-ui/react";
import {Box, Stack, Text, VStack} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, StateType} from "../../reducers/state";
import {cancelPasswordAction} from "../../reducers/action";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";
import {useRecoilState} from "recoil";
import {
	bitcoinWalletState,
	generatorState,
	labelState,
	languageState,
	puzzleState,
	vaultNameState, vaultPasswordState
} from "../../hooks/Atoms";
import {ViewOffIcon} from "@chakra-ui/icons";
import {QRCodeSVG} from 'qrcode.react';
import {TextInput} from "../TextInput/textinput";
import {GenBitcoinBrainWalletByPuzzle} from "../../lib/brainwallet";

const BitcoinAddress:React.FC<IBaseProps> = (props:IBaseProps)=>{

	const [isOpen, setOpen] = useState<boolean>(false)
	const [passwordHolder, setPasswordHolder]	= useState<string>("password ...")

	const [isBitcoinWallet, setBitcoinWallet] = useRecoilState(bitcoinWalletState);
	const isConnection = useSelector((state:StateType)=>state.walletConnection)

	const [generator, ] = useRecoilState(generatorState);
	const [puzzle, ] = useRecoilState(puzzleState);
	const [vaultName, ] = useRecoilState(vaultNameState);
	const [password, ] = useRecoilState(vaultPasswordState);
	const [addrs, setAddrs] = useState<string[]>();
	const [privkeys, setPrivkeys] =useState<string[]>();
	const [step, setStep] = useState<number>(1);
	useMemo(()=>{
		setOpen(isBitcoinWallet);
		if(isBitcoinWallet===false) return;
		if(generator==="puzzle"){
			let wallet = GenBitcoinBrainWalletByPuzzle(0,10*step, puzzle)
			setAddrs(wallet.addrs);
			setPrivkeys(wallet.privkeys);
		}

	},[isBitcoinWallet, step])

	const doCancel = useCallback(()=>{
		setOpen(false);
		setBitcoinWallet(false);
		setStep(1);
	},[])

	const doSubmit = useCallback(()=>{
		console.log("do submit:", step);
		setStep(step+1);
	},[step])

	const showAddressContent = useMemo(()=>{
		const contents = addrs?.map((addr: string, index: number) =>
			<>
			<Grid
				h='100px'
				templateRows='repeat(3, 1fr)'
				templateColumns='repeat(10, 1fr)'
				gap={1}
				marginY={"30px"}

			>
				<GridItem rowSpan={3} colSpan={1} >
					<QRCodeSVG
						value={addr}
						size={96}
						bgColor={"#000000"}
						fgColor={"#ffffff"}
						level={"L"}
						includeMargin={false}
					/>
				</GridItem>

				<GridItem colSpan={8}>
					<Text color={"white"}> <Trans>Address</Trans>/{index+1} :<br/> {addr} </Text>
				</GridItem>

				<GridItem rowSpan={3} colSpan={1}>
					<QRCodeSVG
						value={privkeys===undefined?"":privkeys[index]}
						size={96}
						bgColor={"#000000"}
						fgColor={"#ffffff"}
						level={"L"}
						includeMargin={false}
					/>
				</GridItem>

				<GridItem colSpan={7}> </GridItem>
				<GridItem colSpan={1} ><Text color={"whiteAlpha.600"}><Trans>PrivateKey</Trans>:</Text></GridItem>
				<GridItem colSpan={8}>
					<Grid templateColumns='repeat(100, 1fr)' >
						<GridItem colSpan={9}></GridItem>
						<GridItem colSpan={91}>
							<Text color={"whiteAlpha.600"}> {privkeys===undefined?"":privkeys[index]} </Text>
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>
			<hr />
			</>
		);
		return(
			<>{contents}</>
		);
	},[addrs, privkeys]);

	return(
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={doCancel}
			size='xl'
			closeOnOverlayClick={false}
			closeOnEsc={true}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth='1px'>

					<Text fontSize="18px" color="white">
						<Trans>Bitcoin Address:</Trans>
					</Text>
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing='30px'>
						<Box>
							{showAddressContent}
						</Box>
					</Stack>

				</DrawerBody>

				<DrawerFooter borderTopWidth='1px'>
					<Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={doCancel}>
						<Trans>Cancel</Trans>
					</Button>
					<Button colorScheme='blackAlpha' mr={3} onClick={()=>doSubmit()}>
						<Trans>More Address</Trans>
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export {BitcoinAddress};
