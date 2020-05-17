export const LIST_CHARGE_RESPONSE = []

export const CREATE_CHARGE_PAYLOAD = {
  "name": "The Sovereign Individual",
  "description": "Mastering the Transition to the Information Age",
  "local_price": {
    "amount": "100.00",
    "currency": "USD"
  },
  "pricing_type": "fixed_price",
  "metadata": {
    "customer_id": "id_1005",
    "customer_name": "Satoshi Nakamoto"
  },
  "redirect_url": "https://charge/completed/page",
  "cancel_url": "https://charge/canceled/page"
}

export const CREATE_CHARGE_RESPONSE = {
  "data": {
    "id": "f765421f2-1451-fafb-a513-aac6c819fba9",
    "resource": "charge",
    "code": "66BEOV2A",
    "name": "The Sovereign Individual",
    "description": "Mastering the Transition to the Information Age",
    "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
    "hosted_url": "https://commerce.coinbase.com/charges/66BEOV2A",
    "created_at": "2017-01-31T20:49:02Z",
    "expires_at": "2017-01-31T21:49:02Z",
    "timeline": [
      {
        "time": "2017-01-31T20:49:02Z",
        "status": "NEW"
      }
    ],
    "metadata": {
      "customer_id": "id_1005",
      "customer_name": "Satoshi Nakamoto"
    },
    "pricing_type": "fixed_price",
    "pricing": {
      "local": { "amount": "100.00", "currency": "USD" },
      "bitcoin": { "amount": "1.00", "currency": "BTC" },
      "ethereum": { "amount": "10.00", "currency": "ETH" }
    },
    "payments": [],
    "addresses": {
      "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
      "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"
    },
    "redirect_url": "https://charge/completed/page",
    "cancel_url": "https://charge/canceled/page",
  }
}

export const ANOTHER_CREATE_CHARGE_RESPONSE = {
  "id": "f765421f2-1451-fafb-a513-aac6c819fba9",
  "resource": "charge",
  "code": "66BEOV2A",
  "name": "The Sovereign Individual",
  "description": "Mastering the Transition to the Information Age",
  "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
  "hosted_url": "https://commerce.coinbase.com/charges/66BEOV2A",
  "created_at": "2017-01-31T20:49:02Z",
  "expires_at": "2017-01-31T21:49:02Z",
  "confirmed_at": "2017-01-31T20:50:02Z",
  "checkout": {
    "id": "a76721f2-1611-48fb-a513-aac6c819a9d6"
  },
  "timeline": [
    {
      "time": "2017-01-31T20:49:02Z",
      "status": "NEW"
    },
    {
      "time": "2017-01-31T20:50:02Z",
      "status": "PENDING"
    },
    {
      "time": "2017-01-31T20:50:02Z",
      "status": "COMPLETED"
    },
    {
      "time": "2017-01-31T20:50:02Z",
      "status": "UNRESOLVED",
      "context": "UNDERPAID"
    },
    {
      "time": "2017-01-31T20:50:02Z",
      "status": "RESOLVED"
    }
  ],
  "metadata": {},
  "pricing_type": "fixed_price",
  "pricing": {
    "local": { "amount": "100.00", "currency": "USD" },
    "bitcoin": { "amount": "1.00", "currency": "BTC" },
    "ethereum": { "amount": "10.00", "currency": "ETH" }
  },
  "payments": [
    {
      "network": "ethereum",
      "transaction_id": "0xe02fead885c3e4019945428ed54d094247bada2d0ac41b08fce7ce137bf29587",
      "status": "CONFIRMED",
      "value": {
        "local": { "amount": "100.0", "currency": "USD" },
        "crypto": { "amount": "10.00", "currency": "ETH" }
      },
      "block": {
        "height": 100,
        "hash": "0xe02fead885c3e4019945428ed54d094247bada2d0ac41b08fce7ce137bf29587",
        "confirmations_accumulated": 8,
        "confirmations_required": 2
      }
    }
  ],
  "addresses": {
    "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
    "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"
  }
}

