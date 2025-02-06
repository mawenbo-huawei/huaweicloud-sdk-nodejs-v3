import { DetachManagedPolicyFromPermissionSetReqBody } from './DetachManagedPolicyFromPermissionSetReqBody';


export class DetachManagedPolicyFromPermissionSetRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'permission_set_id'?: string;
    public body?: DetachManagedPolicyFromPermissionSetReqBody;
    public constructor(instanceId?: string, permissionSetId?: string) { 
        this['instance_id'] = instanceId;
        this['permission_set_id'] = permissionSetId;
    }
    public withXSecurityToken(xSecurityToken: string): DetachManagedPolicyFromPermissionSetRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): DetachManagedPolicyFromPermissionSetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPermissionSetId(permissionSetId: string): DetachManagedPolicyFromPermissionSetRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withBody(body: DetachManagedPolicyFromPermissionSetReqBody): DetachManagedPolicyFromPermissionSetRequest {
        this['body'] = body;
        return this;
    }
}