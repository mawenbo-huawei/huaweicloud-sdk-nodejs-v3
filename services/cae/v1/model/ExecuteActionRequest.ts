import { ExecuteActionRequestBody } from './ExecuteActionRequestBody';


export class ExecuteActionRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public body?: ExecuteActionRequestBody;
    public constructor(applicationId?: string, componentId?: string, xEnvironmentID?: string) { 
        this['application_id'] = applicationId;
        this['component_id'] = componentId;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withApplicationId(applicationId: string): ExecuteActionRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ExecuteActionRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ExecuteActionRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): ExecuteActionRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withBody(body: ExecuteActionRequestBody): ExecuteActionRequest {
        this['body'] = body;
        return this;
    }
}