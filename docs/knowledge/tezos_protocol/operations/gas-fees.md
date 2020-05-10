---
id: gas-fees
title: Gas & Fees
---

Generally speaking, a fee is paid to a *baker*, while a burn is destroyed. The latter has a deflationary quality for the total supply of *tez*, because no account is the recipient -  not even a *baker*.




## Burn

Whenever a [transaction](transaction) increases the [context](../context) of the blockchain, the source address must pay a burn fee.
The two different types of burn fee are:

1. Allocation burn of 0.257 tez or 257000 mtez
   1. Activation of a new address happens when the first transaction is sent to it[^1]. 
   2. A new [smart contract](../../smart_contract/smart-contract) is created. A new `KT1` address is [originated](originated-account).
2. Storage burn: the size of the smart contract increases.


[^1]: The public key for an address is *revealed* when a the first transaction is sent from it. This is important for other participants to verify operations signed by that public key.


## Gas

In short, gas is a limitation that prevents programms in the form of [smart contracts](../../smart_contract/smart-contract) to run uncontrollably. Gas is a measurement that is a rough equivalent of computational steps required to calculate the new [state](context). Consider the case of a smart contract that runs recursively. If there would be nothing to stop the programm from running, many contracts could clog up the blockchain network. That's why a gas limit needs to be paid for every transaction. If the total gas used by the smart contract computation is less or equal the gas limit, then the transaction is processed and changes are applied to the state. However, if the total gas used is higher than the gas limit paid previously, then all changes are reverted, but the gas fee is collected by the miner. In other words, the transaction is still valid, but has no effect on the state. It is the responsibility of the sender to include enough gas for the transaction.

## Calculating total fee

The most reliable way to determine the total fee that has to be paid for a [transaction operation](operations) is calculated by doing a `--dry-run` in *tezos-client*. The node simulates the [michelson](../../smart_contract/michelson) execution and traces the amount of gas used for computation and how much storage is required. Then the client adds as a safety mechanism another 100 extra *units of gas*. As stated above, this is not a problem, because the transaction initiator will receive back the surplus of gas.

Nevertheless it is useful to understand how the fee per operation is computed. In protocol [004_Athens](https://tezos.gitlab.io/protocols/004_Pt24m4xi.html) the constants were updated, but the formula has not changed:

```
total_cost = safety gas + burn + fees

safety gas = 100 gas units

burn = storage_difference * minimal_nanotez_per_byte

fees >= minimal_fees +
        minimal_nanotez_per_byte * size +
        minimal_nanotez_per_gas_unit * gas
```

Transfer to an inactive [implicit account](../implicit-account)
```
gas_limit : 10200
storage_limit : 257 bytes
fee : 1281 mtz
opbytes : ~162
```
Transfer to an active [implicit account](../implicit-account) or KT1 [originated account](originated-account)
```
gas_limit : 10200
storage_limit : 257 bytes
fee : 1281 mtz
opbytes : ~162
```