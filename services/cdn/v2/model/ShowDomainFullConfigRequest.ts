

export class ShowDomainFullConfigRequest {
    private 'domain_name': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'show_special_configs'?: string | undefined;
    public constructor(domainName?: any) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): ShowDomainFullConfigRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainFullConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withShowSpecialConfigs(showSpecialConfigs: string): ShowDomainFullConfigRequest {
        this['show_special_configs'] = showSpecialConfigs;
        return this;
    }
    public set showSpecialConfigs(showSpecialConfigs: string | undefined) {
        this['show_special_configs'] = showSpecialConfigs;
    }
    public get showSpecialConfigs() {
        return this['show_special_configs'];
    }
}