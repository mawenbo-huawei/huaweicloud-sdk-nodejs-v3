import { ModifyDomainConfigRequestBody } from './ModifyDomainConfigRequestBody';


export class UpdateDomainFullConfigRequest {
    private 'domain_name': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public body?: ModifyDomainConfigRequestBody;
    public constructor(domainName?: any) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): UpdateDomainFullConfigRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateDomainFullConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModifyDomainConfigRequestBody): UpdateDomainFullConfigRequest {
        this['body'] = body;
        return this;
    }
}