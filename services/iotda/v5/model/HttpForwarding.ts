

export class HttpForwarding {
    public url: string;
    private 'cert_id'?: string | undefined;
    private 'cn_name'?: string | undefined;
    private 'sni_enable'?: boolean | undefined;
    public constructor(url?: any) { 
        this['url'] = url;
    }
    public withUrl(url: string): HttpForwarding {
        this['url'] = url;
        return this;
    }
    public withCertId(certId: string): HttpForwarding {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string | undefined) {
        this['cert_id'] = certId;
    }
    public get certId() {
        return this['cert_id'];
    }
    public withCnName(cnName: string): HttpForwarding {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName() {
        return this['cn_name'];
    }
    public withSniEnable(sniEnable: boolean): HttpForwarding {
        this['sni_enable'] = sniEnable;
        return this;
    }
    public set sniEnable(sniEnable: boolean | undefined) {
        this['sni_enable'] = sniEnable;
    }
    public get sniEnable() {
        return this['sni_enable'];
    }
}