---
id: michelson
title: Michelson
---

Michelson is the [smart contract](smart-contract) language of Tezos. 

> The (Michelson) language is stack-based, with high level data types and primitives, and strict static type checking. 

[Official documentation](https://tezos.gitlab.io/whitedoc/michelson.html)


Here's an example of Michelson code: 

```
{ parameter (or (or (nat %add) (nat %sub)) (unit %default)) ;
  storage int ;
  code { AMOUNT ; PUSH mutez 0 ; ASSERT_CMPEQ ; UNPAIR ;
         IF_LEFT
           { IF_LEFT { ADD } { SWAP ; SUB } }
           { DROP ; DROP ; PUSH int 0 } ;
         NIL operation ; PAIR } }
```

The contract itself contains three main parts:

- **parameter** - An argument that is provided by a transaction invoking the contract.
- **storage** - The type definition for the contract's data storage.
- **code** - The actual Michelson code, that has the provided parameter & the current storage value in it's initial stack, and outputs a list of operations & a new storage value as it's resulting stack.


Michelson code consists of instructions like IF_LEFT, PUSH ..., UNPAIR that are bundled togeter in what is called a sequence. Stack represents an intermediate state of the program, while storage represents a persistent state. Instructions are used to modify the run-time stack in order to yield a desired stack value when the program terminates.