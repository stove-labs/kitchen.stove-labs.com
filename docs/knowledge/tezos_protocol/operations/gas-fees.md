---
id: gas-fees
title: Gas & Fees
---

Every transaction on Tezos incurs costs for its computation and used storage. Consider that every [node](../node) is performing the calculation and keeps a copy of the data. That's why it is necessary to provide an incentive for node operators to run the infrastructure. This is done by charging a fee paid in the native crypto currency ꜩ. A nice side effect of this is that it encourages developers to write "lean" code.

:::tip Basics
1 ꜩ = 1 tez = 1 XTZ = 1,000,000 mutez
 
0.001 tez = 1000 mutez
:::

## Burn

Whenever a [transaction](transaction) increases the [context](../context) of the blockchain, the source address must pay a burn fee.
The two different types of burn fee are:

1. Allocation burn of 0.257 ꜩ (tez) or 257,000 mutez
   1. Activation of a new address happens when the first transaction is sent to it[^1]. 
   2. A [smart contract](../../smart_contract/smart-contract) is created. A new `KT1` address is [originated](../account).
2. Storage burn: the size of the smart contract increases.



## Gas

In short, gas is a measure for *how long* it takes a program to compute. It is a rough equivalent of computational steps required to calculate the new [state](../context). This limitation prevents programs in the form of [smart contracts](../../smart_contract/smart-contract) to run uncontrollably. 

Consider the case of a smart contract that runs recursively. If there would be nothing to stop the program from running, many contracts could clog up the blockchain network. That's why a gas limit needs to be paid for every transaction. If the total gas used by the smart contract computation is less or equal the gas limit, then the transaction is processed and changes are applied to the state. However, if the total gas used is higher than the gas limit paid previously, then all changes are reverted, but the gas fee is collected by the baker. In other words, the transaction is still valid, but has no effect on the state. It is the responsibility of the sender to include enough gas for the transaction.

## Calculating total fee

The most reliable way to determine the total fee that has to be paid for any [operation](operations) is done by running a simulation in the node. The node simulates the [Michelson](../../smart_contract/michelson) code execution and traces the amount of gas used for computation and how much storage was required. This value is not used as final fee limit, but another 100 extra *units of gas* are added as safety mechanism. It is not a problem sending too much gas with a transaction, because the transaction initiator will receive back the surplus of gas.

:::tip
We can use the `.estimate` function of [Taquito](../../references/taquito) to simulate operations in the node. It reliably traces gas and storage costs that are used for the `gas_limit` and `storage_limit` property of the transaction object. After adding a small safety limit, the transaction is good go on a live network. In this way you will avoid paying fees for transactions that erroneous, because they run out of gas before final execution.  
:::

Nevertheless it is useful to understand how the fee per operation is computed. In protocol [004_Athens](https://tezos.gitlab.io/protocols/004_Pt24m4xi.html) the constants were updated, but the formula has not changed:

```
total_cost = burn + fees + amount

burn = storage_difference * minimal_nanotez_per_byte

fees >= minimal_fees +
        minimal_nanotez_per_byte * size +
        minimal_nanotez_per_gas_unit * gas

in practice:

fees >= 100 +
        1 * size +
        0.1 * gas
```

Below are two examples of estimating the operation costs using Taquito:

Transfer of 1 ꜩ to an inactive[^1] [implicit account](../implicit-account)
```
_gasLimit : 10207
_storageLimit : 257 bytes
opSize : ~88
baseFeeMutez : 100
```
The total cost for this operation was after execution 1.258319 ꜩ.

Transfer of 1 ꜩ to an active [implicit account](../implicit-account) or KT1 [originated account](originated-account)
```
_gasLimit : 10207
_storageLimit : 0 bytes
opSize : ~88
baseFeeMutez : 100
```
The total cost for this operation was after execution 1.001319 ꜩ

:::tip 
A **fee** is paid to a *baker*, while a **burn** is destroyed. The latter has a deflationary quality for the total supply of ꜩ, because no account is the recipient -  not even a *baker*.
:::

[^1]: The public key for an address is [*revealed*](reveal-operation) when a the first transaction is sent from it. This is important for other participants to verify operations signed by that public key.
