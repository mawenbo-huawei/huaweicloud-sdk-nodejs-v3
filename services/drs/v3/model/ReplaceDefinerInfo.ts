

export class ReplaceDefinerInfo {
    private 'job_id': string | undefined;
    private 'replace_definer': boolean | undefined;
    public constructor(jobId?: any, replaceDefiner?: any) { 
        this['job_id'] = jobId;
        this['replace_definer'] = replaceDefiner;
    }
    public withJobId(jobId: string): ReplaceDefinerInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withReplaceDefiner(replaceDefiner: boolean): ReplaceDefinerInfo {
        this['replace_definer'] = replaceDefiner;
        return this;
    }
    public set replaceDefiner(replaceDefiner: boolean | undefined) {
        this['replace_definer'] = replaceDefiner;
    }
    public get replaceDefiner() {
        return this['replace_definer'];
    }
}