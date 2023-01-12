import { IvsExtentionByIdCardImageRequestBody } from './IvsExtentionByIdCardImageRequestBody';


export class DetectExtentionByIdCardImageRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: IvsExtentionByIdCardImageRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectExtentionByIdCardImageRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IvsExtentionByIdCardImageRequestBody): DetectExtentionByIdCardImageRequest {
        this['body'] = body;
        return this;
    }
}