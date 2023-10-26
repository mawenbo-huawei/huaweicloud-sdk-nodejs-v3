

export class ListHostStatusRequest {
    private 'enterprise_project_id'?: string;
    public version?: string;
    private 'agent_status'?: string;
    private 'detect_result'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_status'?: string;
    private 'os_type'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'ip_addr'?: string;
    private 'protect_status'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public region?: string;
    private 'has_intrusion'?: boolean;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    private 'charging_mode'?: string;
    public refresh?: boolean;
    private 'above_version'?: boolean;
    private 'outside_host'?: boolean;
    private 'asset_value'?: string;
    public label?: string;
    private 'server_group'?: string;
    private 'agent_upgradable'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVersion(version: string): ListHostStatusRequest {
        this['version'] = version;
        return this;
    }
    public withAgentStatus(agentStatus: string): ListHostStatusRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDetectResult(detectResult: string): ListHostStatusRequest {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withHostName(hostName: string): ListHostStatusRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListHostStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostStatus(hostStatus: string): ListHostStatusRequest {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withOsType(osType: string): ListHostStatusRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPrivateIp(privateIp: string): ListHostStatusRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListHostStatusRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withIpAddr(ipAddr: string): ListHostStatusRequest {
        this['ip_addr'] = ipAddr;
        return this;
    }
    public set ipAddr(ipAddr: string  | undefined) {
        this['ip_addr'] = ipAddr;
    }
    public get ipAddr(): string | undefined {
        return this['ip_addr'];
    }
    public withProtectStatus(protectStatus: string): ListHostStatusRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withGroupId(groupId: string): ListHostStatusRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ListHostStatusRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withRegion(region: string): ListHostStatusRequest {
        this['region'] = region;
        return this;
    }
    public withHasIntrusion(hasIntrusion: boolean): ListHostStatusRequest {
        this['has_intrusion'] = hasIntrusion;
        return this;
    }
    public set hasIntrusion(hasIntrusion: boolean  | undefined) {
        this['has_intrusion'] = hasIntrusion;
    }
    public get hasIntrusion(): boolean | undefined {
        return this['has_intrusion'];
    }
    public withPolicyGroupId(policyGroupId: string): ListHostStatusRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): ListHostStatusRequest {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withChargingMode(chargingMode: string): ListHostStatusRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withRefresh(refresh: boolean): ListHostStatusRequest {
        this['refresh'] = refresh;
        return this;
    }
    public withAboveVersion(aboveVersion: boolean): ListHostStatusRequest {
        this['above_version'] = aboveVersion;
        return this;
    }
    public set aboveVersion(aboveVersion: boolean  | undefined) {
        this['above_version'] = aboveVersion;
    }
    public get aboveVersion(): boolean | undefined {
        return this['above_version'];
    }
    public withOutsideHost(outsideHost: boolean): ListHostStatusRequest {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
    public withAssetValue(assetValue: string): ListHostStatusRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withLabel(label: string): ListHostStatusRequest {
        this['label'] = label;
        return this;
    }
    public withServerGroup(serverGroup: string): ListHostStatusRequest {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: string  | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup(): string | undefined {
        return this['server_group'];
    }
    public withAgentUpgradable(agentUpgradable: boolean): ListHostStatusRequest {
        this['agent_upgradable'] = agentUpgradable;
        return this;
    }
    public set agentUpgradable(agentUpgradable: boolean  | undefined) {
        this['agent_upgradable'] = agentUpgradable;
    }
    public get agentUpgradable(): boolean | undefined {
        return this['agent_upgradable'];
    }
    public withLimit(limit: number): ListHostStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostStatusRequest {
        this['offset'] = offset;
        return this;
    }
}