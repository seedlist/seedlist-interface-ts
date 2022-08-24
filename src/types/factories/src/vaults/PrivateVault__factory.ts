/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PrivateVault,
  PrivateVaultInterface,
} from "../../../src/vaults/PrivateVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "caller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
    ],
    name: "getPrivateDataByIndex",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "getPrivateDataByIndexDirectly",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "name",
        type: "address",
      },
    ],
    name: "getPrivateDataByName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "name",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "getPrivateDataByNameDirectly",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
    ],
    name: "labelIsExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "labelIsExistDirectly",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
    ],
    name: "labelName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "labelNameDirectly",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "cryptoLabel",
        type: "string",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
    ],
    name: "saveWithMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "cryptoLabel",
        type: "string",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "saveWithMintingDirectly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "cryptoLabel",
        type: "string",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
    ],
    name: "saveWithoutMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "cryptoLabel",
        type: "string",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "saveWithoutMintingDirectly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "total",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405265886c98b760006008553480156200001b57600080fd5b5060405162001c4638038062001c468339810160408190526200003e91620001a1565b604080518082018252601981527f707269766174655661756c7440736565646c6973742e6f7267000000000000006020918201528151808301835260058152640312e302e360dc1b9082015281517fdad980a10e49615eb7fc5d7774307c8f04d959ac46349850121d52b1e409fc1e818301527f524897c45a2b08b64fa5a5db0ba55d51bd9bba5ea1fb261f9101b9f6b46f193f818401527f06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c60608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600955600080546001600160a01b039485166001600160a01b03199182161790915560028054600180549487169490931693909317909155600780546001600160401b03191690556001600160a81b031990911691909216179055620001eb565b80516001600160a01b03811681146200019c57600080fd5b919050565b600080600060608486031215620001b757600080fd5b620001c28462000184565b9250620001d26020850162000184565b9150620001e26040850162000184565b90509250925092565b611a4b80620001fb6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063653045eb11610097578063c4dfc5ad11610066578063c4dfc5ad1461022a578063d866517f1461023d578063f156b1bf14610250578063fc9c8d391461026357600080fd5b8063653045eb146101de57806373b26be3146101f1578063ad3d5e3814610204578063b5802dad1461021757600080fd5b80633644e515116100d35780633644e515146101805780634a8bb379146101975780634f02c420146101b75780635a724e27146101cb57600080fd5b806301335ffd146101055780631c8ff5201461012d57806327513b70146101425780632ddbd13a14610155575b600080fd5b610118610113366004611535565b61028e565b60405190151581526020015b60405180910390f35b61014061013b366004611625565b6102c3565b005b610140610150366004611625565b610479565b600754610168906001600160401b031681565b6040516001600160401b039091168152602001610124565b61018960095481565b604051908152602001610124565b6101aa6101a53660046116af565b6105b9565b6040516101249190611700565b60025461011890600160a01b900460ff1681565b6101aa6101d93660046116af565b6106dd565b6101aa6101ec366004611535565b610741565b6101aa6101ff366004611733565b6107d1565b6101aa610212366004611755565b610905565b610118610225366004611733565b610986565b6101aa610238366004611755565b6109d2565b61014061024b366004611770565b610a8c565b61014061025e366004611770565b610c70565b600254610276906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b600061029d8686868686610eb8565b506001600160a01b03851660009081526003602052604090205460ff1695945050505050565b6002546001600160a01b031633146102f65760405162461bcd60e51b81526004016102ed90611811565b60405180910390fd5b600254600160a01b900460ff16156103505760405162461bcd60e51b815260206004820152601760248201527f736565646c6973743a206d696e742068617320646f6e6500000000000000000060448201526064016102ed565b6001600160a01b03811660009081526003602052604090205460ff16156103895760405162461bcd60e51b81526004016102ed9061183c565b6001600160a01b038116600090815260066020908152604090912084516103b292860190611474565b506007546001600160401b0316600090815260046020908152604080832080546001600160a01b0319166001600160a01b038616908117909155835260058252909120835161040392850190611474565b50600780546001600160401b031690600061041d83611865565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600360205260409020805460ff1916600117905550506002805460ff60a01b1916600160a01b179055565b6002546001600160a01b031633146104a35760405162461bcd60e51b81526004016102ed90611811565b6001600160a01b03811660009081526003602052604090205460ff16156104dc5760405162461bcd60e51b81526004016102ed9061183c565b6001600160a01b0381166000908152600660209081526040909120845161050592860190611474565b506007546001600160401b0316600090815260046020908152604080832080546001600160a01b0319166001600160a01b038616908117909155835260058252909120835161055692850190611474565b50600780546001600160401b031690600061057083611865565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600360205260409020805460ff191660011790555050565b6007546060906001600160401b0380881691161161060e5760405162461bcd60e51b815260206004820152601260248201527144617461206b657973206f766572666c6f7760701b60448201526064016102ed565b61061b8686868686610f81565b6001600160401b0386166000908152600460209081526040808320546001600160a01b031683526006909152902080546106549061189a565b80601f01602080910402602001604051908101604052809291908181526020018280546106809061189a565b80156106cd5780601f106106a2576101008083540402835291602001916106cd565b820191906000526020600020905b8154815290600101906020018083116106b057829003601f168201915b5050505050905095945050505050565b6007546060906001600160401b03908116908716106106fb57600080fd5b6107088686868686611042565b6001600160401b0386166000908152600460209081526040808320546001600160a01b031683526005909152902080546106549061189a565b60606107508686868686611103565b6001600160a01b03861660009081526003602052604090205460ff1615156001146107ae5760405162461bcd60e51b815260206004820152600e60248201526d131858995b081b9bc8195e1a5cdd60921b60448201526064016102ed565b6001600160a01b038616600090815260066020526040902080546106549061189a565b6002546060906001600160a01b031633146107fe5760405162461bcd60e51b81526004016102ed90611811565b6001600160a01b03821660009081526003602052604090205460ff16151560011461085c5760405162461bcd60e51b815260206004820152600e60248201526d131858995b081b9bc8195e1a5cdd60921b60448201526064016102ed565b6001600160a01b0382166000908152600660205260409020805461087f9061189a565b80601f01602080910402602001604051908101604052809291908181526020018280546108ab9061189a565b80156108f85780601f106108cd576101008083540402835291602001916108f8565b820191906000526020600020905b8154815290600101906020018083116108db57829003601f168201915b505050505090505b919050565b6002546060906001600160a01b031633146109325760405162461bcd60e51b81526004016102ed90611811565b6007546001600160401b039081169083161061094d57600080fd5b6001600160401b0382166000908152600460209081526040808320546001600160a01b0316835260059091529020805461087f9061189a565b6002546000906001600160a01b031633146109b35760405162461bcd60e51b81526004016102ed90611811565b506001600160a01b031660009081526003602052604090205460ff1690565b6002546060906001600160a01b031633146109ff5760405162461bcd60e51b81526004016102ed90611811565b6007546001600160401b03808416911611610a535760405162461bcd60e51b81526020600482015260146024820152734c6162656c73206b657973206f766572666c6f7760601b60448201526064016102ed565b6001600160401b0382166000908152600460209081526040808320546001600160a01b0316835260069091529020805461087f9061189a565b600154604051638b1b925f60e01b81523260048201526001600160a01b0390911690638b1b925f906024016020604051808303816000875af1158015610ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afa91906118d5565b1515600114610b455760405162461bcd60e51b81526020600482015260176024820152767661756c743a2076616c696461746f7220756e7061737360481b60448201526064016102ed565b610b54878787878787876111a7565b6001600160a01b03851660009081526003602052604090205460ff1615610b8d5760405162461bcd60e51b81526004016102ed9061183c565b6001600160a01b03851660009081526006602090815260409091208851610bb6928a0190611474565b506007546001600160401b0316600090815260046020908152604080832080546001600160a01b0319166001600160a01b038a169081179091558352600582529091208751610c0792890190611474565b50600780546001600160401b0316906000610c2183611865565b82546001600160401b039182166101009390930a92830291909202199091161790555050506001600160a01b039092166000908152600360205260409020805460ff1916600117905550505050565b600254600160a01b900460ff1615610cc15760405162461bcd60e51b81526020600482015260146024820152737661756c743a206d696e742068617320646f6e6560601b60448201526064016102ed565b600154604051638b1b925f60e01b81523260048201526001600160a01b0390911690638b1b925f906024016020604051808303816000875af1158015610d0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2f91906118d5565b1515600114610d7a5760405162461bcd60e51b81526020600482015260176024820152767661756c743a2076616c696461746f7220756e7061737360481b60448201526064016102ed565b610d8987878787878787611276565b6001600160a01b03851660009081526003602052604090205460ff1615610dc25760405162461bcd60e51b81526004016102ed9061183c565b6001600160a01b03851660009081526006602090815260409091208851610deb928a0190611474565b506007546001600160401b0316600090815260046020908152604080832080546001600160a01b0319166001600160a01b038a169081179091558352600582529091208751610e3c92890190611474565b50600780546001600160401b0316906000610e5683611865565b82546001600160401b039182166101009390930a92830291909202199091161790555050506001600160a01b039092166000908152600360205260409020805460ff1916600117905550506002805460ff60a01b1916600160a01b1790555050565b42841015610ed85760405162461bcd60e51b81526004016102ed906118f7565b60008054600954604051610f1f926001600160a01b03169189918991907f5e9a0e1424c7f33522faa862eafa09a676e96246da16c8b58d5803ba8010584f90602001611927565b604051602081830303815290604052805190602001209050610f79818585856040518060400160405280601f81526020017f7661756c743a206c6162656c206578697374207065726d6974204552524f520081525061135f565b505050505050565b42841015610fa15760405162461bcd60e51b81526004016102ed906118f7565b60008054600954604051610fe8926001600160a01b03169189918991907f17558919af4007c4fb94572ba8e807922ff7db103814e127ad21ef481ca35d9890602001611962565b604051602081830303815290604052805190602001209050610f79818585856040518060400160405280601f81526020017f7661756c743a20696e646578206c6162656c207065726d6974204552524f520081525061135f565b428410156110625760405162461bcd60e51b81526004016102ed906118f7565b600080546009546040516110a9926001600160a01b03169189918991907fcbb2475c190d2e287f7de56c688846f7612f70b210a3856ad34c475cbad0dda790602001611962565b604051602081830303815290604052805190602001209050610f79818585856040518060400160405280601e81526020017f7661756c743a206c6162656c206e616d65207065726d6974204552524f52000081525061135f565b428410156111235760405162461bcd60e51b81526004016102ed906118f7565b6000805460095460405161116a926001600160a01b03169189918991907f91fb9dd060bd9ffe42a43373e9de88b3a9b106cbce07f242fd6f2c4a41ef921d90602001611927565b604051602081830303815290604052805190602001209050610f7981858585604051806060016040528060248152602001611a1b6024913961135f565b428410156111c75760405162461bcd60e51b81526004016102ed906118f7565b60008054600954604051611212926001600160a01b0316918b918b918b918b91907f6681e086fd2042ee88d7eb0f54dbe27796a216fb36f4e834a75b15d90b082727906020016119a6565b60405160208183030381529060405280519060200120905061126c818585856040518060400160405280601b81526020017f7661756c743a206d696e74696e67207065726d6974204552524f52000000000081525061135f565b5050505050505050565b428410156112be5760405162461bcd60e51b81526020600482015260156024820152741d985d5b1d0e995e1958dd5d19481d1a5b595bdd5d605a1b60448201526064016102ed565b60008054600954604051611309926001600160a01b0316918b918b918b918b91907f8774f567563ee2634c371978f5cfa8e41e5d255912344cb6b7d652f94c66c8a4906020016119a6565b60405160208183030381529060405280519060200120905061126c818585856040518060400160405280601a81526020017f7661756c743a6d696e74696e67207065726d6974204552524f520000000000008152505b60008560405160200161137491815260200190565b6040516020818303038152906040528051906020012090506000816040516020016113cb91907f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60408051808303601f1901815282825280516020918201206000805490855291840180845281905260ff8a169284019290925260608301889052608083018790529092506001600160a01b03169060019060a0016020604051602081039080840390855afa158015611441573d6000803e3d6000fd5b505050602060405103516001600160a01b031614839061126c5760405162461bcd60e51b81526004016102ed9190611700565b8280546114809061189a565b90600052602060002090601f0160209004810192826114a257600085556114e8565b82601f106114bb57805160ff19168380011785556114e8565b828001600101855582156114e8579182015b828111156114e85782518255916020019190600101906114cd565b506114f49291506114f8565b5090565b5b808211156114f457600081556001016114f9565b80356001600160a01b038116811461090057600080fd5b803560ff8116811461090057600080fd5b600080600080600060a0868803121561154d57600080fd5b6115568661150d565b94506020860135935061156b60408701611524565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126115aa57600080fd5b81356001600160401b03808211156115c4576115c4611583565b604051601f8301601f19908116603f011681019082821181831017156115ec576115ec611583565b8160405283815286602085880101111561160557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561163a57600080fd5b83356001600160401b038082111561165157600080fd5b61165d87838801611599565b9450602086013591508082111561167357600080fd5b5061168086828701611599565b92505061168f6040850161150d565b90509250925092565b80356001600160401b038116811461090057600080fd5b600080600080600060a086880312156116c757600080fd5b61155686611698565b60005b838110156116eb5781810151838201526020016116d3565b838111156116fa576000848401525b50505050565b602081526000825180602084015261171f8160408501602087016116d0565b601f01601f19169190910160400192915050565b60006020828403121561174557600080fd5b61174e8261150d565b9392505050565b60006020828403121561176757600080fd5b61174e82611698565b600080600080600080600060e0888a03121561178b57600080fd5b87356001600160401b03808211156117a257600080fd5b6117ae8b838c01611599565b985060208a01359150808211156117c457600080fd5b506117d18a828b01611599565b9650506117e06040890161150d565b9450606088013593506117f560808901611524565b925060a0880135915060c0880135905092959891949750929550565b60208082526011908201527010d85b1b195c881a5cc81a5b9d985b1a59607a1b604082015260600190565b6020808252600f908201526e131858995b081a185cc8195e1a5cdd608a1b604082015260600190565b60006001600160401b038083168181141561189057634e487b7160e01b600052601160045260246000fd5b6001019392505050565b600181811c908216806118ae57607f821691505b602082108114156118cf57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156118e757600080fd5b8151801515811461174e57600080fd5b6020808252601690820152751d985d5b1d0e88195e1958dd5d19481d1a5b595bdd5d60521b604082015260600190565b6bffffffffffffffffffffffff19606096871b811682529490951b909316601485015260288401919091526048830152606882015260880190565b60609590951b6bffffffffffffffffffffffff1916855260c09390931b6001600160c01b0319166014850152601c840191909152603c830152605c820152607c0190565b60006bffffffffffffffffffffffff19808a60601b16835288516119d1816014860160208d016116d0565b8851908401906119e8816014840160208d016116d0565b60609890981b91909116960160148101969096525050602884019290925260488301526068820152608801939250505056fe7661756c743a206765742064617461206279206e616d65207065726d6974204552524f52a164736f6c634300080c000a";

type PrivateVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrivateVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrivateVault__factory extends ContractFactory {
  constructor(...args: PrivateVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _signer: string,
    _caller: string,
    _validator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PrivateVault> {
    return super.deploy(
      _signer,
      _caller,
      _validator,
      overrides || {}
    ) as Promise<PrivateVault>;
  }
  override getDeployTransaction(
    _signer: string,
    _caller: string,
    _validator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _signer,
      _caller,
      _validator,
      overrides || {}
    );
  }
  override attach(address: string): PrivateVault {
    return super.attach(address) as PrivateVault;
  }
  override connect(signer: Signer): PrivateVault__factory {
    return super.connect(signer) as PrivateVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrivateVaultInterface {
    return new utils.Interface(_abi) as PrivateVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrivateVault {
    return new Contract(address, _abi, signerOrProvider) as PrivateVault;
  }
}
