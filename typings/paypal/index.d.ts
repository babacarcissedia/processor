import { IPaypalOptions } from "@/paypal/definitions";
export default class PayPal {
    private options;
    constructor(options: IPaypalOptions);
    getAccessToken(): Promise<{
        access_token: string;
    }>;
    handleRequest(request: any, response: any): Promise<unknown>;
}
