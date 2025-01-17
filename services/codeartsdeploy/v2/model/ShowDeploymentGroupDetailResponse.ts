import { PermissionGroupDetail } from './PermissionGroupDetail';
import { UserInfo } from './UserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeploymentGroupDetailResponse extends SdkResponse {
    private 'group_id'?: string | undefined;
    private 'created_time'?: string | undefined;
    private 'updated_time'?: string | undefined;
    private 'host_count'?: number | undefined;
    private 'project_name'?: string | undefined;
    public name?: string;
    private 'region_name'?: string | undefined;
    private 'project_id'?: string | undefined;
    public os?: string;
    private 'auto_connection_test_switch'?: number | undefined;
    private 'slave_cluster_id'?: string | undefined;
    private 'nick_name'?: string | undefined;
    private 'created_by'?: UserInfo | undefined;
    private 'updated_by'?: UserInfo | undefined;
    public description?: string;
    public permission?: PermissionGroupDetail;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): ShowDeploymentGroupDetailResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withCreatedTime(createdTime: string): ShowDeploymentGroupDetailResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowDeploymentGroupDetailResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime() {
        return this['updated_time'];
    }
    public withHostCount(hostCount: number): ShowDeploymentGroupDetailResponse {
        this['host_count'] = hostCount;
        return this;
    }
    public set hostCount(hostCount: number | undefined) {
        this['host_count'] = hostCount;
    }
    public get hostCount() {
        return this['host_count'];
    }
    public withProjectName(projectName: string): ShowDeploymentGroupDetailResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withName(name: string): ShowDeploymentGroupDetailResponse {
        this['name'] = name;
        return this;
    }
    public withRegionName(regionName: string): ShowDeploymentGroupDetailResponse {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ShowDeploymentGroupDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withOs(os: string): ShowDeploymentGroupDetailResponse {
        this['os'] = os;
        return this;
    }
    public withAutoConnectionTestSwitch(autoConnectionTestSwitch: number): ShowDeploymentGroupDetailResponse {
        this['auto_connection_test_switch'] = autoConnectionTestSwitch;
        return this;
    }
    public set autoConnectionTestSwitch(autoConnectionTestSwitch: number | undefined) {
        this['auto_connection_test_switch'] = autoConnectionTestSwitch;
    }
    public get autoConnectionTestSwitch() {
        return this['auto_connection_test_switch'];
    }
    public withSlaveClusterId(slaveClusterId: string): ShowDeploymentGroupDetailResponse {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId() {
        return this['slave_cluster_id'];
    }
    public withNickName(nickName: string): ShowDeploymentGroupDetailResponse {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName() {
        return this['nick_name'];
    }
    public withCreatedBy(createdBy: UserInfo): ShowDeploymentGroupDetailResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserInfo | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
    public withUpdatedBy(updatedBy: UserInfo): ShowDeploymentGroupDetailResponse {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: UserInfo | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy() {
        return this['updated_by'];
    }
    public withDescription(description: string): ShowDeploymentGroupDetailResponse {
        this['description'] = description;
        return this;
    }
    public withPermission(permission: PermissionGroupDetail): ShowDeploymentGroupDetailResponse {
        this['permission'] = permission;
        return this;
    }
}