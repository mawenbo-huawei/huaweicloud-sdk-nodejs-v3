import { BatchQueryJobReqPage } from './BatchQueryJobReqPage';


export class BatchListJobStatusRequest {
    private 'X-Language'?: BatchListJobStatusRequestXLanguageEnum | undefined;
    public body?: BatchQueryJobReqPage;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListJobStatusRequestXLanguageEnum): BatchListJobStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListJobStatusRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryJobReqPage): BatchListJobStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListJobStatusRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
