---
id: context
title: Context
---

Context is the state of the blockchain. The most common implementation of a state machine is a database. The important difference to a simple database is that a set of rules secures the state of a blockchain. The rules are codified in the [protocol](protocol). [Operations](operations/operations) modify the context. 

An example would be the simple transfer of currency or *tez* between accounts. This requires to change the context that tracks the balances accounts. For complex applications this could be the data structure of a [smart contract](../smart_contract/smart-contract).