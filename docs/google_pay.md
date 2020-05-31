# Google Pay
Ready to pay user.
Ask yourself this question: who does not have a google account these days ?
Well if customers previously used a credit card (or other payment method) they can use that 

Lots of opportunies for users to abandon their purchase

## Definitions
- digital wallets containing customer payment options

## Benefits
Increase your sells & improve your conversion rate today by integrating GooglePay
- reduce frictions
- optimize conversion

## Front end / Client code
```html
<script src="https://pay.google.com/gp/p/js/pay.js" onload="onGooglePayLoaded()"></script>
<script>
function onGooglePayLoaded () {
  const googlePayClient = new google.payments.api.PaymentsClient({
    environment: 'TEST'
  })
  const clientConfiguration = {
    apiVersion: 
  }
}
</script>
```
