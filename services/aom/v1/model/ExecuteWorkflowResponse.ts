
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteWorkflowResponse extends SdkResponse {
    private 'execution_id'?: string;
    public constructor() { 
        super();
    }
    public withExecutionId(executionId: string): ExecuteWorkflowResponse {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
}