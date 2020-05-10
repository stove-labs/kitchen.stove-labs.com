---
id: gas-fees
title: Gas & Fees
---

A fee is paid to a *baker*, while a burn is destroyed.


## Burn "fee" 

Whenever a [transaction](transaction) increases the [context](context) of the blockchain, the source address must pay a burn fee. This fee is basically deflation, because no account is the recipient. Also not a *baker*. 
The two diffrent types of burn fee are:

1. Allocation burn of 0.257 tez or 257000 mtez
   1. Activation of a new address happens when the first transaction is sent to it[^1]. 
   2. A new [smart contract](smart-contract) is created. A new `KT1` address is [originated](originated-account).
2. Storage burn: the size of the smart contract increases.


[^1]: The public key for an address is *revealed* when a the first transaction is sent from it. This is important for other participants to verify operations signed by that public key.


## Gas

In short, gas is a limitation that prevents programms in the form of [smart contracts](smart-contract) to run uncontrollably. Gas is a measurement that is a rough equivalent of computational steps required to calculate the new [state](context). Consider the case of a smart contract that runs recursively. If there would be nothing to stop the programm from running, many contracts could clog up the blockchain network. That's why a gas limit needs to be paid for every transaction. If the total gas used by the smart contract computation is less or equal the gas limit, then the transaction is processed and changes are applied to the state. However, if the total gas used is higher than the gas limit paid previously, then all changes are reverted, but the gas fee is collected by the miner. In other words, the transaction is still valid, but has no effect on the state. It is the responsibility of the sender to include enough gas for the transaction.