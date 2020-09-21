---
id: notarization-powered-by-blockchain
title: Notarization powered by Blockchain
---

Alice and Bob had many meetings negotiating the terms and conditions of the lease agreement. After weeks of going back and forth writing the contract, Alice sends Bob through email the finalized document in digital form. Bob gives Alice a quick call and confirms that the latest version of the file is representing his intentions and willing to finalize the deal. Alice is glad to hear that and asks for Bob's blockchain address to be used for signing the document online. He gladly shares his identifier with her and Alice is initating the notarization process. 

:::note
We will build together all of the solution in this tutorial. That includes the notarization website as well.
:::

    
| Step | Process                                                                                                                                                                                                                                                                                                                                                   |
|:------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Alice visits the notarization website          [http://notarize.stove-labs.com:5000](http://notarize.stove-labs.com:5000)                                                                                                                                                                                                                                                                                                           |
| 2    | Alice drag & drops the final document in PDF format in the window. She knows that the file itself does not get uploaded to any server. This is very important to her, because the contract holds private information that should not get out into public. Instead, the file's fingerprint gets calculated in her browser and the first step is completed. |
| 3    | Alice defines how many co-signers the contract needs and specifies Bob and herself. She does so by entering both signee's blockchain addresses.                                                                                                                                                                                                           |
| 4    | After doing a last check for typos, she is ready to click the complete button to initate the notarization. After doing so, Alice confirms the notarization transaction with a password in her browser wallet.                                                                                                                                             |
| 5    | Bob visits the notarization website and drag & drops his copy of the document.                                                                                                                                                                                                                                                                            |
| 6    | Bob confirms his signature with a password in his browser wallet.                                                                                                                                                                                                                                                                                         |
| -    | **Documents are notarized on-chain and the audit trail is publicly visible and immutable.**                                                                                                                                                                                                                                                                   |

Let's take together a detailed look at this new approach.

## The website - next generation with web3
The website Alice visits is not an ordinary site. While it looks simple on the outside, we could describe it as being part of the newest generation of the web. A quick overview of what is understood under web 3.0:

	      ▲                                           
	      │                                           
	  complexity                                      
	      │                          web 3.0          
	      │                             *             
	      │                                           
	      │                                           
	      │                                           
	      │          web 2.0                          
	      │             *                             
	      │                                           
	      │  web 1.0                                  
	      │     *                                     
	      │                                           
	      └────────────────────────────────▶ time     
	         ┌────┐  ┌────┐          ┌────┐           
	         │1990│  │2000│          │2020│           
	         └────┘  └────┘          └────┘           

Over the years the internet became more complex. In the beginning, websites were quite static and rather "read-only". 
As time passed and internet adoption increased, more and more content was created by users. More and more was "written" to pages and the websites evolved into being interactive and dynamic.
New technologies increase the complexity of the digital web, such as Internet of Things, Artificial Intelligence, Virtual Reality etc. Working groups form all over the world proposing decentralised, secure and user centric approaches to handle the complexity growth. Blockchain technology will be an important building block for decentralized applications.

| Generation | Properties                                      |
|------------|-------------------------------------------------|
| web 1.0    | basic html, emails                              |
| web 2.0    | information centric: interactive representation |
| web 3.0    | user centric: decentralized, private, secure    |

### How it is done today web 2.0
Today, the majority of web services follow the traditinal client/server pattern. The web browser is the client that requests the site's content from the server. For example the URL request initiates calling the website and receives in return the page content, images and JavaScript code. The user interacts with the content through the UI in the browser and creates in the background several more read and write requests to the server. As a result the server writes in its own centralized database. 


	┌────Web─Browser───┐                      ┌────Web─Server────┐
	│                  │─────URL request─────▶│                  │
	│                  │                      │                  │
	│                  │    response w/ web   │                  │
	│                  │ ◀───page + assets────│                  │
	│                  │                      │                  │
	│       www        │                      │   centralized    │
	│                  │      request         │                  │
	│                  │───read or write────▶ │                  │
	│                  │                      │                  │
	│                  │                      │                  │
	│                  │◀──────response───────│                  │
	└──────────────────┘                      └──────────────────┘



### Solutions of tomorrow: web 3.0 + browser plugin
The next generation builds on top of the client/server approach. Some of the data will not be stored in the server's centalized database, but in a decentralized ledger of a blockchain. As we already know, that data is publicly visible to anyone in the public blockchain network. Changing the data in the public ledger requires the user to initiate [transactions](../../../wiki/transaction) and most importantly to append their cryptographic approval to such a request. We also call that approval cryptographic signature and will talk in detail about that below. This is important, because the signature attached to the transaction fullfills two tasks: authenticating and authorizing the write request to the decentralized ledger. 

	┌────Web─Browser───┐                      ┌────Web─Server────┐
	│                  │─────URL request─────▶│                  │
	│                  │                      │   centralized    │
	│                  │    response w/ web   │                  │
	│                  │ ◀───page + assets────│                  │
	│                  │                      └──────────────────┘
	│       www        │                                          
	│                  │      request         ┌────Blockchain────┐
	│                  │───read or write────▶ │                  │
	│                  │                      │  decentralized   │
	│                  │                      │                  │
	│                  │◀──────response───────│                  │
	└──────────────────┘                      └──────────────────┘
	      prepares                                      ▲         
	          │                                         │         
	          ▼                                         │         
	┌──────────────────┐                                │         
	│     "write"      │                                │         
	│   transaction    │────────new write request───────┘         
	└──────────────────┘                                          
	          ▲                                                   
	          │                                                   
	        signs                                                 
	┌──────────────────┐                                          
	│Plugin with       │                                          
	│keychain/wallet   │                                          
	└──────────────────┘                                                

## Drag & drop for the document's fingerprint - hashing

In our use-case, Alice visits the website [notarize.stove-labs.com](http://notarize.stove-labs.com) and the browser presents her with a page that looks similar to a form, with blank spaces for information to be inserted. The first field asks for the **document's fingerprint**, which is also called the **document's hash**. For convenience there is a drag & drop field in the form. It takes a document file as input and calculates following a *mathematical function* its *hash*. This function can basically take text/data of any size and compute a fixed-size value called *hash*. Let's try it out ourselves.

```
sha256 is a type of SHA-2 (Secure Hash Algorithm 2)
sha256('never trust a skinny chef') = 36d87a683cfb033dcdb751723d5ef32085988716ce87a30c4ee3844992510a6a
sha256('never trust a skiny chef')  = 40526579889ed880ceac08478fff0fc7dec022dd5843725b1fb3a26ea1f8a62f
```
The four most important properties of hashing functions to understand are:

1. deterministic - the same input always returns the same output hash
2. uncorrelated - a small change in the message generates a completely different hash
3. unique - it is infeasible for two different messages to generate the same hash
4. one-way - it is infeasible to calculate or guess the input from the output hash

Understanding these properties we are convinced that a *hash acts like a digital fingerprint of a given document*. Now that we understand this concept, we will also explore where else it is used.



## Accounts in Tezos

To control your *account* in the blockchain you need to have access to the *seed* or *secret key*. It is good practice to have a backup of the seed and therefore often a selection of words from a dictionary (seed phrases). The seed is then hashed and the resulting string of characters forms the secret key. 
Next a so called key pair is derived using a mathematical function. As the name suggests, the key pair consists of two keys: the secret key (also *private key*) and public key. For each key there is only one other matching key that is calculated by elliptic curve multiplication in Tezos. Similar to hashing, this only goes one-way. You can derive from a secret key the corresponding public key, but not the other way around. 
Every Tezos address starts with `tz` followed by either `1`,`2` or `3` and the *hash of the public key*. Take a look at the wiki to learn more about [addresses](../../../wiki/address). 


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
    },
bob: {
        pkh: "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6",
        sk: "edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt",
        pk: "edpkurPsQ8eUApnLUJ9ZPDvu98E8VNj4KtJa1aZr16Cr5ow5VHKnz4"
    }
```

:::important
Remember to never share your seed or secret key with others. Otherwise someone will gain control over your account.
:::


## Smart contracts 

A smart contract is a special type of account. Its address always starts with the letters `KT1`.  The smart contract account is created by *originating* it from an [*implicit* account](address). That's why it is also called `originated account`. It has the smart contract code attached to it. Whenever a smart contract receives a transaction (an instruction), its code is invoked and executed. The contract code is written in a Tezos specific language called [Michelson](../../../wiki/michelson). 

Here's an example of Michelson code: 

```
{ parameter (or (or (nat %add) (nat %sub)) (unit %default)) ;
  storage int ;
  code { AMOUNT ; PUSH mutez 0 ; ASSERT_CMPEQ ; UNPAIR ;
         IF_LEFT
           { IF_LEFT { ADD } { SWAP ; SUB } }
           { DROP ; DROP ; PUSH int 0 } ;
         NIL operation ; PAIR } }
```

The contract itself contains three main parts:

- **parameter** - An argument that is provided by a transaction invoking the contract.
- **storage** - The type definition for the contract's data storage.
- **code** - The actual Michelson code, that has the provided parameter & the current storage value in it's initial stack, and outputs a list of operations & a new storage value as it's resulting stack.

## Finalizing the process - where to enter the password?

As we have learned earlier that it is very important to store the secret key securely. At the same time, we need to have it ready to confirm transactions to the ledger. That's why we will have it stored in a web wallet ([TezBridge](https://www.tezbridge.com/)). The wallet stores the secret key in a *password* protected storage. This password is a lot shorter and more handy than the secret key itself.


<!-- concept: signatures
Tezos blockchain uses asymmetric cryptography to verify signatures that are attached to transactions.  -->

## How it comes together

In the diagram below you can see how these elements come together on a different level of abstraction. It becomes clear that Alice calculates the hash locally and instructs a pre-deployed smart contract within the Tezos blockchain. Upon instruction by a transaction with a given hash, the code is executed and creates a storage. This storage is basically an own instance of a ledger within Tezos. The first entry is the hash of the document and a boolean denoting that Alice has signed. 

Later, the missing signature is updated by Bob. He interacts with the smart contract through a transaction as well. After checking all conditions, the code updates the storage and finally both signatures had been appended to the given hash of the document. The document had been notarized, because these entries are publicly verifiable and practically immutable.

	┌─────ledger─entry────┐                                         ┌─────ledger─entry────┐  
	│{                    │                                         │{                    │  
	│    hash:            │   after    ┌────────────────┐  after    │    hash:            │  
	│    [                │   create   │                │  update   │    [                │  
	│        Alice: true, │◀══════════ │    storage     │══════════▶│        Alice: true, │  
	│        Bob: false   │            │                │           │        Bob: false   │  
	│    ]                │            └────────────────┘           │    ]                │  
	│}                    │                ▲           ▲            │}                    │  
	└─────────────────────┘                │           │            └─────────────────────┘  
	                                    creates     updates                                  
	                                       │           │                                     
	                              ┌─────────────────────────────┐                            
	                              │                             │                            
	                              │       Smart Contract        │                            
	                              │      (business logic)       │                            
	                              │                             │                            
	                              └─────────────────────────────┘                            
	                                        ▲             ▲                                  
	                                        │             │                                  
	                                        │        transaction                             
	                               transaction        co-signing                             
	                                 w/ hash          given hash                             
	                                   │                  │                                  
	                                   │                  │                                  
	┌──hashing─func──┐           ┌──Account──┐      ┌──Account──┐          ┌──hashing─func──┐
	│                │           │           │      │           │          │                │
	│sha256(document)│ ───hash──▶│   Alice   │      │    Bob    │◀──hash───│sha256(document)│
	│                │           │           │      │           │          │                │
	└────────────────┘           └───────────┘      └───────────┘          └────────────────┘


<!-- :::tip
Follow these detailed [instructions](setting-up-the-workstation-tezbridge.md) to setting up TezBridge.
:::
 -->