export const CANCEL_CHARGE_RESPONSE = {
  "data": {
    "id": "f765421f2-1451-fafb-a513-aac6c819fba9",
    "resource": "charge",
    "code": "66BEOV2A",
    "name": "The Sovereign Individual",
    "description": "Mastering the Transition to the Information Age",
    "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
    "hosted_url": "https://commerce.coinbase.com/charges/66BEOV2A",
    "created_at": "2017-01-31T20:49:02Z",
    "expires_at": "2017-01-31T21:49:02Z",
    "timeline": [
      {
        "time": "2017-01-31T20:49:02Z",
        "status": "NEW"
      },
      {
        "time": "2017-01-31T20:52:02Z",
        "status": "CANCELED"
      }
    ],
    "metadata": {
      "customer_id": "id_1005",
      "customer_name": "Satoshi Nakamoto"
    },
    "pricing_type": "fixed_price",
    "pricing": {
      "local": { "amount": "100.00", "currency": "USD" },
      "bitcoin": { "amount": "1.00", "currency": "BTC" },
      "ethereum": { "amount": "10.00", "currency": "ETH" }
    },
    "payments": [],
    "addresses": {
      "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
      "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"
    },
    "redirect_url": "https://charge/completed/page",
    "cancel_url": "https://charge/canceled/page",
  }
}

export const SHOW_CHARGE_RESPONSE = {
  "data": {
    "id": "f765421f2-1451-fafb-a513-aac6c819fba9",
    "resource": "charge",
    "code": "66BEOV2A",
    "name": "The Sovereign Individual",
    "description": "Mastering the Transition to the Information Age",
    "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
    "hosted_url": "https://commerce.coinbase.com/charges/66BEOV2A",
    "created_at": "2017-01-31T20:49:02Z",
    "expires_at": "2017-01-31T21:49:02Z",
    "timeline": [
      {
        "time": "2017-01-31T20:49:02Z",
        "status": "NEW"
      }
    ],
    "metadata": {
      "customer_id": "id_1005",
      "customer_name": "Satoshi Nakamoto"
    },
    "pricing_type": "fixed_price",
    "pricing": {
      "local": { "amount": "100.00", "currency": "USD" },
      "bitcoin": { "amount": "1.00", "currency": "BTC" },
      "ethereum": { "amount": "10.00", "currency": "ETH" }
    },
    "payments": [],
    "addresses": {
      "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
      "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"
    },
    "redirect_url": "https://charge/completed/page",
    "cancel_url": "https://charge/canceled/page",
  }
}

export const RESOLVE_CHARGE_RESPONSE = {
  "data": {
    "id": "f765421f2-1451-fafb-a513-aac6c819fba9",
    "resource": "charge",
    "code": "66BEOV2A",
    "name": "The Sovereign Individual",
    "description": "Mastering the Transition to the Information Age",
    "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
    "hosted_url": "https://commerce.coinbase.com/charges/66BEOV2A",
    "created_at": "2017-01-31T20:49:02Z",
    "expires_at": "2017-01-31T21:49:02Z",
    "timeline": [
      {
        "time": "2017-01-31T20:49:02Z",
        "status": "NEW"
      },
      {
        "status": "EXPIRED",
        "time": "2017-01-31T21:49:02Z"
      },
      {
        "status": "UNRESOLVED",
        "time": "2017-01-31T22:00:00Z",
        "context": "DELAYED"
      },
      {
        "status": "RESOLVED",
        "time": "2017-01-31T23:00:00Z"
      }
    ],
    "metadata": {
      "customer_id": "id_1005",
      "customer_name": "Satoshi Nakamoto"
    },
    "pricing_type": "fixed_price",
    "pricing": {
      "local": { "amount": "100.00", "currency": "USD" },
      "bitcoin": { "amount": "1.00", "currency": "BTC" },
      "ethereum": { "amount": "10.00", "currency": "ETH" }
    },
    "payments": [
      {
        "network": "ethereum",
        "transaction_id": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "status": "CONFIRMED",
        "detected_at": "2017-01-31T22:00:00Z",
        "value": {
          "local": { "amount": "100.0", "currency": "USD" },
          "crypto": { "amount": "10.00", "currency": "ETH" }
        },
        "block": {
          "height": 100,
          "hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "confirmations_accumulated": 8,
          "confirmations_required": 2
        }
      }
    ],
    "addresses": {
      "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
      "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"
    },
    "redirect_url": "https://charge/completed/page",
    "cancel_url": "https://charge/canceled/page",
  }
}

