---
id: starter-kit
title: Tezos starter kit
---

In order to provide a unified experience accross our workshops and projects/solutions, we've created the [Tezos Starter Kit](https://github.com/stove-labs/tezos-starter-kit) - an opinionated set of tools & libraries to help you get started with smart-contract development on the Tezos blockchain.

## Dependencies

Before we clone & run the starter kit, let's take a look at which system dependencies we need to have installed:

- [**Docker**](https://docs.docker.com/engine/install/) - Virtualization platform used to run compilers and nodes
- [**NodeJS**](https://nodejs.org/en/) - Javascript runtime environment used to run test and migration suites


:::note
Don't forget to [configure *sudo mode*](https://docs.docker.com/engine/install/linux-postinstall/) for Docker on Linux, before proceeding.
:::
  
:::tip
Installing & running the starter kit **on Windows** may be tricky, we recommend you use a virtual linux machine instead. (e.g. using VirtualBox)
:::

## Setup

You can start your starter-kit based project by cloning the starter-kit repository:

```
git clone https://github.com/stove-labs/tezos-starter-kit
```

Once you've cloned the repository, you can install the neccessary dependencies using **npm**, which we've installed previously together with **NodeJS**:

```
cd tezos-starter-kit
npm i
```

:::tip
Don't forget to install dependencies using **npm** each time you clone a tezos-starter-kit based project
:::

## Overview

The starter-kit features preconfigured [Truffle suite](https://www.trufflesuite.com/docs/tezos/truffle/quickstart) together with an example smart-contract, migration and test files. Here's how the file structure looks like:

```
├── LICENSE.md
├── README.md
├── contracts
│   ├── main
│   │   ├── Migrations.ligo
│   │   └── tzip_12_tutorial.ligo
│   └── partials
│       └── tzip_12_tutorial
│           ├── action.ligo
│           ├── default_balance.ligo
│           ├── get_with_default_nat.ligo
│           ├── storage.ligo
│           ├── transfer.ligo
│           └── transfer_param.ligo
├── faucet.json
├── helpers
│   ├── bigMapKeyNotFound.js
│   ├── constants.js
│   └── generateAddress.js
├── migrations
│   └── 1_deploy_tzip_12_tutorial.js
├── package-lock.json
├── package.json
├── scripts
│   └── sandbox
│       ├── accounts.js
│       ├── docker
│       │   ├── babylon
│       │   │   ├── Dockerfile
│       │   │   ├── build_sandbox_archive.sh
│       │   │   └── mini_babylon_archive.sh
│       │   └── carthage
│       │       ├── Dockerfile
│       │       ├── build_sandbox_archive.sh
│       │       └── mini_carthage_archive.sh
│       ├── kill_sandbox.sh
│       ├── restart_sandbox.sh
│       ├── start_sandbox.sh
│       └── waitForNetwork.js
├── test
│   └── tzip_12_tutorial.js
├── truffle-box.json
└── truffle-config.js
```

Breakdown of the folder/file structure:

- **contracts/** - smart-contract source files
  - **main/** - entrypoints/main smart-contract files
  - **partials/** - reusable smart-contract snippets
- **helpers/** - various helper scripts used accross the project
- **migrations/** - Truffle migration a.k.a. deployment scripts for smart-contracts
- **scripts/** - shell scripts for different purposes, e.g. to manage private sandbox nodes
- **test/** - Truffle test suites for smart-contracts
- **truffle-config.js** - Truffle configuration
- **faucet.json** - Identity obtained from the faucet usable on a public test network

## Available commands

### Compile contracts
```
npm run compile
```

### Migrate contracts
```
npm run migrate
```

### Migrate a contract to a different network
```
npm run migrate -- --network=carthagenet
```

### Test contracts
```
npm run test
```

### Start a sandbox
```
npm run start-sandbox -- carthage
```

### Kill a sandbox
```
npm run kill-sandbox -- carthage
```