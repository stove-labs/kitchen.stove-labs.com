---
id: protocol
title: Protocol Architecture
---


## Blockchain Protocol

### Consensus Protocol

In a distributed system a so called *consensus protocol* is required to establish agreement on the shared [state/context](context) of the system. It is used to decide on unconfirmed/pending transactions. The to be confirmed transactions are packed into a *block* that follows strict rules. This is verified by all nodes in the system. A central feature is that the rules prevent earlier blocks to be modified, because it would invalidate all subsequent blocks.

The rules of the Tezos protocol define who can write to the block. This prevents indiviuals or groups to consecutively write blocks and to control what is included in the blockchain or replace parts. This protects the neutrality of the network. The entity who creates the block is called in Tezos **baker**. The selection of the baker happens in a competitive/propalistic manner and is rewarded with the [fees](operations/gas-fees) contained in the [block](block). This is similar to a lottery. 


### Updating the protocol through self-amendments

A unique feature among blockchain protocols that sets Tezos apart is *self-amendment through on-chain governance*. It means that the underlying protocol can be replaced without interruption and hard fork. The process of governance, deciding which proposed protocol shall be used, happens on-chain by voting of its stakeholders. This results in upgrading the protocol in a decentralized manner. The process is divided into multiple steps that result in testing periods that allows the community to provide feedback and most importantly receive the approval of the majority.

## Network protocol

The [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol) is followed by the [node](node). It is responsible for all communication among nodes, such as discovering, listening and broadcasting between peers.

## Shell

The network shells glues together the blockchain and network protocol. It makes sure that both can communicate with each other seamlessly.