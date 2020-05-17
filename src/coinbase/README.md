# Coinbase SDK 
Fully tested API integration of https://coinbase.com with typescript

Gain some extra time by using this library if you're looking looking forward to integrate delivery system on your website.

There is already an official sdk and open sourced at https://github.com/coinbase/coinbase-commerce-node. So You may want to check it out if that is what you are looking for. My motivation for this package was to have full control of the interface, how I am going to call the method 

## Usage

## Development
```bash
cp sample.env .env
// modify .env to match your credentials at developers.coinbase.sn

// lint
yarn lint

// build before pushing to make sure everything is working
yarn build

// run the tests
yarn test
```

### NodeJS
```js
const CoinbaseSDK = require('@bcdbuddy/processor/coinbase')
const dotenv = require('dotenv')
dotenv.config()
const { COINBASE_API_KEY, COINBASE_API_VERSION } = process.env

const coinbase = new CoinbaseSDK({
  apiKey: COINBASE_API_KEY,
  apiVersion: COINBASE_API_VERSION
})
// use as you want

```

### Typescript
```typescript
import CoinbaseSDK from '@bcdbuddy/processor/coinbase'
import dotenv from 'dotenv'
dotenv.config()
const { COINBASE_API_KEY, COINBASE_API_VERSION } = process.env

const coinbase = new CoinbaseSDK({
  apiKey: COINBASE_API_KEY,
  apiVersion: COINBASE_API_VERSION
})
// use as you want

```

## Documentation
You want some doc ? Read the tests


## TODO
- tests: cover all use cases
- use mock instead of hitting real endpoint

# [License](LICENSE)

## Contributors
- <a href="https://babacar-cisse-dia.com" alt="Babacar Cissé DIA">Babacar Cissé DIA</a>
[![](https://img.shields.io/twitter/follow/babacarcissedia?style=social)](https://twitter.com/babacarcissedia)

<img alt="Babacar Cissé DIA" src="https://github.com/bcdbuddy.png" width="100" height="100"/>


## TODO
- charge: https://github.com/coinbase/coinbase-commerce-node/blob/master/test/Resources/testCharge.spec.js
- checkout https://github.com/coinbase/coinbase-commerce-node/blob/master/test/Resources/testCheckout.spec.js
- event: 
    * https://github.com/coinbase/coinbase-commerce-node/blob/master/test/Resources/testEvent.spec.js
    * https://commerce.coinbase.com/docs/api/#events
    * https://github.com/coinbase/coinbase-commerce-node/blob/master/examples/resources/event.js
- webhook
    * https://github.com/coinbase/coinbase-commerce-node/blob/master/examples/webhook
