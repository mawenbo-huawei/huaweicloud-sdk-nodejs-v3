import { NatGatewayDnatRuleResponseBody } from './NatGatewayDnatRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNatGatewayDnatRuleResponse extends SdkResponse {
    private 'dnat_rule'?: NatGatewayDnatRuleResponseBody;
    public constructor() { 
        super();
    }
    public withDnatRule(dnatRule: NatGatewayDnatRuleResponseBody): UpdateNatGatewayDnatRuleResponse {
        this['dnat_rule'] = dnatRule;
        return this;
    }
    public set dnatRule(dnatRule: NatGatewayDnatRuleResponseBody  | undefined) {
        this['dnat_rule'] = dnatRule;
    }
    public get dnatRule(): NatGatewayDnatRuleResponseBody | undefined {
        return this['dnat_rule'];
    }
}