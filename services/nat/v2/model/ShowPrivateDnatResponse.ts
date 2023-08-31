import { PrivateDnat } from './PrivateDnat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateDnatResponse extends SdkResponse {
    private 'dnat_rule'?: PrivateDnat;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withDnatRule(dnatRule: PrivateDnat): ShowPrivateDnatResponse {
        this['dnat_rule'] = dnatRule;
        return this;
    }
    public set dnatRule(dnatRule: PrivateDnat  | undefined) {
        this['dnat_rule'] = dnatRule;
    }
    public get dnatRule(): PrivateDnat | undefined {
        return this['dnat_rule'];
    }
    public withRequestId(requestId: string): ShowPrivateDnatResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}