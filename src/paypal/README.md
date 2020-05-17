# Paypal
## Usage
```typescript
const {PAYPAL_CLIENT, PAYPAL_SECRET, PAYPAL_OAUTH_API, PAYPAL_ORDER_API} = process.env
import Paypal from '@bcdbuddy/processor/paypal'
const paypal = new Paypal({
  clientId: PAYPAL_CLIENT,
  clientSecret: PAYPAL_SECRET,
  oauthApiUrl: PAYPAL_OAUTH_API,
  orderApiUrl: PAYPAL_ORDER_API
})
// paypal.
```
