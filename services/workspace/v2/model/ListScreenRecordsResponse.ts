import { QueryScreenRecordDetailRsp } from './QueryScreenRecordDetailRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScreenRecordsResponse extends SdkResponse {
    private 'screen_records'?: Array<QueryScreenRecordDetailRsp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withScreenRecords(screenRecords: Array<QueryScreenRecordDetailRsp>): ListScreenRecordsResponse {
        this['screen_records'] = screenRecords;
        return this;
    }
    public set screenRecords(screenRecords: Array<QueryScreenRecordDetailRsp>  | undefined) {
        this['screen_records'] = screenRecords;
    }
    public get screenRecords(): Array<QueryScreenRecordDetailRsp> | undefined {
        return this['screen_records'];
    }
    public withTotalCount(totalCount: number): ListScreenRecordsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}