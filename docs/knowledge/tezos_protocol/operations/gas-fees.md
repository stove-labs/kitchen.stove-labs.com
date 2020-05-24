---
id: gas-fees
title: Gas & Fees
---

Every transaction on Tezos incurs costs for its computation and used storage. Consider that every [node](../node) is performing the calculation and keeps a copy of the data. That's why it is necessary charge a fee to provide an incentive for node operators to run the infrastructure and to encourage "lean" code.


:::tip 
A **fee** is paid to a *baker*, while a **burn** is destroyed. The latter has a deflationary quality for the total supply of ꜩ, because no account is the recipient -  not even a *baker*.
:::

## Burn

Whenever a [transaction](transaction) increases the [context](../context) of the blockchain, the source address must pay a burn fee.
The two different types of burn fee are:

1. Allocation burn of 0.257 ꜩ (tez) or 257000 mtez
   1. Activation of a new address happens when the first transaction is sent to it[^1]. 
   2. A new [smart contract](../../smart_contract/smart-contract) is created. A new `KT1` address is [originated](originated-account).
2. Storage burn: the size of the smart contract increases.


[^1]: The public key for an address is *revealed* when a the first transaction is sent from it. This is important for other participants to verify operations signed by that public key.


## Gas

In short, gas is a measure for *how long* it takes a program to compute. It is a rough equivalent of computational steps required to calculate the new [state](context). This limitation prevents programs in the form of [smart contracts](../../smart_contract/smart-contract) to run uncontrollably. 
Consider the case of a smart contract that runs recursively. If there would be nothing to stop the program from running, many contracts could clog up the blockchain network. That's why a gas limit needs to be paid for every transaction. If the total gas used by the smart contract computation is less or equal the gas limit, then the transaction is processed and changes are applied to the state. However, if the total gas used is higher than the gas limit paid previously, then all changes are reverted, but the gas fee is collected by the baker. In other words, the transaction is still valid, but has no effect on the state. It is the responsibility of the sender to include enough gas for the transaction.

## Calculating total fee

The most reliable way to determine the total fee that has to be paid for a [transaction operation](operations) is calculated by doing a `--dry-run` in *tezos-client*. The node simulates the [michelson](../../smart_contract/michelson) execution and traces the amount of gas used for computation and how much storage is required. Then the client adds as a safety mechanism another 100 extra *units of gas*. As stated above, this is not a problem, because the transaction initiator will receive back the surplus of gas.

:::tip
Simulating the operation with the *tezos-client* using the `--dry-run` flag is very useful. The transaction is ran locally in your node and you will immediately know whether it executes successfully. Additionally, it traces gas and storage costs that you can use for `gas_limit` and `storage_limit`, when announcing the transaction on a live network. In this way you will avoid paying fees for an erroneous transaction.  
:::

Nevertheless it is useful to understand how the fee per operation is computed. In protocol [004_Athens](https://tezos.gitlab.io/protocols/004_Pt24m4xi.html) the constants were updated, but the formula has not changed:

```
total_cost = burn + fees

burn = storage_difference * minimal_nanotez_per_byte

fees >= minimal_fees +
        minimal_nanotez_per_byte * size +
        minimal_nanotez_per_gas_unit * gas

in practice:

fees >= 100 +
        1 * size +
        0.1 * gas
```

Two examples are:

Transfer to an inactive[^1] [implicit account](../implicit-account)
```
gas_limit : 10200
storage_limit : 257 bytes
fee : 1281 mtz
opbytes : ~162
```
Transfer to an active [implicit account](../implicit-account) or KT1 [originated account](originated-account)
```
gas_limit : 10200
storage_limit : 0 bytes
fee : 1281 mtz
opbytes : ~162
```

For more information on gas & fees visit the [official documentation](https://tezos.gitlab.io/protocols/004_Pt24m4xi.html#gas-and-fees).

:::tip
According to the popular JavaScript API library [eztz](https://github.com/TezTech/eztz/blob/master/PROTO_004_FEES.md), recommended settings for transactions should be a fee of 1420mutez, a storage limit of 300 and a gas limit of 10600, meeting a variety of cases. The safest way is to simulate any operation with `--dry-run` in *tezos-client* to estimate the costs and to add a safety blanket of +100mutez.
:::


Recommended settings for transactions should be fee of 1420mutez, storage limit of 300, and gas limit of 10600 (to cover a variety of cases)

[^1] An *inactive* account has 0 balance and is not registered as a baker.