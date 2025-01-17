import { CreateAccessConfigRequestBody } from './CreateAccessConfigRequestBody';


export class CreateAccessConfigRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateAccessConfigRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAccessConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateAccessConfigRequestBody): CreateAccessConfigRequest {
        this['body'] = body;
        return this;
    }
}