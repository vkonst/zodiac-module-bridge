import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat"; // Optional (for `node <script>`)

async function deploy(
  owner: string,
  avatar: string,
  target: string,
  controller: string,
  fxChild: string
) {
  const MaticBridgeModule: ContractFactory = await ethers.getContractFactory(
    "MaticBridgeModule"
  );
  const maticBridgeModule: Contract = await MaticBridgeModule.deploy(
    owner,
    avatar,
    target,
    controller,
    fxChild
  );
  await maticBridgeModule.deployed();

  console.log(
    "MaticBridgeModule has been deployed to: ",
    maticBridgeModule.address
  );
}

async function main(): Promise<void> {
  const owner = process.env.OWNER_ADDRESS || "";
  const avatar = process.env.AVATAR_ADDRESS || "";
  const target = process.env.TARGET_ADDRESS || "";
  const controller = process.env.CONTROLLER_ADDRESS || "";
  const fxChild = process.env.FXCHILD_ADDRESS || "";
  await deploy(owner, avatar, target, controller, fxChild);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
