import { UpdateRuleReq } from './UpdateRuleReq';


export class UpdateRoutingRuleRequest {
    private 'Instance-Id'?: string | undefined;
    private 'rule_id': string | undefined;
    public body?: UpdateRuleReq;
    public constructor(ruleId: any) { 
        this['rule_id'] = ruleId;
    }
    public withInstanceId(instanceId: string): UpdateRoutingRuleRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withRuleId(ruleId: string): UpdateRoutingRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withBody(body: UpdateRuleReq): UpdateRoutingRuleRequest {
        this['body'] = body;
        return this;
    }
}