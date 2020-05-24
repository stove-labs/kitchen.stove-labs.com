---
id: block
title: Block
---


A block is a package of data that contains zero or more [operations](operations/operations), a hash to the previous block and other data. We call it blockchain, because each block points to a previous block, except for the very first block: the *genesis block*.


:::note Good to know
A block is uniquely identifiable by its hash. In Tezos the block's hash is prepended with the letter **B** as defined [here](https://gitlab.com/tezos/tezos/-/blob/master/src/lib_crypto/block_hash.ml). A valid example is *BLCvke7kTB12jEs8tNQukMbCmkknwnfSDQwmZKniKwbQ2yJJb6W*.  
:::

<!-- TO-DO add screen from blockchain explorer and all items of a block -->