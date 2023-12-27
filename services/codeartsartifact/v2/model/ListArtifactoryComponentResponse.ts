
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListArtifactoryComponentResponse extends SdkResponse {
    public status?: string;
    private 'trace_id'?: string;
    public result?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListArtifactoryComponentResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListArtifactoryComponentResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: object): ListArtifactoryComponentResponse {
        this['result'] = result;
        return this;
    }
}