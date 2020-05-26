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

The most reliable way to determine the total fee that has to be paid for any [operation](operations) is done by running a simulation in the node. The node simulates the [Michelson](../../smart_contract/michelson) code execution and traces the amount of gas used for computation and how much storage was required. This value is not used as final fee limit, but another 100 extra *units of gas* are added as buffer. It is not a problem sending too much gas with a transaction, because the transaction initiator will receive back the surplus of gas.

Nevertheless it is useful to understand how the fee per operation is computed. In protocol [004_Athens](https://tezos.gitlab.io/protocols/004_Pt24m4xi.html) the constants were updated, but the formula has not changed:

```
total_cost = burn + fees + amount of tez

burn = storage_difference * MINIMAL_FEE_PER_STORAGE_BYTE_MUTEZ

fees >= MINIMAL_FEE_MUTEZ +
        MINIMAL_FEE_PER_BYTE_MUTEZ * size +
        MINIMAL_FEE_PER_GAS_MUTEZ * gas

in practice:

fees in mutez >= 100 +
                 1 * size +
                 0.1 * gas
```

:::tip
We can use the `.estimate` function of [Taquito](../../references/taquito) to simulate operations in the node. It reliably traces gas and storage costs that are used for the `_gasLimit` and `_storageLimit` property of the transaction object. After adding a small safety limit (gas buffer), the transaction is ready to be announced to a live network. In this way you will avoid erroneous transactions, where the computation runs out of gas before final execution.  
:::

Taquito uses the following constants[^2] for estimation:
```javascript
const MINIMAL_FEE_MUTEZ = 100;
const MINIMAL_FEE_PER_BYTE_MUTEZ = 1;
const MINIMAL_FEE_PER_STORAGE_BYTE_MUTEZ = 1000;
const MINIMAL_FEE_PER_GAS_MUTEZ = 0.1;
const GAS_BUFFER = 100;
```

We can also go to the source code of the Tezos protocol for the constants ([default_parameters.ml](https://gitlab.com/nomadic-labs/tezos/-/blob/proto-006/src/proto_alpha/lib_parameters/default_parameters.ml#L51)) `cost_per_byte = Tez_repr.of_mutez_exn 1_000L;`.

Below are two examples of estimating the operation costs using Taquito. We will see that there is a difference of 257,000 mutez or 0.257 tez, because of the storage burn necessary for activating an account (receiving the first transaction):

**Transfer of 1 ꜩ to an inactive[^1]** [implicit account](../implicit-account)
```
_gasLimit : 10207 gas units
_storageLimit : 257 bytes
opSize : ~88 bytes
baseFeeMutez : 100 mutez
```
The **total cost** for this operation was after execution **1.258319 ꜩ**.

**Transfer of 1 ꜩ to an active** implicit or originated [account](../account).
```
_gasLimit : 10207 gas units
_storageLimit : 0 bytes
opSize : ~88 bytes
baseFeeMutez : 100 mutez
```
The **total cost** for this operation was after execution **1.001319 ꜩ**. 





:::tip 
A **fee** is paid to a *baker*, while a **burn** is destroyed. The latter has a deflationary quality for the total supply of ꜩ, because no account is the recipient -  not even a *baker*.
:::

[^1]: The public key for an address is [*revealed*](reveal-operation) when a the first transaction is sent from it. This is important for other participants to verify operations signed by that public key.
[^2]: [estimate.ts](https://github.com/ecadlabs/taquito/blob/81ae43be06f1be03bda17dac125ca0ad04c39a13/packages/taquito/src/contract/estimate.ts#L1-L4) 