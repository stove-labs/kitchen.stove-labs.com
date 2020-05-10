---
id: taquito
title: Taquito SDK
---

Taquito is a popular TypeScript/JavaScript SDK for developing on Tezos. It will take care of communicating with the blockchain in general. It brings a lot of convenience when interacting with [smart contracts](smart-contract), because it provides a useful abstraction layer for multiple interactions with *storage* and *entrypoints*. The SDK supports adding [signatures](signature) within the SDK environment, as well as calling various external external signers, such as [TezBridge](tezbridge) or *Beacon*. 

In summary, Taquito is used to interact with smart contracts using TypeScript, instead of using the console. This SDK is used to:

* Activate the account provided through the *faucet*.json
* Deploy [Michelson](michelson) code
* Read the entrypoints of the smart contract
* Read the storage of the smart contract
* Create and forge [transcations](transaction)
* Announce transactions to the node
* Create unit tests in TypeScript
* Interface with various wallets
  