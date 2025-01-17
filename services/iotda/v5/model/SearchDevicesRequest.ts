import { SearchSql } from './SearchSql';


export class SearchDevicesRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: SearchSql;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): SearchDevicesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: SearchSql): SearchDevicesRequest {
        this['body'] = body;
        return this;
    }
}