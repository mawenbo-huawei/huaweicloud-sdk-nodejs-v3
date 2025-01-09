import { Policies } from './Policies';
import { Target } from './Target';


export class PolicyGroupForList {
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public priority?: number;
    private 'update_time'?: string;
    public description?: string;
    private 'scope_flag'?: number;
    private 'tenant_id'?: string;
    public policies?: Policies;
    public targets?: Array<Target>;
    public constructor() { 
    }
    public withPolicyGroupId(policyGroupId: string): PolicyGroupForList {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): PolicyGroupForList {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withPriority(priority: number): PolicyGroupForList {
        this['priority'] = priority;
        return this;
    }
    public withUpdateTime(updateTime: string): PolicyGroupForList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): PolicyGroupForList {
        this['description'] = description;
        return this;
    }
    public withScopeFlag(scopeFlag: number): PolicyGroupForList {
        this['scope_flag'] = scopeFlag;
        return this;
    }
    public set scopeFlag(scopeFlag: number  | undefined) {
        this['scope_flag'] = scopeFlag;
    }
    public get scopeFlag(): number | undefined {
        return this['scope_flag'];
    }
    public withTenantId(tenantId: string): PolicyGroupForList {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withPolicies(policies: Policies): PolicyGroupForList {
        this['policies'] = policies;
        return this;
    }
    public withTargets(targets: Array<Target>): PolicyGroupForList {
        this['targets'] = targets;
        return this;
    }
}