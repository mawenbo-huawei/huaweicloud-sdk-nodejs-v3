

export class RouterWithStatus {
    public status?: string;
    private 'router_id'?: string | undefined;
    private 'router_region'?: string | undefined;
    public constructor() { 
    }
    public withStatus(status: string): RouterWithStatus {
        this['status'] = status;
        return this;
    }
    public withRouterId(routerId: string): RouterWithStatus {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withRouterRegion(routerRegion: string): RouterWithStatus {
        this['router_region'] = routerRegion;
        return this;
    }
    public set routerRegion(routerRegion: string | undefined) {
        this['router_region'] = routerRegion;
    }
    public get routerRegion() {
        return this['router_region'];
    }
}