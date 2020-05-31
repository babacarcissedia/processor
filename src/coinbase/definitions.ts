export interface ICreateChargeRequest {
  "name": string, // "The Sovereign Individual",
  "description": string, // "Mastering the Transition to the Information Age",
  "local_price": {
    "amount": string, // "100.00",
    "currency": string // "USD"
  },
  "pricing_type": IPriceType,
  "metadata"?: {
    "customer_id": string, // "id_1005",
    "customer_name": string // "Satoshi Nakamoto"
  },
  "redirect_url"?: string, // "https://charge/completed/page",
  "cancel_url"?: string // "https://charge/canceled/page"
}

export type IPriceType = 'no_price' | 'fixed_price'

export interface ICharge {
  id:	string, // 	Charge UUID
  resource:	string, // 	Resource name: "charge"
  code:	string, // 	Charge user-friendly primary key
  name:	string, // 	Charge name
  description:	string, // 	Charge description
  logo_url:	string, // 	Charge image URL
  hosted_url:	string, // 	Hosted charge URL
  created_at:	string, // type=timestamp 	Charge creation time
  expires_at:	string, // type=timestamp 	Charge expiration time
  confirmed_at:	string, // type=timestamp 	Charge confirmation time
  checkout:	string, // type=hash 	Associated checkout resource
  timeline:	ITimeline[], // type=array 	Array of status update objects
  metadata:	string, // type=hash 	Metadata associated with the charge
  pricing_type:	IPriceType, // 	Pricing type: no_price or fixed_price
  pricing:	string, // type=hash 	Charge price information object
  payments:	any[], // type=array 	Array of charge payment objects
  addresses:	string, // type=hash 	Set of addresses associated with the charge
}

export interface ITimeline {
  time: string, // type=timestamp	Time of the status update
  status:	'NEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'UNRESOLVED' | 'RESOLVED' | 'CANCELED' | 'REFUND PENDING' | 'REFUNDED',
  context?: 'UNRESOLVED' | 'UNDERPAID' | 'OVERPAID' | 'DELAYED' | 'MULTIPLE' | 'MANUAL' | 'OTHER'// For charges with UNRESOLVED status, additional context is provided. Context can be one of the following: UNDERPAID, OVERPAID, DELAYED, MULTIPLE, MANUAL, OTHER
}

export interface ICheckout {
  id:	string, //	Checkout UUID
  resource: string, //	Resource name: "checkout"
  name:	string, //	Checkout name
  description: string, //	Checkout description
  logo_url?:	string, // optional	Checkout image URL
  requested_info:	string[], // array, optional	Array of strings specifying what information the merchants wants to collect from the buyers: name, email
  pricing_type:	IPriceType, //	Pricing type: no_price or fixed_price
  local_price?: IMoney, //	money, optional	If pricing_type is fixed_price, then this field will specify the price
}

export interface IMoney {
  amount: string,
  currency: string
}

export interface IPricing {
  local: string, //	money	Price set by the merchant in local fiat currency
  bitcoin?: string, //	money, optional	Price in BTC
  bitcoincash?: string, //	money, optional	Price in BCH
  ethereum?: string, //	money, optional	Price in ETH
  litecoin?: string, //	money, optional	Price in LTC
  usdc?: string, //	money, optional	Price in USDC
  dai?: string, //	money, optional	Price in DAI
}

export interface IListChargeResponse {
  pagination: IPagination,
  data: ICharge[]
}

export interface IChargeResponse {
  data: ICharge
}

export interface ICoinbaseServiceOptions {
  apiKey: string,
  apiVersion: string
}

