import { FirewallInstanceResource } from './FirewallInstanceResource';
import { Flavor } from './Flavor';
import { ProtectObjectVO } from './ProtectObjectVO';


export class GetFirewallInstanceResponseRecord {
    private 'fw_instance_id'?: string | undefined;
    public name?: string;
    private 'ha_type'?: number | undefined;
    private 'charge_mode'?: number | undefined;
    private 'service_type'?: number | undefined;
    private 'engine_type'?: number | undefined;
    public flavor?: Flavor;
    private 'protect_objects'?: Array<ProtectObjectVO> | undefined;
    public status?: GetFirewallInstanceResponseRecordStatusEnum;
    private 'is_old_firewall_instance'?: boolean | undefined;
    private 'support_ipv6'?: boolean | undefined;
    private 'feature_toggle'?: { [key: string]: boolean; } | undefined;
    public resources?: Array<FirewallInstanceResource>;
    private 'fw_instance_name'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withFwInstanceId(fwInstanceId: string): GetFirewallInstanceResponseRecord {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withName(name: string): GetFirewallInstanceResponseRecord {
        this['name'] = name;
        return this;
    }
    public withHaType(haType: number): GetFirewallInstanceResponseRecord {
        this['ha_type'] = haType;
        return this;
    }
    public set haType(haType: number | undefined) {
        this['ha_type'] = haType;
    }
    public get haType() {
        return this['ha_type'];
    }
    public withChargeMode(chargeMode: number): GetFirewallInstanceResponseRecord {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: number | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withServiceType(serviceType: number): GetFirewallInstanceResponseRecord {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withEngineType(engineType: number): GetFirewallInstanceResponseRecord {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: number | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withFlavor(flavor: Flavor): GetFirewallInstanceResponseRecord {
        this['flavor'] = flavor;
        return this;
    }
    public withProtectObjects(protectObjects: Array<ProtectObjectVO>): GetFirewallInstanceResponseRecord {
        this['protect_objects'] = protectObjects;
        return this;
    }
    public set protectObjects(protectObjects: Array<ProtectObjectVO> | undefined) {
        this['protect_objects'] = protectObjects;
    }
    public get protectObjects() {
        return this['protect_objects'];
    }
    public withStatus(status: GetFirewallInstanceResponseRecordStatusEnum): GetFirewallInstanceResponseRecord {
        this['status'] = status;
        return this;
    }
    public withIsOldFirewallInstance(isOldFirewallInstance: boolean): GetFirewallInstanceResponseRecord {
        this['is_old_firewall_instance'] = isOldFirewallInstance;
        return this;
    }
    public set isOldFirewallInstance(isOldFirewallInstance: boolean | undefined) {
        this['is_old_firewall_instance'] = isOldFirewallInstance;
    }
    public get isOldFirewallInstance() {
        return this['is_old_firewall_instance'];
    }
    public withSupportIpv6(supportIpv6: boolean): GetFirewallInstanceResponseRecord {
        this['support_ipv6'] = supportIpv6;
        return this;
    }
    public set supportIpv6(supportIpv6: boolean | undefined) {
        this['support_ipv6'] = supportIpv6;
    }
    public get supportIpv6() {
        return this['support_ipv6'];
    }
    public withFeatureToggle(featureToggle: { [key: string]: boolean; }): GetFirewallInstanceResponseRecord {
        this['feature_toggle'] = featureToggle;
        return this;
    }
    public set featureToggle(featureToggle: { [key: string]: boolean; } | undefined) {
        this['feature_toggle'] = featureToggle;
    }
    public get featureToggle() {
        return this['feature_toggle'];
    }
    public withResources(resources: Array<FirewallInstanceResource>): GetFirewallInstanceResponseRecord {
        this['resources'] = resources;
        return this;
    }
    public withFwInstanceName(fwInstanceName: string): GetFirewallInstanceResponseRecord {
        this['fw_instance_name'] = fwInstanceName;
        return this;
    }
    public set fwInstanceName(fwInstanceName: string | undefined) {
        this['fw_instance_name'] = fwInstanceName;
    }
    public get fwInstanceName() {
        return this['fw_instance_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GetFirewallInstanceResponseRecord {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetFirewallInstanceResponseRecordStatusEnum {
    NUMBER_MINUS_1 = -1,
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_11 = 11
}