export const CHECKOUT_PAYLOAD = {
  "id": "30934862-d980-46cb-9402-43c81b0cabd5",
  "resource": "checkout",
  "name": "The Sovereign Individual",
  "description": "Mastering the Transition to the Information Age",
  "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
  "requested_info": [ "name", "email" ],
  "pricing_type": "fixed_price",
  "local_price": { "amount": "100.0", "currency": "USD" }
}

export const SHOW_CHECKOUT_RESPONSE = {
  "data": {
    "id": "30934862-d980-46cb-9402-43c81b0cabd5",
    "resource": "checkout",
    "name": "The Sovereign Individual",
    "description": "Mastering the Transition to the Information Age",
    "logo_url": "https://commerce.coinbase.com/charges/ybjknds.png",
    "requested_info": [ ],
    "pricing_type": "no_price"
  }
}

export const UPDATE_CHECKOUT_RESPONSE = {
  "data": {
    "id": "30934862-d980-46cb-9402-43c81b0cabd5",
    "resource": "checkout",
    "name": "The Sovereign Individual",
    "description": "Mastering the Transition to the Information Age",
    "requested_info": ["email"],
    "pricing_type": "fixed_price",
    "local_price": {"amount": "200.00", "currency": "USD"}
  }
}


export const LIST_EVENT_RESPONSE = {
  "pagination": {},
  "data": [{
    "id": "24934862-d980-46cb-9402-43c81b0cdba6",
    "resource": "event",
    "type": "charge:created",
    "api_version": "2018-03-22",
    "created_at": "2017-01-31T20:49:02Z",
    "data": {
      "code": "66BEOV2A",
      "name": "The Sovereign Individual",
      "description": "Mastering the Transition to the Information Age",
      "hosted_url": "https://commerce.coinbase.com/charges/66BEOV2A",
      "created_at": "2017-01-31T20:49:02Z",
      "expires_at": "2017-01-31T21:49:02Z",
      "timeline": [
        {
          "time": "2017-01-31T20:49:02Z",
          "status": "NEW"
        }
      ],
      "metadata": {},
      "pricing_type": "no_price",
      "payments": [],
      "addresses": {
        "bitcoin": "mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U",
        "ethereum": "0x419f91df39951fd4e8acc8f1874b01c0c78ceba6"
      }
    }
  }]
}


export const CREATE_CHECKOUT_PAYLOAD = {
  "name": "The Sovereign Individual",
  "description": "Mastering the Transition to the Information Age",
  "local_price": {
    "amount": "100.00",
    "currency": "USD"
  },
  pricing_type: "fixed_price",
  "requested_info": ["email"]
}
export const CREATE_CHECKOUT_RESPONSE = {
  data: {
    "brand_color": "#456990",
    "brand_logo_url": "https://res.cloudinary.com/commerce/image/upload/v1589238056/jzcfyxn407swiycb8vsj.png",
    "description": "Mastering the Transition to the Information Age",
    "id": "a6d8b5f5-9e85-4ded-8060-53939847b108",
    "local_price": {
      "amount": "100.00",
      "currency": "USD"
    },
    "logo_url": "https://res.cloudinary.com/commerce/image/upload/v1589238056/jzcfyxn407swiycb8vsj.png",
    "name": "The Sovereign Individual",
    "organization_name": "Neptune Prime TM",
    "pricing_type": "fixed_price",
    "requested_info": [
      "email"
    ],
    "resource": "checkout"
  }
}
