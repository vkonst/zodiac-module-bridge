import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat"; // Optional (for `node <script>`)

async function deploy(checkPointerManager: string, fxRoot: string) {
  const FxStateRootTunnel: ContractFactory = await ethers.getContractFactory(
    "FxStateRootTunnel"
  );
  const fxStateRootTunnel: Contract = await FxStateRootTunnel.deploy(
    checkPointerManager,
    fxRoot
  );
  await fxStateRootTunnel.deployed();

  console.log(
    "FxStateRootTunnel has been deployed to: ",
    fxStateRootTunnel.address
  );
}

async function getDefaultMinter(): Promise<string> {
  const signers = await ethers.getSigners();
  return signers[0].address;
}

async function main(): Promise<void> {
  const checkPointerManager = process.env.CHECK_POINT_MANAGER || "";
  const fxRoot = process.env.FXROOT || "";

  await deploy(checkPointerManager, fxRoot);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
