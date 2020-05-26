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

Formal verification is a mathematical way to prove the correctness of source code with respect to a *formal specification* and allows a greater level of security for smart contracts written in Michelson. It is not a trivial process, because this approach does not check whether the code is 100% correct, but rather the behavior of the software against the specification. It typically requires expert knowledge to create that specification. Then a so called *interactive theorem prover*, in the case of Tezos [Coq](https://en.wikipedia.org/wiki/Coq), is used for a deductive verification. The outcome of this act is assurance that the source code behaves in the way according to the specification.

This approach is used in industries, where there is little room for error, such as software used in aerospace or nuclear power generation. Similar to those industries, the same applies to blockchain technology, which has the potential to track and manage assets worth in the billions of USD. It is common for software used in finance to undergo expensive and lengthy source code audits. Formal verification plays a very big advantage in this process and is definitely a big differentiator for Tezos among other blockchain platforms. 

### Examples of formal verification


The [manager script](https://gitlab.com/nomadic-labs/mi-cho-coq/blob/master/src/contracts/manager.tz) is automatically added to originated `KT1` accounts. It is an essential piece of code, because it enables the owner of the smart contact, the implicit account that initiated the origination, to *manage* the smart contact. Consider someone sending ꜩ to the smart contract. We most definitely do not want to have it stuck there, in case it was sent there by mistake and there in no transfer functionality implemented. One of the features of `manager.tz` is to *make the smart contract spendable*. It exposes an [entypoint](entrypoints) to send ꜩ to `KT1` or implicit `tz` [accounts](../tezos_protocol/account). Of course it checks for access control and makes sure that the source of the instruction (the transfer holding the parameters) is indeed the manager of the contract. 


```
# manager.tz
parameter
  (or
     (lambda %do unit (list operation))
     (unit %default));
storage key_hash;
code
  { UNPAIR ;
    IF_LEFT
      { # 'do' entrypoint
        # Assert no token was sent:
        # to send tokens, the default entry point should be used
        PUSH mutez 0 ;
        AMOUNT ;
        ASSERT_CMPEQ ;
        # Assert that the sender is the manager
        DUUP ;
        IMPLICIT_ACCOUNT ;
        ADDRESS ;
        SENDER ;
        ASSERT_CMPEQ ;
        # Execute the lambda argument
        UNIT ;
        EXEC ;
        PAIR ;
      }
      { # 'default' entrypoint
        DROP ;
        NIL operation ;
        PAIR ;
      }
  };
```
The formal semantics has been written using the "Coq Proof Assistant".[^1] The specification itself was created using a framework called [Mi-Cho-Coq](https://gitlab.com/nomadic-labs/mi-cho-coq) that formalizes the Michelson language. It was written in OCaml and comes close to Michelson, but has slight differences in semantics. You can check the [manager.v](https://gitlab.com/nomadic-labs/mi-cho-coq/blob/master/src/contracts_coq/manager.v) specification and you will notice that it is multiple times longer than the contract itself. 

#### How to verify in practice

In practice, one has to make sure that the Michelson code that is deployed to the network matches the contract that is defined at the beginning of the specification. We can see that the definition below is slightly different from Michelson in terms of syntax, notice the curly braces and semicolons. With the help of the Mi-Cho-Coq the code is checked against the input and ouput defined in the rest of the specification. The repository holds specifications for various other contracts, such as multi-signature examples.[^2] Following this procedure, one gains certainty that the code behaves according to the system specifications.

```
# manager.v
# L45-L70
Definition manager : full_contract _ ST.self_type storage_ty :=
  (UNPAIR ;;
   IF_LEFT
   ( (* 'do' entrypoint *)
     (* Assert no token was sent: *)
     (* to send tokens, the default entry point should be used *)
     PUSH mutez (0 ~mutez) ;;
     AMOUNT ;;
     ASSERT_CMPEQ ;;
     (* Assert that the sender is the manager *)
     DUUP ;;
     IMPLICIT_ACCOUNT ;;
     ADDRESS ;;
     SENDER ;;
     ASSERT_CMPEQ ;;
     (* Execute the lambda argument *)
     UNIT ;;
     EXEC ;;
     PAIR
   )
   ( (* 'default' entrypoint *)
     DROP1 ;;
     NIL operation ;;
     PAIR
   )
  ).
```



[^1]: The Coq development team http://coq.inria.fr
[^2]: [Multiple contracts](https://gitlab.com/nomadic-labs/mi-cho-coq/-/tree/master/src/contracts_coq) specified using *Mi-Cho-Coq*