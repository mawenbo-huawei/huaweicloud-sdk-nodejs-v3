import { ModifyTemplateGroupCollection } from './ModifyTemplateGroupCollection';


export class UpdateTemplateGroupCollectionRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ModifyTemplateGroupCollection;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateTemplateGroupCollectionRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateTemplateGroupCollectionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ModifyTemplateGroupCollection): UpdateTemplateGroupCollectionRequest {
        this['body'] = body;
        return this;
    }
}