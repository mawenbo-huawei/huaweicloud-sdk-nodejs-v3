

export class ListBackupRecordsRequest {
    private 'instance_id': string | undefined;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListBackupRecordsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBeginTime(beginTime: string): ListBackupRecordsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListBackupRecordsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ListBackupRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBackupRecordsRequest {
        this['offset'] = offset;
        return this;
    }
}