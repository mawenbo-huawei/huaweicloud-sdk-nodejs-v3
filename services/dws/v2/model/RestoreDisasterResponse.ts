import { DisasterRecoveryId } from './DisasterRecoveryId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreDisasterResponse extends SdkResponse {
    private 'disaster_recovery'?: DisasterRecoveryId | undefined;
    public constructor() { 
        super();
    }
    public withDisasterRecovery(disasterRecovery: DisasterRecoveryId): RestoreDisasterResponse {
        this['disaster_recovery'] = disasterRecovery;
        return this;
    }
    public set disasterRecovery(disasterRecovery: DisasterRecoveryId | undefined) {
        this['disaster_recovery'] = disasterRecovery;
    }
    public get disasterRecovery() {
        return this['disaster_recovery'];
    }
}