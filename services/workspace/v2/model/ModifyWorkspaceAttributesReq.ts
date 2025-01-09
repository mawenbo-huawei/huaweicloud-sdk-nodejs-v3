import { AdDomain } from './AdDomain';
import { AdDomainInfo } from './AdDomainInfo';
import { ApplyDedicatedStandbyNetworkParam } from './ApplyDedicatedStandbyNetworkParam';
import { ApplySharedVpcDedicatedParam } from './ApplySharedVpcDedicatedParam';
import { ThirdGatewayConfigInfo } from './ThirdGatewayConfigInfo';
import { VpcConfigInfo } from './VpcConfigInfo';


export class ModifyWorkspaceAttributesReq {
    private 'operate_type'?: ModifyWorkspaceAttributesReqOperateTypeEnum | string;
    private 'auth_type'?: ModifyWorkspaceAttributesReqAuthTypeEnum | string;
    private 'ad_info'?: AdDomainInfo;
    private 'third_gateway_info'?: ThirdGatewayConfigInfo;
    private 'ad_domains'?: AdDomain;
    private 'access_mode'?: ModifyWorkspaceAttributesReqAccessModeEnum | string;
    private 'dedicated_subnets'?: string;
    private 'adn_conflict_network'?: string;
    private 'subnet_ids'?: Array<string>;
    private 'vpc_config_infos'?: Array<VpcConfigInfo>;
    private 'internet_access_port'?: string;
    private 'enterprise_id'?: string;
    private 'is_send_email'?: boolean;
    private 'dc_vnc_ip'?: string;
    private 'authorized_collect_log'?: boolean;
    private 'authorized_hda_upgrade'?: boolean;
    private 'apply_shared_vpc_dedicated_param'?: ApplySharedVpcDedicatedParam;
    private 'apply_dedicated_standby_network_param'?: ApplyDedicatedStandbyNetworkParam;
    private 'is_authorized_install_agent'?: boolean;
    private 'enable_user_create_snapshot'?: boolean;
    private 'is_support_ipv6'?: boolean;
    public constructor() { 
    }
    public withOperateType(operateType: ModifyWorkspaceAttributesReqOperateTypeEnum | string): ModifyWorkspaceAttributesReq {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: ModifyWorkspaceAttributesReqOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): ModifyWorkspaceAttributesReqOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withAuthType(authType: ModifyWorkspaceAttributesReqAuthTypeEnum | string): ModifyWorkspaceAttributesReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ModifyWorkspaceAttributesReqAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ModifyWorkspaceAttributesReqAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAdInfo(adInfo: AdDomainInfo): ModifyWorkspaceAttributesReq {
        this['ad_info'] = adInfo;
        return this;
    }
    public set adInfo(adInfo: AdDomainInfo  | undefined) {
        this['ad_info'] = adInfo;
    }
    public get adInfo(): AdDomainInfo | undefined {
        return this['ad_info'];
    }
    public withThirdGatewayInfo(thirdGatewayInfo: ThirdGatewayConfigInfo): ModifyWorkspaceAttributesReq {
        this['third_gateway_info'] = thirdGatewayInfo;
        return this;
    }
    public set thirdGatewayInfo(thirdGatewayInfo: ThirdGatewayConfigInfo  | undefined) {
        this['third_gateway_info'] = thirdGatewayInfo;
    }
    public get thirdGatewayInfo(): ThirdGatewayConfigInfo | undefined {
        return this['third_gateway_info'];
    }
    public withAdDomains(adDomains: AdDomain): ModifyWorkspaceAttributesReq {
        this['ad_domains'] = adDomains;
        return this;
    }
    public set adDomains(adDomains: AdDomain  | undefined) {
        this['ad_domains'] = adDomains;
    }
    public get adDomains(): AdDomain | undefined {
        return this['ad_domains'];
    }
    public withAccessMode(accessMode: ModifyWorkspaceAttributesReqAccessModeEnum | string): ModifyWorkspaceAttributesReq {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: ModifyWorkspaceAttributesReqAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): ModifyWorkspaceAttributesReqAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withDedicatedSubnets(dedicatedSubnets: string): ModifyWorkspaceAttributesReq {
        this['dedicated_subnets'] = dedicatedSubnets;
        return this;
    }
    public set dedicatedSubnets(dedicatedSubnets: string  | undefined) {
        this['dedicated_subnets'] = dedicatedSubnets;
    }
    public get dedicatedSubnets(): string | undefined {
        return this['dedicated_subnets'];
    }
    public withAdnConflictNetwork(adnConflictNetwork: string): ModifyWorkspaceAttributesReq {
        this['adn_conflict_network'] = adnConflictNetwork;
        return this;
    }
    public set adnConflictNetwork(adnConflictNetwork: string  | undefined) {
        this['adn_conflict_network'] = adnConflictNetwork;
    }
    public get adnConflictNetwork(): string | undefined {
        return this['adn_conflict_network'];
    }
    public withSubnetIds(subnetIds: Array<string>): ModifyWorkspaceAttributesReq {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withVpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>): ModifyWorkspaceAttributesReq {
        this['vpc_config_infos'] = vpcConfigInfos;
        return this;
    }
    public set vpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>  | undefined) {
        this['vpc_config_infos'] = vpcConfigInfos;
    }
    public get vpcConfigInfos(): Array<VpcConfigInfo> | undefined {
        return this['vpc_config_infos'];
    }
    public withInternetAccessPort(internetAccessPort: string): ModifyWorkspaceAttributesReq {
        this['internet_access_port'] = internetAccessPort;
        return this;
    }
    public set internetAccessPort(internetAccessPort: string  | undefined) {
        this['internet_access_port'] = internetAccessPort;
    }
    public get internetAccessPort(): string | undefined {
        return this['internet_access_port'];
    }
    public withEnterpriseId(enterpriseId: string): ModifyWorkspaceAttributesReq {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withIsSendEmail(isSendEmail: boolean): ModifyWorkspaceAttributesReq {
        this['is_send_email'] = isSendEmail;
        return this;
    }
    public set isSendEmail(isSendEmail: boolean  | undefined) {
        this['is_send_email'] = isSendEmail;
    }
    public get isSendEmail(): boolean | undefined {
        return this['is_send_email'];
    }
    public withDcVncIp(dcVncIp: string): ModifyWorkspaceAttributesReq {
        this['dc_vnc_ip'] = dcVncIp;
        return this;
    }
    public set dcVncIp(dcVncIp: string  | undefined) {
        this['dc_vnc_ip'] = dcVncIp;
    }
    public get dcVncIp(): string | undefined {
        return this['dc_vnc_ip'];
    }
    public withAuthorizedCollectLog(authorizedCollectLog: boolean): ModifyWorkspaceAttributesReq {
        this['authorized_collect_log'] = authorizedCollectLog;
        return this;
    }
    public set authorizedCollectLog(authorizedCollectLog: boolean  | undefined) {
        this['authorized_collect_log'] = authorizedCollectLog;
    }
    public get authorizedCollectLog(): boolean | undefined {
        return this['authorized_collect_log'];
    }
    public withAuthorizedHdaUpgrade(authorizedHdaUpgrade: boolean): ModifyWorkspaceAttributesReq {
        this['authorized_hda_upgrade'] = authorizedHdaUpgrade;
        return this;
    }
    public set authorizedHdaUpgrade(authorizedHdaUpgrade: boolean  | undefined) {
        this['authorized_hda_upgrade'] = authorizedHdaUpgrade;
    }
    public get authorizedHdaUpgrade(): boolean | undefined {
        return this['authorized_hda_upgrade'];
    }
    public withApplySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam): ModifyWorkspaceAttributesReq {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
        return this;
    }
    public set applySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam  | undefined) {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
    }
    public get applySharedVpcDedicatedParam(): ApplySharedVpcDedicatedParam | undefined {
        return this['apply_shared_vpc_dedicated_param'];
    }
    public withApplyDedicatedStandbyNetworkParam(applyDedicatedStandbyNetworkParam: ApplyDedicatedStandbyNetworkParam): ModifyWorkspaceAttributesReq {
        this['apply_dedicated_standby_network_param'] = applyDedicatedStandbyNetworkParam;
        return this;
    }
    public set applyDedicatedStandbyNetworkParam(applyDedicatedStandbyNetworkParam: ApplyDedicatedStandbyNetworkParam  | undefined) {
        this['apply_dedicated_standby_network_param'] = applyDedicatedStandbyNetworkParam;
    }
    public get applyDedicatedStandbyNetworkParam(): ApplyDedicatedStandbyNetworkParam | undefined {
        return this['apply_dedicated_standby_network_param'];
    }
    public withIsAuthorizedInstallAgent(isAuthorizedInstallAgent: boolean): ModifyWorkspaceAttributesReq {
        this['is_authorized_install_agent'] = isAuthorizedInstallAgent;
        return this;
    }
    public set isAuthorizedInstallAgent(isAuthorizedInstallAgent: boolean  | undefined) {
        this['is_authorized_install_agent'] = isAuthorizedInstallAgent;
    }
    public get isAuthorizedInstallAgent(): boolean | undefined {
        return this['is_authorized_install_agent'];
    }
    public withEnableUserCreateSnapshot(enableUserCreateSnapshot: boolean): ModifyWorkspaceAttributesReq {
        this['enable_user_create_snapshot'] = enableUserCreateSnapshot;
        return this;
    }
    public set enableUserCreateSnapshot(enableUserCreateSnapshot: boolean  | undefined) {
        this['enable_user_create_snapshot'] = enableUserCreateSnapshot;
    }
    public get enableUserCreateSnapshot(): boolean | undefined {
        return this['enable_user_create_snapshot'];
    }
    public withIsSupportIpv6(isSupportIpv6: boolean): ModifyWorkspaceAttributesReq {
        this['is_support_ipv6'] = isSupportIpv6;
        return this;
    }
    public set isSupportIpv6(isSupportIpv6: boolean  | undefined) {
        this['is_support_ipv6'] = isSupportIpv6;
    }
    public get isSupportIpv6(): boolean | undefined {
        return this['is_support_ipv6'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyWorkspaceAttributesReqOperateTypeEnum {
    APPLYDEDICATEDSTANDBYNETWORK = 'applyDedicatedStandbyNetwork',
    CANCELDEDICATEDSTANDBYNETWORK = 'cancelDedicatedStandbyNetwork'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyWorkspaceAttributesReqAuthTypeEnum {
    KERBEROS = 'KERBEROS',
    KERBEROS_THIRD_SSO = 'KERBEROS_THIRD_SSO'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyWorkspaceAttributesReqAccessModeEnum {
    INTERNET = 'INTERNET',
    DEDICATED = 'DEDICATED',
    BOTH = 'BOTH'
}
