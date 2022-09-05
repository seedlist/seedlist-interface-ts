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
      {
        internalType: "address",
        name: "_permissionLib",
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
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_privateValidator",
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
    name: "updateValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ae238038062001ae28339810160408190526200003491620001a6565b604080518082018252601981527f707269766174655661756c7440736565646c6973742e6f7267000000000000006020918201528151808301835260058152640312e302e360dc1b9082015281517fdad980a10e49615eb7fc5d7774307c8f04d959ac46349850121d52b1e409fc1e818301527f524897c45a2b08b64fa5a5db0ba55d51bd9bba5ea1fb261f9101b9f6b46f193f818401527f06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c60608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600955600080546001600160a01b03199081166001600160a01b039687161790915560028054821694861694909417909355600180549093169184169190911790915560038054600880546001600160401b0319169055919092166001600160a81b031990911617905562000203565b80516001600160a01b0381168114620001a157600080fd5b919050565b60008060008060808587031215620001bd57600080fd5b620001c88562000189565b9350620001d86020860162000189565b9250620001e86040860162000189565b9150620001f86060860162000189565b905092959194509250565b6118cf80620002136000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063541869ce11610097578063ad3d5e3811610066578063ad3d5e381461022a578063b5802dad1461023d578063c4dfc5ad14610250578063fc9c8d391461026357600080fd5b8063541869ce146101de5780635a724e27146101f1578063653045eb1461020457806373b26be31461021757600080fd5b80633644e515116100d35780633644e51514610180578063476862fc146101975780634a8bb379146101aa5780634f02c420146101ca57600080fd5b806301335ffd146101055780631c8ff5201461012d57806327513b70146101425780632ddbd13a14610155575b600080fd5b610118610113366004611375565b61028e565b60405190151581526020015b60405180910390f35b61014061013b366004611465565b610388565b005b610140610150366004611465565b610530565b600854610168906001600160401b031681565b6040516001600160401b039091168152602001610124565b61018960095481565b604051908152602001610124565b6101406101a5366004611375565b610670565b6101bd6101b83660046114ef565b6107da565b604051610124919061156c565b60035461011890600160a01b900460ff1681565b6101406101ec366004611586565b6109c2565b6101bd6101ff3660046114ef565b610d0b565b6101bd610212366004611375565b610e31565b6101bd61022536600461164c565b610f8a565b6101bd610238366004611667565b6110c4565b61011861024b36600461164c565b611145565b6101bd61025e366004611667565b611191565b600254610276906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b60035460008054600954604051929384936001600160a01b0391821693631c9febff60e21b936102cf93909116918c918c918c918c918c9190602401611682565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161030d91906116c3565b600060405180830381855afa9150503d8060008114610348576040519150601f19603f3d011682016040523d82523d6000602084013e61034d565b606091505b509091505060018115151461036157600080fd5b50506001600160a01b03851660009081526004602052604090205460ff1695945050505050565b6002546001600160a01b031633146103bb5760405162461bcd60e51b81526004016103b2906116df565b60405180910390fd5b600354600160a01b900460ff16156104075760405162461bcd60e51b815260206004820152600f60248201526e7661756c743a6d696e7420646f6e6560881b60448201526064016103b2565b6001600160a01b03811660009081526004602052604090205460ff16156104405760405162461bcd60e51b81526004016103b29061170d565b6001600160a01b03811660009081526007602090815260409091208451610469928601906112b4565b506008546001600160401b0316600090815260056020908152604080832080546001600160a01b0319166001600160a01b03861690811790915583526006825290912083516104ba928501906112b4565b50600880546001600160401b03169060006104d483611738565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600460205260409020805460ff1916600117905550506003805460ff60a01b1916600160a01b179055565b6002546001600160a01b0316331461055a5760405162461bcd60e51b81526004016103b2906116df565b6001600160a01b03811660009081526004602052604090205460ff16156105935760405162461bcd60e51b81526004016103b29061170d565b6001600160a01b038116600090815260076020908152604090912084516105bc928601906112b4565b506008546001600160401b0316600090815260056020908152604080832080546001600160a01b0319166001600160a01b038616908117909155835260068252909120835161060d928501906112b4565b50600880546001600160401b031690600061062783611738565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600460205260409020805460ff191660011790555050565b60408051808201909152600e81526d3832b936b4b9b9b4b7b72634b11d60911b60208201526003546106ab91906001600160a01b031661124a565b6003546000805460095460405192936001600160a01b0390811693630459e85b60e31b936106e8939216918b918b918b918b918b91602401611682565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161072691906116c3565b600060405180830381855afa9150503d8060008114610761576040519150601f19603f3d011682016040523d82523d6000602084013e610766565b606091505b50909150506001811515146107b25760405162461bcd60e51b81526020600482015260126024820152713b30bab63a1d3ab83230ba329022b93937b960711b60448201526064016103b2565b5050600a80546001600160a01b0319166001600160a01b039590951694909417909355505050565b6008546060906001600160401b038088169116116108305760405162461bcd60e51b81526020600482015260136024820152727661756c743a6b657973206f766572666c6f7760681b60448201526064016103b2565b6003546000805460095460405192936001600160a01b03908116936301f8e06360e01b9361086d939216918c918c918c918c918c9160240161176d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516108ab91906116c3565b600060405180830381855afa9150503d80600081146108e6576040519150601f19603f3d011682016040523d82523d6000602084013e6108eb565b606091505b50909150506001811515146108ff57600080fd5b6001600160401b0387166000908152600560209081526040808320546001600160a01b03168352600790915290208054610938906117b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610964906117b4565b80156109b15780601f10610986576101008083540402835291602001916109b1565b820191906000526020600020905b81548152906001019060200180831161099457829003601f168201915b505050505091505095945050505050565b6001546040516301407ce760e31b81526001600160a01b0390911690630a03e738906109f290849060040161156c565b6020604051808303816000875af1158015610a11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3591906117ef565b1515600114610a865760405162461bcd60e51b815260206004820152601760248201527f7661756c743a2076616c696461746f7220756e7061737300000000000000000060448201526064016103b2565b600a546001600160a01b031615610b1857600a546040516301407ce760e31b81526001600160a01b0390911690630a03e73890610ac790849060040161156c565b6020604051808303816000875af1158015610ae6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0a91906117ef565b1515600114610b1857600080fd5b6003546000805460095460405192936001600160a01b0390811693627733f560e71b93610b5b939216918e918e9189918f918f918f918f918f9190602401611811565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610b9991906116c3565b600060405180830381855afa9150503d8060008114610bd4576040519150601f19603f3d011682016040523d82523d6000602084013e610bd9565b606091505b5090915050600181151514610bed57600080fd5b6001600160a01b03871660009081526004602052604090205460ff1615610c265760405162461bcd60e51b81526004016103b29061170d565b6001600160a01b03871660009081526007602090815260409091208a51610c4f928c01906112b4565b506008546001600160401b0316600090815260056020908152604080832080546001600160a01b0319166001600160a01b038c169081179091558352600682529091208951610ca0928b01906112b4565b50600880546001600160401b0316906000610cba83611738565b82546001600160401b039182166101009390930a92830291909202199091161790555050506001600160a01b039094166000908152600460205260409020805460ff19166001179055505050505050565b6008546060906001600160401b0390811690871610610d2957600080fd5b6003546000805460095460405192936001600160a01b0390811693631046f7f960e01b93610d66939216918c918c918c918c918c9160240161176d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610da491906116c3565b600060405180830381855afa9150503d8060008114610ddf576040519150601f19603f3d011682016040523d82523d6000602084013e610de4565b606091505b5090915050600181151514610df857600080fd5b6001600160401b0387166000908152600560209081526040808320546001600160a01b03168352600690915290208054610938906117b4565b600354600080546009546040516060946001600160a01b0390811693633eeaa95360e01b93610e719391909216918c918c918c918c918c91602401611682565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610eaf91906116c3565b600060405180830381855afa9150503d8060008114610eea576040519150601f19603f3d011682016040523d82523d6000602084013e610eef565b606091505b5090915050600181151514610f0357600080fd5b6001600160a01b03871660009081526004602052604090205460ff161515600114610f675760405162461bcd60e51b81526020600482015260146024820152731d985d5b194e9b1858995b081b9bc8195e1a5cdd60621b60448201526064016103b2565b6001600160a01b03871660009081526007602052604090208054610938906117b4565b6002546060906001600160a01b03163314610fb75760405162461bcd60e51b81526004016103b2906116df565b6001600160a01b03821660009081526004602052604090205460ff16151560011461101b5760405162461bcd60e51b81526020600482015260146024820152731d985d5b1d0e9b1858995b081b9bc8195e1a5cdd60621b60448201526064016103b2565b6001600160a01b0382166000908152600760205260409020805461103e906117b4565b80601f016020809104026020016040519081016040528092919081815260200182805461106a906117b4565b80156110b75780601f1061108c576101008083540402835291602001916110b7565b820191906000526020600020905b81548152906001019060200180831161109a57829003601f168201915b505050505090505b919050565b6002546060906001600160a01b031633146110f15760405162461bcd60e51b81526004016103b2906116df565b6008546001600160401b039081169083161061110c57600080fd5b6001600160401b0382166000908152600560209081526040808320546001600160a01b0316835260069091529020805461103e906117b4565b6002546000906001600160a01b031633146111725760405162461bcd60e51b81526004016103b2906116df565b506001600160a01b031660009081526004602052604090205460ff1690565b6002546060906001600160a01b031633146111be5760405162461bcd60e51b81526004016103b2906116df565b6008546001600160401b038084169116116112115760405162461bcd60e51b81526020600482015260136024820152727661756c743a6b657973206f766572666c6f7760681b60448201526064016103b2565b6001600160401b0382166000908152600560209081526040808320546001600160a01b0316835260079091529020805461103e906117b4565b61128f8282604051602401611260929190611898565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052611293565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546112c0906117b4565b90600052602060002090601f0160209004810192826112e25760008555611328565b82601f106112fb57805160ff1916838001178555611328565b82800160010185558215611328579182015b8281111561132857825182559160200191906001019061130d565b50611334929150611338565b5090565b5b808211156113345760008155600101611339565b80356001600160a01b03811681146110bf57600080fd5b803560ff811681146110bf57600080fd5b600080600080600060a0868803121561138d57600080fd5b6113968661134d565b9450602086013593506113ab60408701611364565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126113ea57600080fd5b81356001600160401b0380821115611404576114046113c3565b604051601f8301601f19908116603f0116810190828211818310171561142c5761142c6113c3565b8160405283815286602085880101111561144557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561147a57600080fd5b83356001600160401b038082111561149157600080fd5b61149d878388016113d9565b945060208601359150808211156114b357600080fd5b506114c0868287016113d9565b9250506114cf6040850161134d565b90509250925092565b80356001600160401b03811681146110bf57600080fd5b600080600080600060a0868803121561150757600080fd5b611396866114d8565b60005b8381101561152b578181015183820152602001611513565b8381111561153a576000848401525b50505050565b60008151808452611558816020860160208601611510565b601f01601f19169290920160200192915050565b60208152600061157f6020830184611540565b9392505050565b600080600080600080600080610100898b0312156115a357600080fd5b88356001600160401b03808211156115ba57600080fd5b6115c68c838d016113d9565b995060208b01359150808211156115dc57600080fd5b6115e88c838d016113d9565b98506115f660408c0161134d565b975060608b0135965061160b60808c01611364565b955060a08b0135945060c08b0135935060e08b013591508082111561162f57600080fd5b5061163c8b828c016113d9565b9150509295985092959890939650565b60006020828403121561165e57600080fd5b61157f8261134d565b60006020828403121561167957600080fd5b61157f826114d8565b6001600160a01b039788168152959096166020860152604085019390935260ff919091166060840152608083015260a082015260c081019190915260e00190565b600082516116d5818460208701611510565b9190910192915050565b6020808252601490820152731d985d5b1d0e98d85b1b195c881a5b9d985b1a5960621b604082015260600190565b6020808252601190820152701d985d5b1d0e9b1858995b08195e1a5cdd607a1b604082015260600190565b60006001600160401b038083168181141561176357634e487b7160e01b600052601160045260246000fd5b6001019392505050565b6001600160a01b039790971687526001600160401b03959095166020870152604086019390935260ff919091166060850152608084015260a083015260c082015260e00190565b600181811c908216806117c857607f821691505b602082108114156117e957634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561180157600080fd5b8151801515811461157f57600080fd5b6001600160a01b038b81168252610140602083018190526000916118378483018e611540565b9150838203604085015261184b828d611540565b9150838203606085015261185f828c611540565b99166080840152505060a081019590955260ff9390931660c085015260e084019190915261010083015261012090910152949350505050565b6040815260006118ab6040830185611540565b905060018060a01b0383166020830152939250505056fea164736f6c634300080c000a";

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
    _permissionLib: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PrivateVault> {
    return super.deploy(
      _signer,
      _caller,
      _validator,
      _permissionLib,
      overrides || {}
    ) as Promise<PrivateVault>;
  }
  override getDeployTransaction(
    _signer: string,
    _caller: string,
    _validator: string,
    _permissionLib: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _signer,
      _caller,
      _validator,
      _permissionLib,
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
