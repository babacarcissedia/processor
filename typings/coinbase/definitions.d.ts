export interface ICreateChargeRequest {
    "name": string;
    "description": string;
    "local_price": {
        "amount": string;
        "currency": string;
    };
    "pricing_type": IPriceType;
    "metadata"?: {
        "customer_id": string;
        "customer_name": string;
    };
    "redirect_url"?: string;
    "cancel_url"?: string;
}
export declare type IPriceType = 'no_price' | 'fixed_price';
export interface ICharge {
    id: string;
    resource: string;
    code: string;
    name: string;
    description: string;
    logo_url: string;
    hosted_url: string;
    created_at: string;
    expires_at: string;
    confirmed_at: string;
    checkout: string;
    timeline: ITimeline[];
    metadata: string;
    pricing_type: IPriceType;
    pricing: string;
    payments: any[];
    addresses: string;
}
export interface ITimeline {
    time: string;
    status: 'NEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'UNRESOLVED' | 'RESOLVED' | 'CANCELED' | 'REFUND PENDING' | 'REFUNDED';
    context?: 'UNRESOLVED' | 'UNDERPAID' | 'OVERPAID' | 'DELAYED' | 'MULTIPLE' | 'MANUAL' | 'OTHER';
}
export interface ICheckout {
    id: string;
    resource: string;
    name: string;
    description: string;
    logo_url?: string;
    requested_info: string[];
    pricing_type: IPriceType;
    local_price?: IMoney;
}
export interface IMoney {
    amount: string;
    currency: string;
}
export interface IPricing {
    local: string;
    bitcoin?: string;
    bitcoincash?: string;
    ethereum?: string;
    litecoin?: string;
    usdc?: string;
    dai?: string;
}
export interface IListChargeResponse {
    pagination: IPagination;
    data: ICharge[];
}
export interface IChargeResponse {
    data: ICharge;
}
export interface ICoinbaseServiceOptions {
    apiKey: string;
    apiVersion: string;
}
export declare enum PaymentStatus {
    NEW = "NEW",
    PENDING = "Pending",
    COMPLETED = "Completed",
    EXPIRED = "Expired",
    UNRESOLVED = "Unresolved",
    UNRESOLVED_UNDERPAID = "Unresolved (Underpaid)",
    UNRESOLVED_OVERPAID = "Unresolved (Overpaid)",
    UNRESOLVED_DELAYED = "Unresolved (Delayed)",
    UNRESOLVED_MULTIPLE = "Unresolved (Multiple)",
    UNRESOLVED_OTHER = "Unresolved (Other)",
    RESOLVED = "Resolved",
    CANCELLED = "Cancelled",
    PENDING_REFUND = "Pending Refund",
    REFUNDED = "Refunded"
}
export interface IListCheckout {
    "pagination": IPagination;
    "data": ICheckout[];
}
export interface ICheckoutResponse {
    data: ICheckout;
}
export interface ICreateCheckoutRequest {
    "name": string;
    "description": string;
    "local_price": {
        "amount": string;
        "currency": string;
    };
    "pricing_type": IPriceType;
    "requested_info": string[];
}
export interface IEvent {
    "id": string;
    "resource": string;
    "type": IEventType;
    "api_version": string;
    "created_at": string;
    "data": {
        "code": string;
        "name": string;
        "description": string;
        "hosted_url": string;
        "created_at": string;
        "expires_at": string;
        "timeline": [{
            "time": string;
            "status": string;
        }];
        "metadata": any;
        "pricing_type": IPriceType;
        "payments": any[];
        "addresses": any;
    };
}
export interface IListEventResponse {
    pagination: IPagination;
    data: IEvent[];
}
export interface IEventResponse {
    data: IEvent;
}
export interface IPagination {
    "order": string;
    "starting_after": string;
    "ending_before": string;
    "total": number;
    "yielded": number;
    "limit": number;
    "previous_uri": string;
    "next_uri": string;
    "cursor_range": string[];
}
export interface IPaginationPayload {
    order?: string;
    limit?: string;
    starting_after?: string;
    ending_before?: string;
}
export declare type IEventType = 'charge:created' | 'charge:confirmed' | 'charge:failed' | 'charge:delayed' | 'charge:pending' | 'charge:resolved';
