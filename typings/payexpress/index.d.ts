import { IPayExpressOptions } from "@/payexpress/definitions";
export default class PayExpress {
    private options;
    constructor(options: IPayExpressOptions);
    requestPayment(payload: any): Promise<unknown>;
    ipn(bodyPayload: any): Promise<unknown>;
}
