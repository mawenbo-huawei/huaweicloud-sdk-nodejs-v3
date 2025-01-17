

export class ListAreaDetailRequest {
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'play_domains'?: Array<string> | undefined;
    public app?: string;
    public stream?: string;
    public interval?: ListAreaDetailRequestIntervalEnum;
    public isp?: Array<string>;
    public area: Array<string>;
    public metric: string;
    public protocol?: string;
    public constructor(startTime?: any, endTime?: any, area?: any, metric?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['area'] = area;
        this['metric'] = metric;
    }
    public withStartTime(startTime: string): ListAreaDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAreaDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withPlayDomains(playDomains: Array<string>): ListAreaDetailRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string> | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains() {
        return this['play_domains'];
    }
    public withApp(app: string): ListAreaDetailRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListAreaDetailRequest {
        this['stream'] = stream;
        return this;
    }
    public withInterval(interval: ListAreaDetailRequestIntervalEnum): ListAreaDetailRequest {
        this['interval'] = interval;
        return this;
    }
    public withIsp(isp: Array<string>): ListAreaDetailRequest {
        this['isp'] = isp;
        return this;
    }
    public withArea(area: Array<string>): ListAreaDetailRequest {
        this['area'] = area;
        return this;
    }
    public withMetric(metric: string): ListAreaDetailRequest {
        this['metric'] = metric;
        return this;
    }
    public withProtocol(protocol: string): ListAreaDetailRequest {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAreaDetailRequestIntervalEnum {
    NUMBER_300 = 300,
    NUMBER_3600 = 3600,
    NUMBER_86400 = 86400
}
