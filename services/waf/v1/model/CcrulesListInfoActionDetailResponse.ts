

export class CcrulesListInfoActionDetailResponse {
    private 'content_type'?: CcrulesListInfoActionDetailResponseContentTypeEnum | undefined;
    public content?: string;
    public constructor() { 
    }
    public withContentType(contentType: CcrulesListInfoActionDetailResponseContentTypeEnum): CcrulesListInfoActionDetailResponse {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CcrulesListInfoActionDetailResponseContentTypeEnum | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType() {
        return this['content_type'];
    }
    public withContent(content: string): CcrulesListInfoActionDetailResponse {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CcrulesListInfoActionDetailResponseContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    TEXT_HTML = 'text/html',
    TEXT_XML = 'text/xml'
}
