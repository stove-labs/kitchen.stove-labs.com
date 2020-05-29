---
id: protocol
title: Protocol Architecture
---



## Economic Protocol

### Consensus Protocol

In a distributed system a so called *consensus protocol* is required to establish agreement on the shared [state/context](context) of the system. It is used to decide on unconfirmed/pending operations. The to be confirmed [operations](operations/operations) are bundled into a *block*. This *batch* operation is then applied by each and every node in the system. A central feature is that the rules prevent earlier blocks to be modified, because it would invalidate all subsequent blocks.

The **rules of the Tezos protocol define who can write to blocks**. This prevents individuals or groups to consecutively write blocks and to control what is included in the blockchain or replace parts. This **protects the neutrality** of the network. The entity who creates the block is called in Tezos **baker**. The selection of the baker happens in a competitive/probabilistic manner and is rewarded with the [fees](operations/gas-fees) contained in the [block](block).  


### Updating the protocol through self-amendments

A unique feature among blockchain protocols that sets Tezos apart is *self-amendment through on-chain governance*. It means that the underlying protocol can be replaced without interruption and hard fork. The process of governance, deciding which proposed protocol shall be used, happens **on-chain by voting** of its stakeholders. 

The voting process is divided into multiple steps that result in testing periods that allows the community to provide feedback and most importantly receive the approval of the majority. What is actually being voted on is a piece of code written in the programming language OCaml that codifies the protocol.[^1] After the voting ends the protocol is upgraded in a decentralized manner.

### Overview of protocols

A simple query to a node reveals a list of protocols


```sh
curl https://mainnet-tezos.giganode.io/protocols
```


```
["ProtoDemoNoopsDemoNoopsDemoNoopsDemoNoopsDemo6XBoYp",
"Ps9mPmXaRzmzk35gbAYNCAw6UXdE2qoABTHbN2oEEc1qM7CwT9P",
"PsBABY5HQTSkA4297zNHfsZNKtxULfL18y95qb3m53QJiXGmrbU",
"PsBabyM1eUXZseaJdmXFApDSBqj8YBfwELoxZHHW77EMcAbbwAS",
"PsCARTHAGazKbHtnKfLzQg3kms52kSRpgnDY982a9oYsSXRLQEb",
"PsYLVpVvgbLhAhoqAkMFUo6gudkJ9weNXhUYCiLDzcUpFpkk8Wt",
"PsddFKi32cMJ2qPjf43Qv5GDWLDPZb3T3bF6fLKiF5HtvHNU7aP",
"Pt24m4xiPbLDhVgVfABUjirbmda3yohdN82Sp9FeuAXJ4eV9otd",
"PtCJ7pwoxe8JasnHY8YonnLYjcVHmhiARPJvqcC6VfHT5s8k8sY"]
```


## Network protocol

The [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol) is followed by the [node](node). It is responsible for all communication among nodes, such as discovering, listening and broadcasting between peers. 

## Shell

The network shells glues together the blockchain and network protocol. It makes sure that both can communicate with each other seamlessly.

[^1]: It i s