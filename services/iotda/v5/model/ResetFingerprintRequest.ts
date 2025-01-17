import { ResetFingerprint } from './ResetFingerprint';


export class ResetFingerprintRequest {
    private 'Instance-Id'?: string | undefined;
    private 'device_id': string | undefined;
    public body?: ResetFingerprint;
    public constructor(deviceId?: any) { 
        this['device_id'] = deviceId;
    }
    public withInstanceId(instanceId: string): ResetFingerprintRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withDeviceId(deviceId: string): ResetFingerprintRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withBody(body: ResetFingerprint): ResetFingerprintRequest {
        this['body'] = body;
        return this;
    }
}