

export class ListDomainProjectsRequest {
    private 'domain_name': string | undefined;
    public constructor(domainName?: any) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): ListDomainProjectsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
}