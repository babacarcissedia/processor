import dotenv from 'dotenv'
dotenv.config()

export const COINBASE_API_KEY = String(process.env.COINBASE_API_KEY)
export const COINBASE_API_VERSION = String(process.env.COINBASE_API_VERSION)
