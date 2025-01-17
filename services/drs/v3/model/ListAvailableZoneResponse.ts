import { AzInfoResp } from './AzInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableZoneResponse extends SdkResponse {
    private 'az_infos'?: Array<AzInfoResp> | undefined;
    public constructor() { 
        super();
    }
    public withAzInfos(azInfos: Array<AzInfoResp>): ListAvailableZoneResponse {
        this['az_infos'] = azInfos;
        return this;
    }
    public set azInfos(azInfos: Array<AzInfoResp> | undefined) {
        this['az_infos'] = azInfos;
    }
    public get azInfos() {
        return this['az_infos'];
    }
}