export enum PaymentStatus {
  NEW = 'NEW', // The payment has been created
  PENDING = 'Pending', // The transaction has been detected
  COMPLETED = 'Completed', // The transaction has been confirmed by the blockchain network
  EXPIRED = 'Expired', //	The payment request has expired (requests expire after 60 minutes if no payment has been detected)
  UNRESOLVED = 'Unresolved', //	The transaction has been confirmed but the payment diverged from what was expected
  UNRESOLVED_UNDERPAID = 'Unresolved (Underpaid)', // 	The amount received was less than the amount requested
  UNRESOLVED_OVERPAID = 'Unresolved (Overpaid)', // The amount received was more than the amount requested
  UNRESOLVED_DELAYED = 'Unresolved (Delayed)', // The amount received arrived after the payment request expired
  UNRESOLVED_MULTIPLE = 'Unresolved (Multiple)', // Multiple payments were made to the same address
  UNRESOLVED_OTHER = 'Unresolved (Other)', // The transaction is of an unknown type
  RESOLVED = 'Resolved', //	The merchant has marked the payment as resolved
  CANCELLED = 'Cancelled', //	The request has been cancelled. Only new charges can be cancelled. Once a payment has been detected a charge cannot be cancelled.
  PENDING_REFUND = 'Pending Refund', // Refund	A refund has been initiated for this charge. Once a payment has been refunded it cannot be undone.
  REFUNDED = 'Refunded', //	A refund has been broadcasted and confirmed by the blockchain network
}


export interface IListCheckout {
  "pagination": IPagination,
  "data": ICheckout[]
}

export interface ICheckoutResponse {
  data: ICheckout
}

export interface ICreateCheckoutRequest {
  name: string, // "The Sovereign Individual",
  description: string, // "Mastering the Transition to the Information Age",
  local_price: {
    amount: string, // "100.00",
    currency: string // "USD"
  },
  pricing_type: IPriceType,
  requested_info: string[] // ["email"]
}

export interface IEvent {
  "id": string, // "24934862-d980-46cb-9402-43c81b0cdba6",
  "resource": string, // "event",
  "type": IEventType,
  "api_version": string, // "2018-03-22",
  "created_at": string, // "2017-01-31T20:49:02Z",
  "data": {
    "code": string, // "66BEOV2A",
    "name": string, // "The Sovereign Individual",
    "description": string, // "Mastering the Transition to the Information Age",
    "hosted_url": string, // "https://commerce.coinbase.com/charges/66BEOV2A",
    "created_at": string, // "2017-01-31T20:49:02Z",
    "expires_at": string, // "2017-01-31T21:49:02Z",
    "timeline": [
      {
        "time": string, // "2017-01-31T20:49:02Z",
        "status": string, // "NEW"
      }
    ],
    "metadata": any, // {},
    "pricing_type": IPriceType,
    "payments": any[],
    "addresses": any, // { "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U", "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"  }
  }
}

export interface IListEventResponse {
  pagination: IPagination,
  data: IEvent[]
}

export interface IEventResponse {
  data: IEvent
}

export interface IPagination {
  "order": string, // "desc",
  "starting_after": string, // null,
  "ending_before": string, // null,
  "total": number, // 25,
  "yielded": number, // 20,
  "limit": number, // 20,
  "previous_uri": string, // null,
  "next_uri": string, // "https://api.commerce.coinbase.com/checkouts?limit=20&starting_after=fb6721f2-1622-48f0-b713-aac6c819b67a",
  "cursor_range": string[] // ["a76721f2-1611-48fb-a513-aac6c819a9d6", "fb6721f2-1622-48f0-b713-aac6c819b67a"]
}

// TODO: Object.keys(pagination).map(key => `${key}=${pagination[key]}`).join('&') on request
export interface IPaginationPayload {
  order?: string, //  optional	Order of the resources in the response. desc (default), asc
  limit?: string, //  optional	Number of results per call. Accepted values: 0 - 100. Default 25
  starting_after?: string, //  optional	A cursor for use in pagination. starting_after is a resource ID that defines your place in the list.
  ending_before?: string //  optional	A cursor for use in pagination. ending_before is a resource ID that defines your place in the list.
}

export type IEventType = 'charge:created' | 'charge:confirmed' | 'charge:failed' | 'charge:delayed' | 'charge:pending' | 'charge:resolved'
// charge:created	New charge is created
// charge:confirmed	Charge has been confirmed and the associated payment is completed
// charge:failed	Charge failed to complete
// charge:delayed	Charge received a payment after it had been expired
// charge:pending	Charge has been detected but has not been confirmed yet
// charge:resolved	Charge has been resolved
