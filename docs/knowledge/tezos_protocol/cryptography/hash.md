---
id: hash
title: Hash
---

This function can basically take text/data of any size and compute a fixed-size value called *hash*.

```
sha256 is a type of SHA-2 (Secure Hash Algorithm 2)
sha256('never trust a skinny chef') = 36d87a683cfb033dcdb751723d5ef32085988716ce87a30c4ee3844992510a6a
sha256('never trust a skiny chef')  = 40526579889ed880ceac08478fff0fc7dec022dd5843725b1fb3a26ea1f8a62f
```
The four most important properties of hashing functions to understand are:

1. deterministic - the same input always returns the same output hash
2. uncorrelated - a small change in the message generates a completely different hash
3. unique - it is infeasible for two different messages to generate the same hash
4. one-way - it is infeasible to calculate or guess the input from the output hash


:::note
Tezos uses the [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2b_algorithm) hashing algorithm.
:::