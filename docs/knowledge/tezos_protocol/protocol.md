---
id: protocol
title: Protocol Architecture
---



## Economic Protocol 📄

### Consensus Protocol 🔏

In a distributed system a so called *consensus protocol* is required to establish agreement on the shared [state/context](context) of the system. Pending [operations](operations/operations) are bundled into a *block*. The **rules of the Tezos protocol define who can produce blocks**. This prevents individuals or groups to consecutively write blocks and to control what is included in the blockchain or replace parts. A central feature is that the rules prevent earlier blocks to be modified, because it would invalidate all subsequent blocks. The consensus mechanism **protects the neutrality** of the network. 

The entity who creates the block is called in Tezos a **baker**👨‍🍳. The selection of the baker happens in a competitive/probabilistic manner and is rewarded with the [fees](operations/gas-fees) contained in the [block](block).  



### Updating the protocol through self-amendments 🔄

A unique feature that sets Tezos apart from other blockchain protocols  is *self-amendment through on-chain governance*. It means that the underlying protocol can be replaced without interruption and hard fork. The process of governance, deciding which proposed protocol shall be used, happens **through voting on-chain** by XTZ stakeholders. 

The voting process is divided into **multiple steps** that result in testing periods that allows the **community to provide feedback** and most importantly receive the approval of the majority. What is actually being voted on is a piece of code written in the programming language OCaml that codifies the protocol.[^1] After the voting ends the protocol is upgraded in a decentralized manner and the nodes operate as defined in the new piece of code.


## Network protocol 📢

The [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol) is followed by the [node](node). It is responsible for all communication among nodes, such as discovering, listening and broadcasting between peers. 

## Shell

The network shell glues together the blockchain and network protocol. It makes sure that both can communicate with each other seamlessly.




[^1]: This will change in the future, when the second implementation of Tezos, written in the programming language RUST, advances in development.