

export class ShowJobInfoRequest {
    private 'job_id': string | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowJobInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}