import { AuthInfo } from './AuthInfo';
import { TagV5DTO } from './TagV5DTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDeviceResponse extends SdkResponse {
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'device_id'?: string | undefined;
    private 'node_id'?: string | undefined;
    private 'gateway_id'?: string | undefined;
    private 'device_name'?: string | undefined;
    private 'node_type'?: string | undefined;
    public description?: string;
    private 'fw_version'?: string | undefined;
    private 'sw_version'?: string | undefined;
    private 'device_sdk_version'?: string | undefined;
    private 'auth_info'?: AuthInfo | undefined;
    private 'product_id'?: string | undefined;
    private 'product_name'?: string | undefined;
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'connection_status_update_time'?: string | undefined;
    private 'active_time'?: string | undefined;
    public tags?: Array<TagV5DTO>;
    private 'extension_info'?: object | undefined;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateDeviceResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): UpdateDeviceResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withDeviceId(deviceId: string): UpdateDeviceResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): UpdateDeviceResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withGatewayId(gatewayId: string): UpdateDeviceResponse {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId() {
        return this['gateway_id'];
    }
    public withDeviceName(deviceName: string): UpdateDeviceResponse {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withNodeType(nodeType: string): UpdateDeviceResponse {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withDescription(description: string): UpdateDeviceResponse {
        this['description'] = description;
        return this;
    }
    public withFwVersion(fwVersion: string): UpdateDeviceResponse {
        this['fw_version'] = fwVersion;
        return this;
    }
    public set fwVersion(fwVersion: string | undefined) {
        this['fw_version'] = fwVersion;
    }
    public get fwVersion() {
        return this['fw_version'];
    }
    public withSwVersion(swVersion: string): UpdateDeviceResponse {
        this['sw_version'] = swVersion;
        return this;
    }
    public set swVersion(swVersion: string | undefined) {
        this['sw_version'] = swVersion;
    }
    public get swVersion() {
        return this['sw_version'];
    }
    public withDeviceSdkVersion(deviceSdkVersion: string): UpdateDeviceResponse {
        this['device_sdk_version'] = deviceSdkVersion;
        return this;
    }
    public set deviceSdkVersion(deviceSdkVersion: string | undefined) {
        this['device_sdk_version'] = deviceSdkVersion;
    }
    public get deviceSdkVersion() {
        return this['device_sdk_version'];
    }
    public withAuthInfo(authInfo: AuthInfo): UpdateDeviceResponse {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: AuthInfo | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo() {
        return this['auth_info'];
    }
    public withProductId(productId: string): UpdateDeviceResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withProductName(productName: string): UpdateDeviceResponse {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string | undefined) {
        this['product_name'] = productName;
    }
    public get productName() {
        return this['product_name'];
    }
    public withStatus(status: string): UpdateDeviceResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): UpdateDeviceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withConnectionStatusUpdateTime(connectionStatusUpdateTime: string): UpdateDeviceResponse {
        this['connection_status_update_time'] = connectionStatusUpdateTime;
        return this;
    }
    public set connectionStatusUpdateTime(connectionStatusUpdateTime: string | undefined) {
        this['connection_status_update_time'] = connectionStatusUpdateTime;
    }
    public get connectionStatusUpdateTime() {
        return this['connection_status_update_time'];
    }
    public withActiveTime(activeTime: string): UpdateDeviceResponse {
        this['active_time'] = activeTime;
        return this;
    }
    public set activeTime(activeTime: string | undefined) {
        this['active_time'] = activeTime;
    }
    public get activeTime() {
        return this['active_time'];
    }
    public withTags(tags: Array<TagV5DTO>): UpdateDeviceResponse {
        this['tags'] = tags;
        return this;
    }
    public withExtensionInfo(extensionInfo: object): UpdateDeviceResponse {
        this['extension_info'] = extensionInfo;
        return this;
    }
    public set extensionInfo(extensionInfo: object | undefined) {
        this['extension_info'] = extensionInfo;
    }
    public get extensionInfo() {
        return this['extension_info'];
    }
}