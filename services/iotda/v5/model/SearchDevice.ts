

export class SearchDevice {
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'device_id'?: string | undefined;
    private 'node_id'?: string | undefined;
    private 'gateway_id'?: string | undefined;
    private 'device_name'?: string | undefined;
    private 'node_type'?: string | undefined;
    private 'fw_version'?: string | undefined;
    private 'sw_version'?: string | undefined;
    private 'device_sdk_version'?: string | undefined;
    private 'product_id'?: string | undefined;
    private 'product_name'?: string | undefined;
    public groups?: object;
    public status?: string;
    public tags?: object;
    public marker?: string;
    public constructor() { 
    }
    public withAppId(appId: string): SearchDevice {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): SearchDevice {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withDeviceId(deviceId: string): SearchDevice {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withNodeId(nodeId: string): SearchDevice {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withGatewayId(gatewayId: string): SearchDevice {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId() {
        return this['gateway_id'];
    }
    public withDeviceName(deviceName: string): SearchDevice {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withNodeType(nodeType: string): SearchDevice {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withFwVersion(fwVersion: string): SearchDevice {
        this['fw_version'] = fwVersion;
        return this;
    }
    public set fwVersion(fwVersion: string | undefined) {
        this['fw_version'] = fwVersion;
    }
    public get fwVersion() {
        return this['fw_version'];
    }
    public withSwVersion(swVersion: string): SearchDevice {
        this['sw_version'] = swVersion;
        return this;
    }
    public set swVersion(swVersion: string | undefined) {
        this['sw_version'] = swVersion;
    }
    public get swVersion() {
        return this['sw_version'];
    }
    public withDeviceSdkVersion(deviceSdkVersion: string): SearchDevice {
        this['device_sdk_version'] = deviceSdkVersion;
        return this;
    }
    public set deviceSdkVersion(deviceSdkVersion: string | undefined) {
        this['device_sdk_version'] = deviceSdkVersion;
    }
    public get deviceSdkVersion() {
        return this['device_sdk_version'];
    }
    public withProductId(productId: string): SearchDevice {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withProductName(productName: string): SearchDevice {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string | undefined) {
        this['product_name'] = productName;
    }
    public get productName() {
        return this['product_name'];
    }
    public withGroups(groups: object): SearchDevice {
        this['groups'] = groups;
        return this;
    }
    public withStatus(status: string): SearchDevice {
        this['status'] = status;
        return this;
    }
    public withTags(tags: object): SearchDevice {
        this['tags'] = tags;
        return this;
    }
    public withMarker(marker: string): SearchDevice {
        this['marker'] = marker;
        return this;
    }
}