

export class KeystoneListProjectPermissionsForGroupRequest {
    private 'group_id': string | undefined;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): KeystoneListProjectPermissionsForGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
}