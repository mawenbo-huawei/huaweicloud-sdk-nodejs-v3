
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostGroupPermissionsResponse extends SdkResponse {
    public region?: string;
    private 'role_id'?: string;
    private 'devuc_role_id_list'?: Array<string>;
    public name?: string;
    private 'group_id'?: string;
    private 'can_view'?: boolean;
    private 'can_edit'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_add_host'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_copy'?: boolean;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'role_type'?: UpdateHostGroupPermissionsResponseRoleTypeEnum | string;
    public constructor() { 
        super();
    }
    public withRegion(region: string): UpdateHostGroupPermissionsResponse {
        this['region'] = region;
        return this;
    }
    public withRoleId(roleId: string): UpdateHostGroupPermissionsResponse {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withDevucRoleIdList(devucRoleIdList: Array<string>): UpdateHostGroupPermissionsResponse {
        this['devuc_role_id_list'] = devucRoleIdList;
        return this;
    }
    public set devucRoleIdList(devucRoleIdList: Array<string>  | undefined) {
        this['devuc_role_id_list'] = devucRoleIdList;
    }
    public get devucRoleIdList(): Array<string> | undefined {
        return this['devuc_role_id_list'];
    }
    public withName(name: string): UpdateHostGroupPermissionsResponse {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): UpdateHostGroupPermissionsResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCanView(canView: boolean): UpdateHostGroupPermissionsResponse {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanEdit(canEdit: boolean): UpdateHostGroupPermissionsResponse {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanDelete(canDelete: boolean): UpdateHostGroupPermissionsResponse {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanAddHost(canAddHost: boolean): UpdateHostGroupPermissionsResponse {
        this['can_add_host'] = canAddHost;
        return this;
    }
    public set canAddHost(canAddHost: boolean  | undefined) {
        this['can_add_host'] = canAddHost;
    }
    public get canAddHost(): boolean | undefined {
        return this['can_add_host'];
    }
    public withCanManage(canManage: boolean): UpdateHostGroupPermissionsResponse {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanCopy(canCopy: boolean): UpdateHostGroupPermissionsResponse {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
    public withCreateTime(createTime: Date): UpdateHostGroupPermissionsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): UpdateHostGroupPermissionsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withRoleType(roleType: UpdateHostGroupPermissionsResponseRoleTypeEnum | string): UpdateHostGroupPermissionsResponse {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: UpdateHostGroupPermissionsResponseRoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): UpdateHostGroupPermissionsResponseRoleTypeEnum | string | undefined {
        return this['role_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostGroupPermissionsResponseRoleTypeEnum {
    PROJECT_CUSTOMIZED = 'project-customized',
    TEMPLATE_PROJECT_CUSTOMIZED = 'template-project-customized',
    TEMPLATE_CUSTOMIZED_INST = 'template-customized-inst',
    CLUSTER_CREATOR = 'cluster-creator',
    PROJECT_ADMIN = 'project_admin'
}
