

export class ListDomainBandwidthPeakRequest {
    private 'play_domains'?: Array<string> | undefined;
    public app?: string;
    public stream?: string;
    public region?: Array<string>;
    public isp?: Array<string>;
    public protocol?: ListDomainBandwidthPeakRequestProtocolEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'service_type'?: ListDomainBandwidthPeakRequestServiceTypeEnum | undefined;
    public constructor() { 
    }
    public withPlayDomains(playDomains: Array<string>): ListDomainBandwidthPeakRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string> | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains() {
        return this['play_domains'];
    }
    public withApp(app: string): ListDomainBandwidthPeakRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListDomainBandwidthPeakRequest {
        this['stream'] = stream;
        return this;
    }
    public withRegion(region: Array<string>): ListDomainBandwidthPeakRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ListDomainBandwidthPeakRequest {
        this['isp'] = isp;
        return this;
    }
    public withProtocol(protocol: ListDomainBandwidthPeakRequestProtocolEnum): ListDomainBandwidthPeakRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withStartTime(startTime: string): ListDomainBandwidthPeakRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDomainBandwidthPeakRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withServiceType(serviceType: ListDomainBandwidthPeakRequestServiceTypeEnum): ListDomainBandwidthPeakRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListDomainBandwidthPeakRequestServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDomainBandwidthPeakRequestProtocolEnum {
    FLV = 'flv',
    HLS = 'hls'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDomainBandwidthPeakRequestServiceTypeEnum {
    LIVE = 'Live',
    LLL = 'LLL',
    ALL = 'ALL'
}
