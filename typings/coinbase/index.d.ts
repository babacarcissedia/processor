import { ICoinbaseServiceOptions, ICreateChargeRequest, ICharge, IListChargeResponse, IChargeResponse, IListCheckout, ICheckoutResponse, ICreateCheckoutRequest, IListEventResponse, IEventResponse } from "./definitions";
export default class Index {
    private readonly apiKey;
    private readonly apiVersion;
    constructor(options: ICoinbaseServiceOptions);
    listCharges(): Promise<IListChargeResponse>;
    showCharge(id: string): Promise<IChargeResponse>;
    createCharge(payload: ICreateChargeRequest): Promise<ICharge>;
    updateCharge(id: string, payload: ICreateChargeRequest): Promise<ICharge>;
    cancelCharge(id: string): Promise<ICharge>;
    resolveCharge(id: string): Promise<ICharge>;
    listCheckouts(): Promise<IListCheckout>;
    showCheckout(id: string): Promise<ICheckoutResponse>;
    createCheckout(payload: ICreateCheckoutRequest): Promise<ICheckoutResponse>;
    updateCheckout(id: string, payload: ICreateCheckoutRequest): Promise<ICheckoutResponse>;
    deleteCheckout(id: string): Promise<ICheckoutResponse>;
    listEvents(): Promise<IListEventResponse>;
    showEvent(id: string): Promise<IEventResponse>;
}
