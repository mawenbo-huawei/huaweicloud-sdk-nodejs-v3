import { AssociateRouterRequestBody } from './AssociateRouterRequestBody';


export class AssociateRouterRequest {
    private 'zone_id': string | undefined;
    public body?: AssociateRouterRequestBody;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): AssociateRouterRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: AssociateRouterRequestBody): AssociateRouterRequest {
        this['body'] = body;
        return this;
    }
}