---
id: reveal-operation
title: Revelation
---

A reveal operation is special type of [operation](operations). It writes the public key of an [implicit account](implicit-account) to its [address](address) (public key hash). This operation happens when the first transaction is sent **from** the account. The public key is important for other participants to verify operations signed from the specific account.

Whenever a transaction is sent **to** an new implicit account, then the [context](context) of the blockchain is increased and a fixed storage burn fee of 0.257 tez needs to be paid. More about the different types of burns fees in the [gas & fees article](gas-fees).