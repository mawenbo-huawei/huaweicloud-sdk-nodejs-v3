

export class EwProtectResourceInfo {
    private 'protected_resource_type': number | undefined;
    private 'protected_resource_name': string | undefined;
    private 'protected_resource_id': string | undefined;
    private 'protected_resource_nat_name'?: string | undefined;
    private 'protected_resource_nat_id'?: string | undefined;
    private 'protected_resource_project_id'?: string | undefined;
    public constructor(protectedResourceType?: any, protectedResourceName?: any, protectedResourceId?: any) { 
        this['protected_resource_type'] = protectedResourceType;
        this['protected_resource_name'] = protectedResourceName;
        this['protected_resource_id'] = protectedResourceId;
    }
    public withProtectedResourceType(protectedResourceType: number): EwProtectResourceInfo {
        this['protected_resource_type'] = protectedResourceType;
        return this;
    }
    public set protectedResourceType(protectedResourceType: number | undefined) {
        this['protected_resource_type'] = protectedResourceType;
    }
    public get protectedResourceType() {
        return this['protected_resource_type'];
    }
    public withProtectedResourceName(protectedResourceName: string): EwProtectResourceInfo {
        this['protected_resource_name'] = protectedResourceName;
        return this;
    }
    public set protectedResourceName(protectedResourceName: string | undefined) {
        this['protected_resource_name'] = protectedResourceName;
    }
    public get protectedResourceName() {
        return this['protected_resource_name'];
    }
    public withProtectedResourceId(protectedResourceId: string): EwProtectResourceInfo {
        this['protected_resource_id'] = protectedResourceId;
        return this;
    }
    public set protectedResourceId(protectedResourceId: string | undefined) {
        this['protected_resource_id'] = protectedResourceId;
    }
    public get protectedResourceId() {
        return this['protected_resource_id'];
    }
    public withProtectedResourceNatName(protectedResourceNatName: string): EwProtectResourceInfo {
        this['protected_resource_nat_name'] = protectedResourceNatName;
        return this;
    }
    public set protectedResourceNatName(protectedResourceNatName: string | undefined) {
        this['protected_resource_nat_name'] = protectedResourceNatName;
    }
    public get protectedResourceNatName() {
        return this['protected_resource_nat_name'];
    }
    public withProtectedResourceNatId(protectedResourceNatId: string): EwProtectResourceInfo {
        this['protected_resource_nat_id'] = protectedResourceNatId;
        return this;
    }
    public set protectedResourceNatId(protectedResourceNatId: string | undefined) {
        this['protected_resource_nat_id'] = protectedResourceNatId;
    }
    public get protectedResourceNatId() {
        return this['protected_resource_nat_id'];
    }
    public withProtectedResourceProjectId(protectedResourceProjectId: string): EwProtectResourceInfo {
        this['protected_resource_project_id'] = protectedResourceProjectId;
        return this;
    }
    public set protectedResourceProjectId(protectedResourceProjectId: string | undefined) {
        this['protected_resource_project_id'] = protectedResourceProjectId;
    }
    public get protectedResourceProjectId() {
        return this['protected_resource_project_id'];
    }
}