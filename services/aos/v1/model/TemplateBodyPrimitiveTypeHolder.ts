

export class TemplateBodyPrimitiveTypeHolder {
    private 'template_body'?: string | undefined;
    public constructor() { 
    }
    public withTemplateBody(templateBody: string): TemplateBodyPrimitiveTypeHolder {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody() {
        return this['template_body'];
    }
}