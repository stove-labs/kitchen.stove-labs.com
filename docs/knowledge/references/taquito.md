---
id: taquito
title: Taquito SDK
---

Taquito is a popular TypeScript/JavaScript SDK for developing on Tezos. It will take care of communicating with the blockchain in general. It brings a lot of convenience when interacting with [smart contracts](../smart_contract/smart-contract), because it provides a useful abstraction layer for multiple interactions with *storage* and *entrypoints*. For prototyping it is very easy using a local *signer* (secret-key in memory) for adding necessary [signatures](../tezos_protocol/cryptography/signature) to [operations](../tezos_protocol/operations/operations) within the SDK environment. More importantly when going beyond prototyping, it supports various external signers, such as [TezBridge](tezbridge) or *Beacon*. Those are browser plugins that provide a secure vault for storing and handling keys externally.

In summary, Taquito is used to interact with smart contracts using TypeScript, instead of using the console. This SDK is used to:

* Activate the account provided through the *faucet*.json
* Deploy [Michelson](../smart_contract/michelson) code
* Read the entrypoints of the smart contract
* Read the storage of the smart contract
* Create and forge [transactions](../tezos_protocol/operations/transaction)
* Announce transactions to the node
* Create unit tests in TypeScript
* Interface with various wallets
  