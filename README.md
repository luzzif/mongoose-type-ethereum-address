[![CircleCI](https://circleci.com/gh/luzzif/mongoose-type-ethereum-address/tree/master.svg?style=svg)](https://circleci.com/gh/luzzif/mongoose-type-ethereum-address/tree/master)
[![Coverage](https://coveralls.io/repos/github/luzzif/mongoose-type-ethereum-address/badge.svg?branch=master)](https://coveralls.io/repos/github/luzzif/mongoose-type-ethereum-address?branch=master)

# Mongoose Ethereum address type

An Ethereum address field-type for Mongoose schemas.

## Installing

```
yarn add mongoose-type-ethereum-address
```

## Usage

This will correctly validate an Ethereum's address Mongoose model's field:

```js
import mongoose from "mongoose";
import "mongoose-type-ethereum-address";

export const schema = new mongoose.Schema({
  address: mongoose.Schema.Types.EthereumAddress
});
```

You can also use it with arrays:

```js
export const schema = new mongoose.Schema({
  addresses: [{ type: mongoose.Schema.Types.EthereumAddress }]
});
```

## Donations

Please if you like my work consider donating something. Every offer helps me
giving out the best software!

- Bitcoin: `3JFXQE6mQibmrxoq3YHKqRUHAvmXxuY8r9`
- Ethereum: `0x35E2acD3f46B13151BC941daa44785A38F3BD97A`

Thank you all <3
