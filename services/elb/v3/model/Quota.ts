

export class Quota {
    private 'project_id': string | undefined;
    public loadbalancer: number;
    public certificate: number;
    public listener: number;
    public l7policy: number;
    private 'condition_per_policy': number | undefined;
    public pool: number;
    public healthmonitor: number;
    public member: number;
    private 'members_per_pool': number | undefined;
    private 'listeners_per_pool': number | undefined;
    public ipgroup: number;
    private 'ipgroup_bindings': number | undefined;
    private 'ipgroup_max_length': number | undefined;
    private 'security_policy': number | undefined;
    private 'listeners_per_loadbalancer': number | undefined;
    public constructor(projectId?: any, loadbalancer?: any, certificate?: any, listener?: any, l7policy?: any, conditionPerPolicy?: any, pool?: any, healthmonitor?: any, member?: any, membersPerPool?: any, listenersPerPool?: any, ipgroup?: any, ipgroupBindings?: any, ipgroupMaxLength?: any, securityPolicy?: any, listenersPerLoadbalancer?: any) { 
        this['project_id'] = projectId;
        this['loadbalancer'] = loadbalancer;
        this['certificate'] = certificate;
        this['listener'] = listener;
        this['l7policy'] = l7policy;
        this['condition_per_policy'] = conditionPerPolicy;
        this['pool'] = pool;
        this['healthmonitor'] = healthmonitor;
        this['member'] = member;
        this['members_per_pool'] = membersPerPool;
        this['listeners_per_pool'] = listenersPerPool;
        this['ipgroup'] = ipgroup;
        this['ipgroup_bindings'] = ipgroupBindings;
        this['ipgroup_max_length'] = ipgroupMaxLength;
        this['security_policy'] = securityPolicy;
        this['listeners_per_loadbalancer'] = listenersPerLoadbalancer;
    }
    public withProjectId(projectId: string): Quota {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLoadbalancer(loadbalancer: number): Quota {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withCertificate(certificate: number): Quota {
        this['certificate'] = certificate;
        return this;
    }
    public withListener(listener: number): Quota {
        this['listener'] = listener;
        return this;
    }
    public withL7policy(l7policy: number): Quota {
        this['l7policy'] = l7policy;
        return this;
    }
    public withConditionPerPolicy(conditionPerPolicy: number): Quota {
        this['condition_per_policy'] = conditionPerPolicy;
        return this;
    }
    public set conditionPerPolicy(conditionPerPolicy: number | undefined) {
        this['condition_per_policy'] = conditionPerPolicy;
    }
    public get conditionPerPolicy() {
        return this['condition_per_policy'];
    }
    public withPool(pool: number): Quota {
        this['pool'] = pool;
        return this;
    }
    public withHealthmonitor(healthmonitor: number): Quota {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
    public withMember(member: number): Quota {
        this['member'] = member;
        return this;
    }
    public withMembersPerPool(membersPerPool: number): Quota {
        this['members_per_pool'] = membersPerPool;
        return this;
    }
    public set membersPerPool(membersPerPool: number | undefined) {
        this['members_per_pool'] = membersPerPool;
    }
    public get membersPerPool() {
        return this['members_per_pool'];
    }
    public withListenersPerPool(listenersPerPool: number): Quota {
        this['listeners_per_pool'] = listenersPerPool;
        return this;
    }
    public set listenersPerPool(listenersPerPool: number | undefined) {
        this['listeners_per_pool'] = listenersPerPool;
    }
    public get listenersPerPool() {
        return this['listeners_per_pool'];
    }
    public withIpgroup(ipgroup: number): Quota {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withIpgroupBindings(ipgroupBindings: number): Quota {
        this['ipgroup_bindings'] = ipgroupBindings;
        return this;
    }
    public set ipgroupBindings(ipgroupBindings: number | undefined) {
        this['ipgroup_bindings'] = ipgroupBindings;
    }
    public get ipgroupBindings() {
        return this['ipgroup_bindings'];
    }
    public withIpgroupMaxLength(ipgroupMaxLength: number): Quota {
        this['ipgroup_max_length'] = ipgroupMaxLength;
        return this;
    }
    public set ipgroupMaxLength(ipgroupMaxLength: number | undefined) {
        this['ipgroup_max_length'] = ipgroupMaxLength;
    }
    public get ipgroupMaxLength() {
        return this['ipgroup_max_length'];
    }
    public withSecurityPolicy(securityPolicy: number): Quota {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: number | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy() {
        return this['security_policy'];
    }
    public withListenersPerLoadbalancer(listenersPerLoadbalancer: number): Quota {
        this['listeners_per_loadbalancer'] = listenersPerLoadbalancer;
        return this;
    }
    public set listenersPerLoadbalancer(listenersPerLoadbalancer: number | undefined) {
        this['listeners_per_loadbalancer'] = listenersPerLoadbalancer;
    }
    public get listenersPerLoadbalancer() {
        return this['listeners_per_loadbalancer'];
    }
}