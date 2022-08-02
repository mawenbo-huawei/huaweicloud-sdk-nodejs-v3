import { UpdateFunctionMaxInstanceConfigRequestBody } from './UpdateFunctionMaxInstanceConfigRequestBody';


export class UpdateFunctionMaxInstanceConfigRequest {
    private 'function_urn': string | undefined;
    public body?: UpdateFunctionMaxInstanceConfigRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionMaxInstanceConfigRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionMaxInstanceConfigRequestBody): UpdateFunctionMaxInstanceConfigRequest {
        this['body'] = body;
        return this;
    }
}