

export class ShowTranscodingsTemplateRequest {
    public domain: string;
    private 'app_name'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowTranscodingsTemplateRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ShowTranscodingsTemplateRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withPage(page: number): ShowTranscodingsTemplateRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ShowTranscodingsTemplateRequest {
        this['size'] = size;
        return this;
    }
}