

export class ShowResourceTagRequest {
    private 'resource_id': string | undefined;
    private 'resource_type': ShowResourceTagRequestResourceTypeEnum | undefined;
    public constructor(resourceId?: any, resourceType?: any) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): ShowResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: ShowResourceTagRequestResourceTypeEnum): ShowResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowResourceTagRequestResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceTagRequestResourceTypeEnum {
    INSTANCE = 'instance',
    ROUTE_TABLE = 'route-table',
    VPC_ATTACHMENT = 'vpc-attachment',
    DGW_ATTACHMENT = 'dgw-attachment',
    VGW_ATTACHMENT = 'vgw-attachment',
    PEERING_ATTACHMENT = 'peering-attachment',
    VPN_ATTACHMENT = 'vpn-attachment',
    CAN_ATTACHMENT = 'can-attachment',
    GDGW_ATTACHMENT = 'gdgw-attachment',
    ATTACHMENTS = 'attachments'
}
