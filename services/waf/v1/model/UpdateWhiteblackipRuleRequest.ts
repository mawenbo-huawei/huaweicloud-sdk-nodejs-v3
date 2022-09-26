import { UpdateWhiteBlackIpRuleRequestBody } from './UpdateWhiteBlackIpRuleRequestBody';


export class UpdateWhiteblackipRuleRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'policy_id': string | undefined;
    private 'rule_id': string | undefined;
    public body?: UpdateWhiteBlackIpRuleRequestBody;
    public constructor(contentType?: any, policyId?: any, ruleId?: any) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
        this['rule_id'] = ruleId;
    }
    public withContentType(contentType: string): UpdateWhiteblackipRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateWhiteblackipRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): UpdateWhiteblackipRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withRuleId(ruleId: string): UpdateWhiteblackipRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withBody(body: UpdateWhiteBlackIpRuleRequestBody): UpdateWhiteblackipRuleRequest {
        this['body'] = body;
        return this;
    }
}