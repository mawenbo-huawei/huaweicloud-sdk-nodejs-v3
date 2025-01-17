import { Events } from './Events';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActiveOrHistoryAlarmsResponse extends SdkResponse {
    public events?: Array<Events>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<Events>): ListActiveOrHistoryAlarmsResponse {
        this['events'] = events;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListActiveOrHistoryAlarmsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}