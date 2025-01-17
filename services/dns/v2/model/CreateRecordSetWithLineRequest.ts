import { CreateRecordSetWithLineRequestBody } from './CreateRecordSetWithLineRequestBody';


export class CreateRecordSetWithLineRequest {
    private 'zone_id': string | undefined;
    public body?: CreateRecordSetWithLineRequestBody;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): CreateRecordSetWithLineRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: CreateRecordSetWithLineRequestBody): CreateRecordSetWithLineRequest {
        this['body'] = body;
        return this;
    }
}