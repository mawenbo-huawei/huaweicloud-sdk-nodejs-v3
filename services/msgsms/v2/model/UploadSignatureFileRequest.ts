import { UploadSignatureFileRequestBody } from './UploadSignatureFileRequestBody';


export class UploadSignatureFileRequest {
    private 'Content-Type': string | undefined;
    private 'file_desc'?: string | undefined;
    public body?: UploadSignatureFileRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UploadSignatureFileRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withFileDesc(fileDesc: string): UploadSignatureFileRequest {
        this['file_desc'] = fileDesc;
        return this;
    }
    public set fileDesc(fileDesc: string | undefined) {
        this['file_desc'] = fileDesc;
    }
    public get fileDesc() {
        return this['file_desc'];
    }
    public withBody(body: UploadSignatureFileRequestBody): UploadSignatureFileRequest {
        this['body'] = body;
        return this;
    }
}