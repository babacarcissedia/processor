import { IPayExpressOptions } from "@/payexpress/definitions";
import axios from 'axios'
import crypto from 'crypto'


const SHA256Encrypt = (password) => {
  let sha256 = crypto.createHash('sha256');
  sha256.update(password);
  return sha256.digest('hex');
}

export default class PayExpress {
  private options: IPayExpressOptions;
  constructor (options: IPayExpressOptions) {
    this.options = Object.assign({}, options)
  }


  requestPayment (payload: any) {
    // const data = {
    //   "item_name": "",
    //   "item_price": "",
    //   "ref_command": "",
    //   "command_name": "",
    //   // optional
    //   "currency": "",
    //   "env": "test|prod",
    //   "ipn_url": "",
    //   "success_url": "",
    //   "cancel_url": "",
    //   "custom_field": "",
    // ipn_url: 'https://7cdde587.ngrok.io/ipn ',
    // success_url: 'https://7cdde587.ngrok.io/callback?type=success',
    // cancel_url: 'https://7cdde587.ngrok.io/callback?type=error',
    // env: 'test',
    // currency: 'XOF',
    // }
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: 'https://payexpresse.com/api/payment/request-payment',
        headers: {
          'content-type': 'application/json',
          API_KEY: this.options.apiKey,
          API_SECRET: this.options.apiSecret
        },
        data: payload
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }

  ipn (bodyPayload: any) {
    return new Promise((resolve, reject) => {
      const {type_event,
        ref_command,
        item_name,
        item_price,
        devise,
        command_name,
        env,
        token,
        api_key_sha256,
        api_secret_sha256} = bodyPayload
      const custom_field = JSON.parse(bodyPayload.custom_field);

      if(SHA256Encrypt(this.options.apiSecret) !== api_secret_sha256
        || SHA256Encrypt(this.options.apiKey) !== api_key_sha256) {
        return reject(new Error('This is not from PayExpress'))
      }
      resolve({...bodyPayload, custom_field})
    })
  }
}
