

export class ListAlarmDetailRequest {
    private 'time_zone': string | undefined;
    public offset?: string;
    public limit?: string;
    public constructor(timeZone?: any) { 
        this['time_zone'] = timeZone;
    }
    public withTimeZone(timeZone: string): ListAlarmDetailRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone() {
        return this['time_zone'];
    }
    public withOffset(offset: string): ListAlarmDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAlarmDetailRequest {
        this['limit'] = limit;
        return this;
    }
}