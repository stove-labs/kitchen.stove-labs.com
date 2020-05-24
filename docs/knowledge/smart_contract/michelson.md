---
id: michelson
title: Michelson
---

Michelson is the name of the [smart contract](smart-contract) language of Tezos. Generally speaking, Michelson is to Tezos what the Ethereum Virtual Machine (EVM) is to Ethereum blockchain. It was specifically developed for Tezos and this article introduces you to the basics of the language and gives an outlook at its main differentiator: *formal verification*.

## Michelson language

> The (Michelson) language is stack-based, with high level data types and primitives, and strict static type checking. 

[Official documentation](https://tezos.gitlab.io/whitedoc/michelson.html)

As opposed to the EVM's "lower-level" bytecode, Michelson "higher-level" bytecode is human readable. With enough training you *could* verify yourself what comes out of the compiler and even write your own native Michelson code. Luckily this is not necessary in practice, because high-level languages had been developed that resemble popular languages, such as Python, Reason, OCaml, that compile down to Michelson. Nevertheless it is useful to understand the basic building blocks of Michelson code. 


### Michelson code

The following example is a simple Michelson smart contract that does the following: It takes a natural number as parameter and saves that number to its storage. 

```
{ parameter nat ;
  storage nat ;
  code { DUP ; CDR ; NIL operation ; PAIR ; DIP { DROP } } }
```

The contract itself has three parts:

- **parameter** - This is the argument that is passed through a [transaction](../tezos_protocol/operations/transaction) when *invoking* the contract
- **storage** - The type definition of the storage.
- **code** - This is the actual smart contract code that takes as input the parameter and according to its code applies the manipulation to the storage. 

The instructions DUP, CDR, PAIR DIP, DROP are collected into a sequence and applied to an intermediary state, called stack. This is applied at run-time to the storage, which represents a persistent state.

## High-level languages

How does this piece of Michelson code look like in a high level language? Well, there is a language called [Ligo](https://www.ligolang.org) that comes in three different language "flavors": PascalLigo, CamelLigo and ReasonLigo. 

The code looks like this in ReasonLigo:

```reason
type parameter = nat;
type storage = nat;

let main = ((action, store): (parameter, storage)) : (list (operation), storage) =>
  (([] : list (operation)), store);
```

## Formal verification

formal semantics has been
written in the Coq proof assistant

the coq development Team, “The Coq Proof Assistant,”
http://coq.inria.fr

in ocaml and F*

https://gitlab.com/nomadic-labs/mi-cho-coq


manager script
https://gitlab.com/nomadic-labs/mi-cho-coq/blob/master/src/contracts/manager.tz

manager verification
https://gitlab.com/nomadic-labs/mi-cho-coq/blob/master/src/contracts_coq/manager.v