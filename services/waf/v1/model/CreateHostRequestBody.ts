import { CloudWafServer } from './CloudWafServer';


export class CreateHostRequestBody {
    public hostname: string;
    public policyid?: string;
    public server: Array<CloudWafServer>;
    public certificateid?: string;
    public certificatename?: string;
    private 'web_tag'?: string | undefined;
    private 'exclusive_ip'?: boolean | undefined;
    private 'paid_type'?: string | undefined;
    public proxy: boolean;
    private 'lb_algorithm'?: CreateHostRequestBodyLbAlgorithmEnum | undefined;
    public description?: string;
    private 'forward_header_map'?: { [key: string]: string; } | undefined;
    public constructor(hostname?: any, server?: any, proxy?: any) { 
        this['hostname'] = hostname;
        this['server'] = server;
        this['proxy'] = proxy;
    }
    public withHostname(hostname: string): CreateHostRequestBody {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyid(policyid: string): CreateHostRequestBody {
        this['policyid'] = policyid;
        return this;
    }
    public withServer(server: Array<CloudWafServer>): CreateHostRequestBody {
        this['server'] = server;
        return this;
    }
    public withCertificateid(certificateid: string): CreateHostRequestBody {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): CreateHostRequestBody {
        this['certificatename'] = certificatename;
        return this;
    }
    public withWebTag(webTag: string): CreateHostRequestBody {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag() {
        return this['web_tag'];
    }
    public withExclusiveIp(exclusiveIp: boolean): CreateHostRequestBody {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp() {
        return this['exclusive_ip'];
    }
    public withPaidType(paidType: string): CreateHostRequestBody {
        this['paid_type'] = paidType;
        return this;
    }
    public set paidType(paidType: string | undefined) {
        this['paid_type'] = paidType;
    }
    public get paidType() {
        return this['paid_type'];
    }
    public withProxy(proxy: boolean): CreateHostRequestBody {
        this['proxy'] = proxy;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: CreateHostRequestBodyLbAlgorithmEnum): CreateHostRequestBody {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: CreateHostRequestBodyLbAlgorithmEnum | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withDescription(description: string): CreateHostRequestBody {
        this['description'] = description;
        return this;
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): CreateHostRequestBody {
        this['forward_header_map'] = forwardHeaderMap;
        return this;
    }
    public set forwardHeaderMap(forwardHeaderMap: { [key: string]: string; } | undefined) {
        this['forward_header_map'] = forwardHeaderMap;
    }
    public get forwardHeaderMap() {
        return this['forward_header_map'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHostRequestBodyLbAlgorithmEnum {
    IP_HASH = 'ip_hash',
    ROUND_ROBIN = 'round_robin',
    SESSION_HASH = 'session_hash'
}
