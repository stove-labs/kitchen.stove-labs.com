---
id: address
title: Address
---

## Implicit account

The address of an _implicit_ account takes the following shape: 

`tz`+ `signature scheme`+ `hash of public key`

It starts with `tz` and is followed by the signature scheme _1_, _2_ or _3_ and the hash of the public key.

The 3 signature schemes depend on the elliptic curves used

- `tz1` for Ed25519
- `tz2` for Secp256k1 (ECDSA)
- `tz3` for NIST P256 (ECDSA) 

## Originated account

The address of an _originated_ account, a [smart contract](../../smart_contract/smart-contract), always starts with `KT1`.