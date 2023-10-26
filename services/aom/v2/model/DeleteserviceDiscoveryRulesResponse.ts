
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteserviceDiscoveryRulesResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public responseStatus?: number;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): DeleteserviceDiscoveryRulesResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): DeleteserviceDiscoveryRulesResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
    public withResponseStatus(responseStatus: number): DeleteserviceDiscoveryRulesResponse {
        this['responseStatus'] = responseStatus;
        return this;
    }
}