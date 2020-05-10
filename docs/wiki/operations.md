---
id: operations
title: Operations
---

Operations change the [context](context) of the blockchain. This transformation of the state happens at certain intervals,  whenever a new [block](block) is created. The block holds all operations.

There are different types of operations (how it affects balance[^1]):
* Baking type  
  * Accusations (reward)
  * Endorsements (reward)
* Voting type
  * Ballot (does not affect)
  * Proposal (does not affect)
* Anonymous type
  * Activate account (burn)
  * Double baking evidence (reward - loss)
  * Double endorsement evidence (reward - loss)
  * Seed nonce revelation (reward)
* Manager type
  * Revelation (fee)
  * Delegations (fee)
  * Transactions to transfer *tez* funds (transfer - fee)
  * Transactions to invoke/interact with [smart contracts](smart-contract) (transfer - fee)
  * [Originations](originated-account) of smart contracts



[^1]: [Online discussion](https://tezos.stackexchange.com/questions/2236/rewards-for-operations/2240#2240) about rewards for operations.