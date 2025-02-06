import { ResourceDetachManagedPolicyFromPermissionSetReqBody } from './ResourceDetachManagedPolicyFromPermissionSetReqBody';


export class DetachManagedRoleFromPermissionSetRequest {
    private 'instance_id'?: string;
    private 'permission_set_id'?: string;
    private 'X-Security-Token'?: string;
    public body?: ResourceDetachManagedPolicyFromPermissionSetReqBody;
    public constructor(instanceId?: string, permissionSetId?: string) { 
        this['instance_id'] = instanceId;
        this['permission_set_id'] = permissionSetId;
    }
    public withInstanceId(instanceId: string): DetachManagedRoleFromPermissionSetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPermissionSetId(permissionSetId: string): DetachManagedRoleFromPermissionSetRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withXSecurityToken(xSecurityToken: string): DetachManagedRoleFromPermissionSetRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: ResourceDetachManagedPolicyFromPermissionSetReqBody): DetachManagedRoleFromPermissionSetRequest {
        this['body'] = body;
        return this;
    }
}