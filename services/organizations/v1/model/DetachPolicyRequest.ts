import { PolicyTachReqBody } from './PolicyTachReqBody';


export class DetachPolicyRequest {
    private 'X-Security-Token'?: string;
    private 'policy_id'?: string;
    public body?: PolicyTachReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withXSecurityToken(xSecurityToken: string): DetachPolicyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withPolicyId(policyId: string): DetachPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: PolicyTachReqBody): DetachPolicyRequest {
        this['body'] = body;
        return this;
    }
}