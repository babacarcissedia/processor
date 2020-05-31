## Processors available
- [ ] [PayPal](paypal.md)
- [ ] [Coinbase](coinbase.md) - Almost done
- [ ] [GooglePay](google_pay.md)
- [ ] [ApplePay](apple_pay.md)

## Not added
- [Upay](http://upay.africa) - Bad customer service - Old/wrong documentation/not reactive
- [PayExpress](http://payexpresse.com) - Bad customer service/not reactive
- [PayDunya](https://paydunya.com)
    * better customer service for sure
    * ask too much private/personal information for business account
    
## Feature
- [ ] payment should be idempotent. In other words, for a same transaction detail charge should not be allowed twice
- [x] All methods return a promise that way you can use it as the following:
```typescript
 // with promise chain
 processor.method(params)
    .then(result => onSuccess(result))
    .catch(error => onError(error))
    .then(() => onDone())
 // with async/await
 try {
   const result = await processor.method(params)
   onSuccess(result)
 } catch (error) {
   onError(error)
 } finally {
   onDone()
 }
 



```

## Todo
- [ ] aggregation: Someday implement all of them to look like one
- [ ] front end implementation with an iframe to perform all transactions without leaving the page
