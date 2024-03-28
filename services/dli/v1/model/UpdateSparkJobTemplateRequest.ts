import { UpdateSparkJobTemplateRequestBody } from './UpdateSparkJobTemplateRequestBody';


export class UpdateSparkJobTemplateRequest {
    private 'template_id'?: string;
    public body?: UpdateSparkJobTemplateRequestBody;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): UpdateSparkJobTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withBody(body: UpdateSparkJobTemplateRequestBody): UpdateSparkJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}