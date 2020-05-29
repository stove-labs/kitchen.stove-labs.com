--- 
id: node
title: Node
---

A node is a server that is connected to other nodes that form the blockchain network. The server runs the Tezos specific software that has two main responsibilities:

* Handle the communication with other nodes using the [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol)[^1]. Nodes exchange all the time information with each other, such as updating about new [operations](operations/operations) and [blocks](block).
* Keep up-to-date the current [context](context) of the node, by applying all operations from the block to the local state. 

## Protocols

You can query the different *protocols the node supports*. You can do it with the following commands from your terminal:

```sh
curl https://mainnet-tezos.giganode.io/protocols
curl https://testnet-tezos.giganode.io/protocols
curl http://localhost:8723/protocols
```

:::important Extra task
Try out the queries for all 3 nodes. Do you notice any difference?
:::

Of course we have a higher interest in the *current protocol* that the node is running. We can do so by performing one of the most important calls:

```sh
curl https://mainnet-tezos.giganode.io/chains/main/blocks/head
```
Which gives the example response:
```json
{
    "protocol": "PsCARTHAGazKbHtnKfLzQg3kms52kSRpgnDY982a9oYsSXRLQEb",
    "chain_id": "NetXdQprcVkpaWU",
    "hash": "BLgrPFmCXmVppZADgEMpQ9ppLrM6rrwfTC16RujNz9v94Lakphc",
    "header": { ...
    },
    "metadata": { ...
    },
    "operations": [ ...
    ]
```

To further investigate the protocol **PsCARTHAGazKbHtnKfLzQg3kms52kSRpgnDY982a9oYsSXRLQEb**, we perform an additional call:

```sh
https://mainnet-tezos.giganode.io/protocols/PsCARTHAGazKbHtnKfLzQg3kms52kSRpgnDY982a9oYsSXRLQEb
```


[^1]: Interestingly this protocol is also called *epidemic protocol*, because the way peer-to-peer communication is established mimics how a biological virus spreads.