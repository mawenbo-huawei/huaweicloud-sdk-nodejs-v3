import { RestorePtrReq } from './RestorePtrReq';


export class RestorePtrRecordRequest {
    public region: string;
    private 'floatingip_id': string | undefined;
    public body?: RestorePtrReq;
    public constructor(region?: any, floatingipId?: any) { 
        this['region'] = region;
        this['floatingip_id'] = floatingipId;
    }
    public withRegion(region: string): RestorePtrRecordRequest {
        this['region'] = region;
        return this;
    }
    public withFloatingipId(floatingipId: string): RestorePtrRecordRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId() {
        return this['floatingip_id'];
    }
    public withBody(body: RestorePtrReq): RestorePtrRecordRequest {
        this['body'] = body;
        return this;
    }
}