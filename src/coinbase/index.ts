import {
  ICoinbaseServiceOptions,
  ICreateChargeRequest,
  ICharge,
  IListChargeResponse,
  IChargeResponse,
  ICheckout,
  IListCheckout,
  ICheckoutResponse,
  ICreateCheckoutRequest,
  IListEventResponse, IEventResponse
} from "./definitions";
import axios from 'axios'

export default class Index {
  private readonly apiKey: string;
  private readonly apiVersion: string;
  constructor (options: ICoinbaseServiceOptions) {
    const { apiKey, apiVersion } = options
    this.apiKey = apiKey
    this.apiVersion = apiVersion
  }


  listCharges (): Promise<IListChargeResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: 'https://api.commerce.coinbase.com/charges',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  showCharge (id: string): Promise<IChargeResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/charges/${id}`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  createCharge (payload: ICreateChargeRequest): Promise<ICharge> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: 'https://api.commerce.coinbase.com/charges',
          method: 'POST',
          data: payload,
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  updateCharge (id: string, payload: ICreateChargeRequest): Promise<ICharge> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: 'https://api.commerce.coinbase.com/charges',
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  cancelCharge (id: string): Promise<ICharge> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/charges/${id}/cancel`,
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  /**
   * Resolve a charge that has been previously marked as unresolved. Supply the unique charge code that was returned when the charge was created.

   Note: Only unresolved charges can be successfully resolved. For more on unresolved charges, check out at Charge timeline
   * @param id
   * @returns Promise<ICharge>
   */
  resolveCharge (id: string): Promise<ICharge> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/charges/${id}/resolve`,
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  listCheckouts (): Promise<IListCheckout> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/checkouts`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  showCheckout (id: string): Promise<ICheckoutResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/checkouts/${id}`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  createCheckout (payload: ICreateCheckoutRequest): Promise<ICheckoutResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/checkouts`,
          method: 'POST',
          data: payload,
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  updateCheckout (id: string, payload: ICreateCheckoutRequest): Promise<ICheckoutResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/checkouts/${id}`,
          method: 'PUT',
          data: payload,
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  deleteCheckout (id: string): Promise<ICheckoutResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/checkouts/${id}`,
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  listEvents (): Promise<IListEventResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/charges/events`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }


  showEvent (id: string): Promise<IEventResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `https://api.commerce.coinbase.com/charges/events/${id}`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': this.apiVersion
          }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}
