

export class DomainRegion {
    private 'domain_name'?: string | undefined;
    private 'region_isp_details'?: Array<{ [key: string]: object; }> | undefined;
    public constructor() { 
    }
    public withDomainName(domainName: string): DomainRegion {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withRegionIspDetails(regionIspDetails: Array<{ [key: string]: object; }>): DomainRegion {
        this['region_isp_details'] = regionIspDetails;
        return this;
    }
    public set regionIspDetails(regionIspDetails: Array<{ [key: string]: object; }> | undefined) {
        this['region_isp_details'] = regionIspDetails;
    }
    public get regionIspDetails() {
        return this['region_isp_details'];
    }
}