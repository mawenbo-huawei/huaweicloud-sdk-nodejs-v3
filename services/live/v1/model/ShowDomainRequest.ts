

export class ShowDomainRequest {
    public domain?: string;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withDomain(domain: string): ShowDomainRequest {
        this['domain'] = domain;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainRequest {
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