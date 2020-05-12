---
id: smart-contract
title: Overview
---

A smart contract is a special type of account. Its address always starts with the letters `KT1`.  The smart contract account is created by *originating* it from an [*implicit* account](../tezos_protocol/implicit-account). That's why it is also called `originated account`. It has the smart contract code attached to it. Whenever a smart contract receives a transaction (an instruction), its code is invoked and executed. The contract code is written in a Tezos specific language called [Michelson](michelson). 

## Anatomy of a smart contract

### Entrypoints