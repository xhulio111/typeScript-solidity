/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { Counter } from "./Counter";

export class CounterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<Counter> {
    return super.deploy() as Promise<Counter>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  connect(signer: Signer): CounterFactory {
    return super.connect(signer) as CounterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256"
      }
    ],
    name: "CountedTo",
    type: "event"
  },
  {
    constant: false,
    inputs: [],
    name: "countDown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "countUp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50610274806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd8599e146100465780635fcbd5b614610064578063a87d942c14610082575b600080fd5b61004e6100a0565b6040518082815260200191505060405180910390f35b61006c61016b565b6040518082815260200191505060405180910390f35b61008a610236565b6040518082815260200191505060405180910390f35b60008060016000540190506000548111610122576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f55696e74323536206f766572666c6f770000000000000000000000000000000081525060200191505060405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e676000546040518082815260200191505060405180910390a160005491505090565b600080600160005403905060005481106101ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f55696e7432353620756e646572666c6f7700000000000000000000000000000081525060200191505060405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e676000546040518082815260200191505060405180910390a160005491505090565b6000805490509056fea265627a7a7231582079433706424fff787569f3c54b20c90285e067f24bb1b5a7eebcc41b8a544af564736f6c634300050c0032";
