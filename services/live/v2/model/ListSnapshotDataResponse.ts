import { SnapshotData } from './SnapshotData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotDataResponse extends SdkResponse {
    private 'snapshot_list'?: Array<SnapshotData> | undefined;
    public total?: number;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSnapshotList(snapshotList: Array<SnapshotData>): ListSnapshotDataResponse {
        this['snapshot_list'] = snapshotList;
        return this;
    }
    public set snapshotList(snapshotList: Array<SnapshotData> | undefined) {
        this['snapshot_list'] = snapshotList;
    }
    public get snapshotList() {
        return this['snapshot_list'];
    }
    public withTotal(total: number): ListSnapshotDataResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListSnapshotDataResponse {
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