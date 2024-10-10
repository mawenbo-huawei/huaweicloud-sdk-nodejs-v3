

export class ShowWafQpsRequest {
    public recent?: string;
    public domains?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'overseas_type'?: number;
    public constructor() { 
    }
    public withRecent(recent: string): ShowWafQpsRequest {
        this['recent'] = recent;
        return this;
    }
    public withDomains(domains: string): ShowWafQpsRequest {
        this['domains'] = domains;
        return this;
    }
    public withStartTime(startTime: string): ShowWafQpsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowWafQpsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOverseasType(overseasType: number): ShowWafQpsRequest {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
}