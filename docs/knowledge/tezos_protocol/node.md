--- 
id: node
title: Node
---

Tezos blockchain network relies on *nodes* to create a trustless environment, where secure applications in form of [smart contracts](../smart_contract/smart-contract) can run.

A node is a server that is connected to other nodes that form the blockchain network. The server runs the Tezos specific software that has two main responsibilities:

* Handle the communication with other nodes using the [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol)[^1]. Nodes exchange all the time information with each other, such as updating about new [operations](operations/operations) and [blocks](block).
* Keep up-to-date the current [context](context) of the node, by applying all operations from the block to the local state. 



[^1]: Interestingly this protocol is also called *epidemic protocol*, because the way peer-to-peer communication is established mimics how a biological virus spreads.