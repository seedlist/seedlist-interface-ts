import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React, {useMemo, useState} from "react";
import {IBaseProps} from "../../interfaces/props";
import {useRecoilState} from "recoil";
import {languageState} from "../../hooks/Atoms";

const QueryArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [lang, ] = useRecoilState(languageState)
	const [spaceNameHolder, setSpaceNameHolder]	= useState<string>("Enter vault name ...")
	useMemo(()=>{
		if(lang==='zh-CN'){
			setSpaceNameHolder("输入保险库空间名称 ...")
		}

		if(lang==='en-US'){
			setSpaceNameHolder("Enter vault name ...")
		}
	},[lang])

	return(
        <VStack spacing={0}  color="black">
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <Stack spacing={2}>
                    <TextInput
	                    placeholder={spaceNameHolder}
/*
                        onChange={()=>{}}
                        placeholder={"placeholder..."}
*/
                    />
                </Stack>
            </Box>
        </VStack>
);
}
export {QueryArea};

