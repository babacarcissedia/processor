# Coinbase

## NodeJS
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

## Typescript
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
