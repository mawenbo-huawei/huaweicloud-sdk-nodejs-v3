import { PolicyTachReqBody } from './PolicyTachReqBody';


export class DetachPolicyRequest {
    private 'policy_id'?: string;
    public body?: PolicyTachReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
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