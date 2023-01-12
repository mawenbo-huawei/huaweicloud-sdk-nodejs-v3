import { AddFacesByFileRequestBody } from './AddFacesByFileRequestBody';


export class AddFacesByFileRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    private 'face_set_name': string | undefined;
    public body?: AddFacesByFileRequestBody;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddFacesByFileRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withFaceSetName(faceSetName: string): AddFacesByFileRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: AddFacesByFileRequestBody): AddFacesByFileRequest {
        this['body'] = body;
        return this;
    }
}