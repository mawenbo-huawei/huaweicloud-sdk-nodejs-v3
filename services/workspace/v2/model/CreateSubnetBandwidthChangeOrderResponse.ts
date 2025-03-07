
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSubnetBandwidthChangeOrderResponse extends SdkResponse {
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateSubnetBandwidthChangeOrderResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}