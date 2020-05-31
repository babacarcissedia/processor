import CoinbaseSDK from "@processor/coinbase";
import { COINBASE_API_KEY, COINBASE_API_VERSION } from "@processor/coinbase/config";
import { ICheckoutResponse, ICreateCheckoutRequest, IPriceType } from "@processor/coinbase/definitions";
import { CREATE_CHECKOUT_RESPONSE, LIST_CHARGE_RESPONSE } from "./__data__/fixtures";
import { expectPaginationObject } from "./index";



describe('CoinbaseSDK | checkout', () => {
  const options = {
    apiKey: COINBASE_API_KEY,
    apiVersion: COINBASE_API_VERSION
  }
  let sdk = new CoinbaseSDK(options)
  // const mockedRoutes = [
  //   {
  //     path: 'https://api.commerce.coinbase.com/charges',
  //     GET: [200, ]
  //   }
  // ]
  //
  // beforeAll(() => {
  //   const mockAxios = jest.genMockFromModule('axios')
  // })

  describe('listCheckouts()', () => {
    it('should return all charges previously created', async () => {
      const response = await sdk.listCheckouts()
      expect(response).toHaveProperty('data')
      expect(response).toHaveProperty('pagination')
      expectPaginationObject({ expect, pagination: response.pagination })
      // const charges = response.data
      // expect(charges.length).toEqual(LIST_CHARGE_RESPONSE.length)
    })
  })

  describe('createCheckout(payload)', () => {
    // with no_price
    // with fixed_price
    it('should create checkout and return created checkout', async () => {
      const payload: ICreateCheckoutRequest = {
        "name": "The Sovereign Individual",
        "description": "Mastering the Transition to the Information Age",
        "local_price": {
          "amount": "100.00",
          "currency": "USD"
        },
        pricing_type: "fixed_price",
        "requested_info": ["email"]
      }
      const apiResponse: ICheckoutResponse = await sdk.createCheckout(payload)
      const checkout = apiResponse.data
      expect(checkout).toHaveProperty('id')
      expect(checkout).toHaveProperty('organization_name')
      expect(checkout).toHaveProperty('brand_color')
      expect(checkout).toHaveProperty('brand_logo_url')
      expect(checkout).toHaveProperty('logo_url')
      expect(checkout).toHaveProperty('description')
      expect(checkout).toHaveProperty('local_price')
      expect(checkout.local_price).toHaveProperty('amount')
      expect(checkout.local_price).toHaveProperty('currency')
      expect(checkout.name).toEqual(payload.name)
      expect(checkout.requested_info).toContain('email')
      expect(checkout.resource).toEqual('checkout')
    })
  })

  describe('showCheckout(id)', () => {
    it('should return checkout instance', async () => {
      const id = CREATE_CHECKOUT_RESPONSE.data.id
      const response = await sdk.showCheckout(id)
      debugger
    })
  })

  describe('cancelCheckout(id)', () => {
    it('should update checkout by id and return updated checkouts', async () => {})
  })

})
