import { JobLinkResp } from './JobLinkResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLinksResponse extends SdkResponse {
    private 'job_links'?: Array<JobLinkResp> | undefined;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withJobLinks(jobLinks: Array<JobLinkResp>): ListLinksResponse {
        this['job_links'] = jobLinks;
        return this;
    }
    public set jobLinks(jobLinks: Array<JobLinkResp> | undefined) {
        this['job_links'] = jobLinks;
    }
    public get jobLinks() {
        return this['job_links'];
    }
    public withTotalCount(totalCount: number): ListLinksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}