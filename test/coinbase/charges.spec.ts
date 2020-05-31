import CoinbaseSDK from "@processor/coinbase";
import { COINBASE_API_KEY, COINBASE_API_VERSION } from "@processor/coinbase/config";
import { ICreateChargeRequest, IPriceType } from "@processor/coinbase/definitions";
import { LIST_CHARGE_RESPONSE } from "./__data__/fixtures";
import { expectPaginationObject } from "./index";


describe('CoinbaseSDK', () => {
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

  describe('listCharges()', () => {
    it('should return all charges previously created', async () => {
      const response = await sdk.listCharges()
      expect(response).toHaveProperty('data')
      expect(response).toHaveProperty('pagination')
      expectPaginationObject({ expect, pagination: response.pagination })
      // const charges = response.data
      // expect(charges.length).toEqual(LIST_CHARGE_RESPONSE.length)
    })
  })

  describe('createCharge(payload)', () => {
    // with no_price
    // with fixed_price
    it('should create charge and return created charge', async () => {
      const payload: ICreateChargeRequest = {
        "name": "The Sovereign Individual",
        "description": "Mastering the Transition to the Information Age",
        "local_price": {
          "amount": "100.00",
          "currency": "USD"
        },
        pricing_type: "no_price",
        "metadata": {
          "customer_id": "id_1005",
          "customer_name": "Satoshi Nakamoto"
        },
        "redirect_url": "https://charge/completed/page",
        "cancel_url": "https://charge/canceled/page"
      }
      try {
        const response = await sdk.createCharge(payload)
        debugger
      } catch (error) {
        console.error(error)
          debugger
      }
    })
  })

  describe('showCharge(id)', () => {
    it('should return charge instance', async () => {})
  })

  describe('cancelCharge(id)', () => {
    it('should update checkout by id and return updated checkouts', async () => {})
  })

})
