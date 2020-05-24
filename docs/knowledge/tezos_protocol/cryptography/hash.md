---
id: hash
title: Hash
---

A hashing algorithm or function is very common in computer science and plays likewise an important part in the inner workings of blockchain technology. In simple terms, this function takes any value and converts it. It can basically take text/data of any size and compute a fixed-size value called *hash*. The reverse is (practically) not possible and that's why it makes it a great fit for cryptography. It obscures or *masks* the original data with another value. 

| input                     | hashing algorithm[^1] | output (HEX encoded)                                             |
|---------------------------|:-----------------:|------------------------------------------------------------------|
| never trust a skinny chef | sha256            | `36d87a683cfb033dcdb751723d5ef32085988716ce87a30c4ee3844992510a6a` |
| never trust a skinny che  | sha256            | `11f6aa7fe909d81ed3333fda85776122dc39694bfc234b74320f6754608847ea` |
| never trust a skinny chef | BLAKE2b           | `e6a817e6220b93d7bfbc8184e6cfc0194cb336656c5f6266e76931002f5caafc` |


:::note
SHA256 is the hashing algorithm used in the [notarization workshop](../../../learn/workshops/notarization/theory/overview) on the client side. On the other hand, Tezos [uses internally](https://gitlab.com/tezos/tezos/-/blob/master/src/lib_crypto/blake2B.ml) the quite performant [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2b_algorithm) hashing algorithm. For example, when [deriving](key-pair) the address from a public key or [hashing a block](https://gitlab.com/tezos/tezos/-/blob/master/src/lib_crypto/block_hash). Tezos source code will support various[^2] other hashing algorithms, such as SHA256, SHA512, SHA3_256, SHA3_512, Keccak_256, but it remains yet undecided how and when it will be exposed to [Michelson](../../smart_contract/michelson).
:::


The four most important properties of hashing functions to understand are:

1. deterministic - the same input always returns the same output hash
2. uncorrelated - a small change in the message generates a completely different hash
3. unique - it is infeasible for two different messages to generate the same hash
4. one-way - it is infeasible to calculate or guess the input from the output hash

Based on these properties, we can think of a hash the same way as about a fingerprint of a human being. We know that the fingerprint belongs to one person, but we can't make out the rest of the person and his/her appearance. This comes very handy for designing blockchain based solutions, because data is rather expensive to store on-chain and therefore it is better to have a uniquely identifiable "fingerprint" stored there. The notarization workshop makes great use of hashing for the purpose of time-stamping data with the help of blockchain. Check out the [notarization workshop](/docs/learn/workshops/notarization/theory/overview) for step-by-step instructions.


[^1]: You can try yourself with this [online tool](https://8gwifi.org/MessageDigest.jsp)
[^2]: [HACL* v2](https://gitlab.com/tezos/tezos/-/merge_requests/1791) integration in OCaml for Tezos