

export class AsyncDeviceCommand {
    private 'device_id'?: string | undefined;
    private 'command_id'?: string | undefined;
    private 'service_id'?: string | undefined;
    private 'command_name'?: string | undefined;
    public paras?: object;
    private 'expire_time'?: number | undefined;
    public status?: string;
    public result?: object;
    private 'created_time'?: string | undefined;
    private 'sent_time'?: string | undefined;
    private 'delivered_time'?: string | undefined;
    private 'send_strategy'?: string | undefined;
    private 'response_time'?: string | undefined;
    public constructor() { 
    }
    public withDeviceId(deviceId: string): AsyncDeviceCommand {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withCommandId(commandId: string): AsyncDeviceCommand {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId() {
        return this['command_id'];
    }
    public withServiceId(serviceId: string): AsyncDeviceCommand {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
    public withCommandName(commandName: string): AsyncDeviceCommand {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
        return this['command_name'];
    }
    public withParas(paras: object): AsyncDeviceCommand {
        this['paras'] = paras;
        return this;
    }
    public withExpireTime(expireTime: number): AsyncDeviceCommand {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime() {
        return this['expire_time'];
    }
    public withStatus(status: string): AsyncDeviceCommand {
        this['status'] = status;
        return this;
    }
    public withResult(result: object): AsyncDeviceCommand {
        this['result'] = result;
        return this;
    }
    public withCreatedTime(createdTime: string): AsyncDeviceCommand {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withSentTime(sentTime: string): AsyncDeviceCommand {
        this['sent_time'] = sentTime;
        return this;
    }
    public set sentTime(sentTime: string | undefined) {
        this['sent_time'] = sentTime;
    }
    public get sentTime() {
        return this['sent_time'];
    }
    public withDeliveredTime(deliveredTime: string): AsyncDeviceCommand {
        this['delivered_time'] = deliveredTime;
        return this;
    }
    public set deliveredTime(deliveredTime: string | undefined) {
        this['delivered_time'] = deliveredTime;
    }
    public get deliveredTime() {
        return this['delivered_time'];
    }
    public withSendStrategy(sendStrategy: string): AsyncDeviceCommand {
        this['send_strategy'] = sendStrategy;
        return this;
    }
    public set sendStrategy(sendStrategy: string | undefined) {
        this['send_strategy'] = sendStrategy;
    }
    public get sendStrategy() {
        return this['send_strategy'];
    }
    public withResponseTime(responseTime: string): AsyncDeviceCommand {
        this['response_time'] = responseTime;
        return this;
    }
    public set responseTime(responseTime: string | undefined) {
        this['response_time'] = responseTime;
    }
    public get responseTime() {
        return this['response_time'];
    }
}