export interface IPayExpressOptions {
  apiKey: string,
  apiSecret: string
}

export interface IPayExpressPaymentRequest {
  item_name: string,
  item_price: number,
  command_name: string,
  currency: string,
  env: 'test' | 'prod',
  ref_command?: string,
  custom_field?: any, //
  ipn_url?: string, // 'https://7cdde587.ngrok.io/ipn ',
  success_url?: string, // 'https://7cdde587.ngrok.io/callback?type=success',
  cancel_url?: string // 'https://7cdde587.ngrok.io/callback?type=error',
}

