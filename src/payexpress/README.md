# Payexpress
API Integration

## Usage
```typescript
const {API_KEY, API_SECRET} = process.env
import PayExpress from '@bcdbuddy/processor/payexpress'
const payExpress = new PayExpress({

})
const express = require('express')
const app = express()
const path = require('path')

// application config
app.use(express.static(path.resolve(__dirname, '../public')))
app.use(express.json({ urlencoded: true }))
app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, '../views'))
app.set('view engine', 'pug')


// error middleware as last fallback
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


//
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}.`)
})

```
