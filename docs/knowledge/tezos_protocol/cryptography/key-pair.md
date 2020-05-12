---
id: key-pair
title: Key pair
---
To control your [account](address) in the blockchain you need to have access to the *seed* or *secret key*. It is good practice to have a backup of the seed and therefore often a selection of words from a dictionary (seed phrases). The seed is then hashed and the resulting string of characters forms the secret key. 
Next a so called key pair is derived using a mathematical function. As the name suggests, the key pair consists of two keys: the secret key (also *private key*) and public key. For each key there is only one other matching key that is calculated by elliptic curve multiplication in Tezos. Similar to hashing, this only goes one-way. You can derive from a secret key the corresponding public key, but not the other way around. 
Every Tezos [address](address) starts with `tz` followed by either `1`,`2` or `3` and the *hash of the public key*.  


	                                      elliptic curve                                      
	┌─────────────┐ hashing  ┌─────────── multiplication ───────────┐ hashing  ┌─────────────┐
	│             │━━━━━━━━━▶│             │━━━━━━━━━▶│             │━━━━━━━━━▶│             │
	│    Seed     │          │ Secret Key  │          │ Public Key  │          │   Address   │
	│             │◀x x x x x│(Private Key)│◀x x x x x│             │◀x x x x x│             │
	└─────────────┘          └─────────────┘          └─────────────┘          └─────────────┘

Commonly declared in `.config` files:

pkh = public key hash,
sk = secret key,
pk = public key

```
alice: {
        pkh: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
        sk: "edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq",
        pk: "edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn"
    }
```

:::danger
Keep the **seed** and **secret key** always to yourself. Never share it with anyone, otherwise someone else will gain access to your account.
:::