import { ExtentionRespDataByNameAndId } from './ExtentionRespDataByNameAndId';


export class IvsExtentionByNameAndIdResponseBodyResult {
    private 'service_name'?: string | undefined;
    public count?: number;
    private 'resp_data'?: Array<ExtentionRespDataByNameAndId> | undefined;
    public constructor() { 
    }
    public withServiceName(serviceName: string): IvsExtentionByNameAndIdResponseBodyResult {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withCount(count: number): IvsExtentionByNameAndIdResponseBodyResult {
        this['count'] = count;
        return this;
    }
    public withRespData(respData: Array<ExtentionRespDataByNameAndId>): IvsExtentionByNameAndIdResponseBodyResult {
        this['resp_data'] = respData;
        return this;
    }
    public set respData(respData: Array<ExtentionRespDataByNameAndId> | undefined) {
        this['resp_data'] = respData;
    }
    public get respData() {
        return this['resp_data'];
    }
}