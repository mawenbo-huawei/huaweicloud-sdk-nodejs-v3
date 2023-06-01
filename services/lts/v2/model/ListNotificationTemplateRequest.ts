import { PreviewTemplateBody } from './PreviewTemplateBody';


export class ListNotificationTemplateRequest {
    private 'domain_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: PreviewTemplateBody;
    public constructor(domainId?: any, contentType?: any) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ListNotificationTemplateRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withContentType(contentType: string): ListNotificationTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: PreviewTemplateBody): ListNotificationTemplateRequest {
        this['body'] = body;
        return this;
    }
}