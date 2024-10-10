

export class UpgradeInstanceData {
    private 'basic_bandwidth'?: string;
    private 'elastic_bandwidth'?: string;
    private 'service_bandwidth'?: number;
    private 'port_num'?: number;
    private 'bind_domain_num'?: number;
    public constructor() { 
    }
    public withBasicBandwidth(basicBandwidth: string): UpgradeInstanceData {
        this['basic_bandwidth'] = basicBandwidth;
        return this;
    }
    public set basicBandwidth(basicBandwidth: string  | undefined) {
        this['basic_bandwidth'] = basicBandwidth;
    }
    public get basicBandwidth(): string | undefined {
        return this['basic_bandwidth'];
    }
    public withElasticBandwidth(elasticBandwidth: string): UpgradeInstanceData {
        this['elastic_bandwidth'] = elasticBandwidth;
        return this;
    }
    public set elasticBandwidth(elasticBandwidth: string  | undefined) {
        this['elastic_bandwidth'] = elasticBandwidth;
    }
    public get elasticBandwidth(): string | undefined {
        return this['elastic_bandwidth'];
    }
    public withServiceBandwidth(serviceBandwidth: number): UpgradeInstanceData {
        this['service_bandwidth'] = serviceBandwidth;
        return this;
    }
    public set serviceBandwidth(serviceBandwidth: number  | undefined) {
        this['service_bandwidth'] = serviceBandwidth;
    }
    public get serviceBandwidth(): number | undefined {
        return this['service_bandwidth'];
    }
    public withPortNum(portNum: number): UpgradeInstanceData {
        this['port_num'] = portNum;
        return this;
    }
    public set portNum(portNum: number  | undefined) {
        this['port_num'] = portNum;
    }
    public get portNum(): number | undefined {
        return this['port_num'];
    }
    public withBindDomainNum(bindDomainNum: number): UpgradeInstanceData {
        this['bind_domain_num'] = bindDomainNum;
        return this;
    }
    public set bindDomainNum(bindDomainNum: number  | undefined) {
        this['bind_domain_num'] = bindDomainNum;
    }
    public get bindDomainNum(): number | undefined {
        return this['bind_domain_num'];
    }
}