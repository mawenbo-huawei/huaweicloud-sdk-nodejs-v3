import { DeleteResultData } from './DeleteResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignDerivativeIndexResponse extends SdkResponse {
    public data?: DeleteResultData;
    public constructor() { 
        super();
    }
    public withData(data: DeleteResultData): DeleteDesignDerivativeIndexResponse {
        this['data'] = data;
        return this;
    }
}