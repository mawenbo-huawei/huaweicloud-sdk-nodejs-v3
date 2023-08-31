import { NatGatewayResponseBody } from './NatGatewayResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNatGatewayResponse extends SdkResponse {
    private 'nat_gateway'?: NatGatewayResponseBody;
    public constructor() { 
        super();
    }
    public withNatGateway(natGateway: NatGatewayResponseBody): UpdateNatGatewayResponse {
        this['nat_gateway'] = natGateway;
        return this;
    }
    public set natGateway(natGateway: NatGatewayResponseBody  | undefined) {
        this['nat_gateway'] = natGateway;
    }
    public get natGateway(): NatGatewayResponseBody | undefined {
        return this['nat_gateway'];
    }
}