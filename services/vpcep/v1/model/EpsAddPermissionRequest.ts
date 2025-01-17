

export class EpsAddPermissionRequest {
    public permission: string;
    public description: string;
    public constructor(permission?: any, description?: any) { 
        this['permission'] = permission;
        this['description'] = description;
    }
    public withPermission(permission: string): EpsAddPermissionRequest {
        this['permission'] = permission;
        return this;
    }
    public withDescription(description: string): EpsAddPermissionRequest {
        this['description'] = description;
        return this;
    }
}