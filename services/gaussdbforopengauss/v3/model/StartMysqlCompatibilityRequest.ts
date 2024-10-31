import { StartMySQLCompatibilityRequestBody } from './StartMySQLCompatibilityRequestBody';


export class StartMysqlCompatibilityRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: StartMysqlCompatibilityRequestXLanguageEnum | string;
    public body?: StartMySQLCompatibilityRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): StartMysqlCompatibilityRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: StartMysqlCompatibilityRequestXLanguageEnum | string): StartMysqlCompatibilityRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartMysqlCompatibilityRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartMysqlCompatibilityRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: StartMySQLCompatibilityRequestBody): StartMysqlCompatibilityRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartMysqlCompatibilityRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
