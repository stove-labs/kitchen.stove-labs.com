---
id: taquito
title: Taquito SDK
---

Taquito is a popular TypeScript/JavaScript SDK for developing on Tezos. It will take care of communicating with the blockchain in general. It brings a lot of convenience when **interacting** with [**smart contracts**](../smart_contract/smart-contract), because it provides a useful abstraction layer for multiple interactions with **storage** and [**entrypoints**](../smart_contract/entrypoints). For prototyping it is very easy using a local *signer* (secret-key in memory) for adding necessary [signatures](../tezos_protocol/cryptography/signature) to [operations](../tezos_protocol/operations/operations) within the SDK environment. More importantly when going beyond prototyping, it supports **various external signers**, such as [TezBridge](tezbridge) or [Beacon](https://www.walletbeacon.io). Those are browser plugins that provide a secure vault for storing and handling keys externally. In summary, Taquito is used to interact with smart contracts using TypeScript, instead of using a command line interface (CLI). 

We use this SDK to:

* Activate the account provided through the *faucet*.json
* Deploy [Michelson](../smart_contract/michelson) code
* Read the entrypoints of the smart contract
* Read the storage of the smart contract
* Create and forge [transactions](/docs/knowledge/tezos_protocol/operations/operations)
* Announce operations to the node
* Create unit tests in TypeScript
* Interface with various wallets
  