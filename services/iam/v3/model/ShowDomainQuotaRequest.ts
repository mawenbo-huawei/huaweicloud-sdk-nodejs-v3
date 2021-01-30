

export class ShowDomainQuotaRequest {
    private 'domain_id': string | undefined;
    public type?: ShowDomainQuotaRequestTypeEnum;
    public constructor(domainId: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowDomainQuotaRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withType(type: ShowDomainQuotaRequestTypeEnum): ShowDomainQuotaRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainQuotaRequestTypeEnum {
    USER = 'user',
    GROUP = 'group',
    IDP = 'idp',
    AGENCY = 'agency',
    POLICY = 'policy'
}
