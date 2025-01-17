import { TrafficData } from './TrafficData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainTrafficDetailResponse extends SdkResponse {
    private 'data_list'?: Array<TrafficData> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<TrafficData>): ListDomainTrafficDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<TrafficData> | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList() {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListDomainTrafficDetailResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}