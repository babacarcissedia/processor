import btoa from 'btoa'
import axios from 'axios'
import { IPaypalOptions } from "@processor/paypal/definitions";

export default class PayPal {
  private options: IPaypalOptions;

  constructor (options: IPaypalOptions) {
    this.options = Object.assign({}, options)
  }

  getAccessToken (): Promise<{access_token: string}> {
    return new Promise((resolve, reject) => {
      axios({
        url: this.options.oauthApiUrl,
        method: 'POST',
        headers: {
          Accept:        `application/json`,
          Authorization: `Basic ${btoa(`${ this.options.clientId }:${ this.options.clientSecret }`)}`
        },
        data: `grant_type=client_credentials`
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }

  handleRequest(request, response) {
    return new Promise(async (resolve, reject) => {
      const purchaseUnits = [{
        amount: {
          currency_code: 'USD',
          value: '220.00'
        }
      }]
      // TODO: if access_token, ignore line below
      const auth = await this.getAccessToken()

      axios({
        url: this.options.orderApiUrl,
        method: 'POST',
        headers: {
          Accept:        `application/json`,
          Authorization: `Bearer ${ auth.access_token }`
        },
        data: {
          intent: 'CAPTURE',
          purchase_units: purchaseUnits
        }
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }
}
