---
id: protocol
title: Protocol
---


## Economic Protocol

Distributed consensus system that is used to decide on unconfirmed/pending transaactions. It basically enables many different computers to agree on the [state/context](context) of the system. The to be confirmed transactions are packed into a *block* that follows strict cryptographic rules. This is verified by all nodes in the system. A central feature is that the rules prevent earlier blocks to be modified, because it would invalidate alls subsequent blocks.

The rules of the protocol define who can write to the block. The selection of the *baker*, the entity who creates the block, happens in a competitive/propalistic (think of lottery) manner. This prevents indiviuals or groups to consecutively write blocks and to control what is included in the blockchain or replace parts. This protects the neutrality of the network.



