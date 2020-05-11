---
id: entrypoints
title: Entrypoints
---

A [smart contract](smart-contract) can be seen as a collection of functions that share and manipulate the same storage. Entrypoints expose predefined functions and make them explicitly callable.

For example in the [notarization workshop](../../learn/workshops/notarization/overview) the smart contract as seen [here](https://github.com/stove-labs/workshop-notarization/blob/dev/smart-contracts/contracts/main/notary.religo) exposes two functinos with the entrypoints:

1. NotarizeDocument(notarizeParameter)
2. SignDocument(signParameter)