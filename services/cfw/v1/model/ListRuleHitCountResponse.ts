import { RuleHitCountRecords } from './RuleHitCountRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleHitCountResponse extends SdkResponse {
    public data?: RuleHitCountRecords;
    public constructor() { 
        super();
    }
    public withData(data: RuleHitCountRecords): ListRuleHitCountResponse {
        this['data'] = data;
        return this;
    }
}