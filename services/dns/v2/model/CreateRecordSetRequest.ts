import { CreateRecordSetRequestBody } from './CreateRecordSetRequestBody';


export class CreateRecordSetRequest {
    private 'zone_id': string | undefined;
    public body?: CreateRecordSetRequestBody;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): CreateRecordSetRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: CreateRecordSetRequestBody): CreateRecordSetRequest {
        this['body'] = body;
        return this;
    }
}