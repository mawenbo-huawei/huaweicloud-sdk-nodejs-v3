import { VinRequestBody } from './VinRequestBody';


export class RecognizeVinRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: VinRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeVinRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: VinRequestBody): RecognizeVinRequest {
        this['body'] = body;
        return this;
    }
}