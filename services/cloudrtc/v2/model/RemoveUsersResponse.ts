
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveUsersResponse extends SdkResponse {
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withXRequestId(xRequestId: string): RemoveUsersResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}