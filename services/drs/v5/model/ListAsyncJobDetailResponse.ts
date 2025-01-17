import { BaseResp } from './BaseResp';
import { JobDetailResp } from './JobDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncJobDetailResponse extends SdkResponse {
    private 'total_count': number | undefined;
    public jobs: Array<JobDetailResp>;
    public constructor(totalCount?: any, jobs?: any) { 
        super();
        this['total_count'] = totalCount;
        this['jobs'] = jobs;
    }
    public withTotalCount(totalCount: number): ListAsyncJobDetailResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
    public withJobs(jobs: Array<JobDetailResp>): ListAsyncJobDetailResponse {
        this['jobs'] = jobs;
        return this;
    }
}