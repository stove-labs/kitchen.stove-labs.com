---
id: wiki
title: Wiki
---

# Protocol

## Cryptography

### (Implicit) Account

:::important
There are two types of `Accounts`:
- **implicit** account is linked to a key-pair and starts with `tz1`, `tz2` or `tz3`.
- **originated** account is linked to a Michelson script and starts with `KT1`.
:::



An implicit account is a keypair that is associated with a storage in the blockchain. This storage saves the state of the account, eg. the balance. Think of the storage as a bank safe that can be only opened and modified by your private key.


#### (Originated) Account



#### Smart Contracts

#### Key Pair


Ed25519 is an elliptive curve used in Tezos to manage tz1 addresses, i.e. to sign data and check signatures.

note: diagram and examples for deriving

```
alice: {
        public_key_hash: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
        secret_key: "edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq",
        public_key: "edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn"
    }
```

#### Signature



## Block 

## Fees

Required fees per operation:

```
fees >= minimal_fees +
        minimal_nanotez_per_byte * size +
        minimal_nanotez_per_gas_unit * gas

+------------------+------------+-------------+----------------+
|  Operation       |     Gas    |    Fees     |   Burn         |
+==================+============+=============+================+
| transfer 1ꜩ      |    10200   | 0.001281ꜩ   | 0 or 0.257 (*) |
+------------------+------------+-------------+----------------+
| transfer 1Mꜩ     |    10200   | 0.001284ꜩ   | 0 or 0.257 (*) |
+------------------+------------+-------------+----------------+
| origination      |    10000   | 0.001265ꜩ   |     0.257      |
+------------------+------------+-------------+----------------+
| delegation       |    10000   | 0.001257ꜩ   |     0          |
+------------------+------------+-------------+----------------+
| revealing        |    10000   | 0.001268ꜩ   |     0          |
+------------------+------------+-------------+----------------+

(*) if the recipient is a new address
```

## Baking


