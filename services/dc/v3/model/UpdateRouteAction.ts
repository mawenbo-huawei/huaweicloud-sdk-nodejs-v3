

export class UpdateRouteAction {
    public destination?: string;
    public nexthop?: string;
    public description?: string;
    public constructor(destination?: string, nexthop?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withDestination(destination: string): UpdateRouteAction {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): UpdateRouteAction {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): UpdateRouteAction {
        this['description'] = description;
        return this;
    }
}