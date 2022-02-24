pragma solidity ^0.8.0;

interface IMaticBridgeModule {
  function processMessageFromRoot(
    uint256 stateId,
    address rootMessageSender,
    bytes calldata data
  ) external;
}
