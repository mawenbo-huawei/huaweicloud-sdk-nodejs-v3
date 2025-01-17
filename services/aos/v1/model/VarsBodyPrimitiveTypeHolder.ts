

export class VarsBodyPrimitiveTypeHolder {
    private 'vars_body'?: string | undefined;
    public constructor() { 
    }
    public withVarsBody(varsBody: string): VarsBodyPrimitiveTypeHolder {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody() {
        return this['vars_body'];
    }
}