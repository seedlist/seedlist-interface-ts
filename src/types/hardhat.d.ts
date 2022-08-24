/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ISeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISeed__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "IValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IValidator__factory>;
    getContractFactory(
      name: "IWorker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWorker__factory>;
    getContractFactory(
      name: "IPrivateVaultHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPrivateVaultHub__factory>;
    getContractFactory(
      name: "IVaultHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVaultHub__factory>;
    getContractFactory(
      name: "Constant",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Constant__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "SeedToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SeedToken__factory>;
    getContractFactory(
      name: "Treasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Treasury__factory>;
    getContractFactory(
      name: "Validator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Validator__factory>;
    getContractFactory(
      name: "PrivateVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PrivateVault__factory>;
    getContractFactory(
      name: "VaultHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultHub__factory>;

    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ISeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISeed>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "IValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IValidator>;
    getContractAt(
      name: "IWorker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWorker>;
    getContractAt(
      name: "IPrivateVaultHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPrivateVaultHub>;
    getContractAt(
      name: "IVaultHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVaultHub>;
    getContractAt(
      name: "Constant",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Constant>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "SeedToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SeedToken>;
    getContractAt(
      name: "Treasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Treasury>;
    getContractAt(
      name: "Validator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Validator>;
    getContractAt(
      name: "PrivateVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PrivateVault>;
    getContractAt(
      name: "VaultHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultHub>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
