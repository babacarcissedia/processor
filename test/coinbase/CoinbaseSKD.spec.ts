import CoinbaseSDK from "@/coinbase";
import { COINBASE_API_KEY, COINBASE_API_VERSION } from "@/coinbase/config";


describe('CoinbaseSDK', () => {
  const options = {
    apiKey: COINBASE_API_KEY,
    apiVersion: COINBASE_API_VERSION
  }
  let sdk = new CoinbaseSDK(options)
  const mockedRoutes = [
    {
      path: 'https://api.commerce.coinbase.com/charges',
      GET: [200, ]
    }
  ]

  beforeAll(() => {
    const mockAxios = jest.genMockFromModule('axios')
  })

  describe('listCharges()', () => {
    it('should return all charges previously created', async () => {
      const charges = await sdk.listCharges()
      debugger
    })
  })

  describe('Webhook', () => {
    it('should successfully verify signature and return event', async() => {});

    it('should fail verification with invalid secret key', async () => {});

    it('should fail verification due to invalid response', async () => {});

    it('should fail verification due to event is not in response', async () => {});
  })
})
