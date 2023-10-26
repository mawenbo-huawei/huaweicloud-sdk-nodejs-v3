

export class ListRelationFileRequest {
    private 'job_id'?: string;
    private 'bucket_id'?: string;
    private 'assets_name'?: string;
    private 'risk_start'?: number;
    private 'risk_end'?: number;
    public offset?: number;
    public size?: number;
    public limit?: number;
    public constructor(jobId?: string, bucketId?: string, riskStart?: number, riskEnd?: number, offset?: number, size?: number) { 
        this['job_id'] = jobId;
        this['bucket_id'] = bucketId;
        this['risk_start'] = riskStart;
        this['risk_end'] = riskEnd;
        this['offset'] = offset;
        this['size'] = size;
    }
    public withJobId(jobId: string): ListRelationFileRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBucketId(bucketId: string): ListRelationFileRequest {
        this['bucket_id'] = bucketId;
        return this;
    }
    public set bucketId(bucketId: string  | undefined) {
        this['bucket_id'] = bucketId;
    }
    public get bucketId(): string | undefined {
        return this['bucket_id'];
    }
    public withAssetsName(assetsName: string): ListRelationFileRequest {
        this['assets_name'] = assetsName;
        return this;
    }
    public set assetsName(assetsName: string  | undefined) {
        this['assets_name'] = assetsName;
    }
    public get assetsName(): string | undefined {
        return this['assets_name'];
    }
    public withRiskStart(riskStart: number): ListRelationFileRequest {
        this['risk_start'] = riskStart;
        return this;
    }
    public set riskStart(riskStart: number  | undefined) {
        this['risk_start'] = riskStart;
    }
    public get riskStart(): number | undefined {
        return this['risk_start'];
    }
    public withRiskEnd(riskEnd: number): ListRelationFileRequest {
        this['risk_end'] = riskEnd;
        return this;
    }
    public set riskEnd(riskEnd: number  | undefined) {
        this['risk_end'] = riskEnd;
    }
    public get riskEnd(): number | undefined {
        return this['risk_end'];
    }
    public withOffset(offset: number): ListRelationFileRequest {
        this['offset'] = offset;
        return this;
    }
    public withSize(size: number): ListRelationFileRequest {
        this['size'] = size;
        return this;
    }
    public withLimit(limit: number): ListRelationFileRequest {
        this['limit'] = limit;
        return this;
    }
}