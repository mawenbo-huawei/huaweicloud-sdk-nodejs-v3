

export class FLVRecordConfig {
    private 'record_cycle': number | undefined;
    private 'record_prefix'?: string | undefined;
    private 'record_max_duration_to_merge_file'?: number | undefined;
    public constructor(recordCycle?: any) { 
        this['record_cycle'] = recordCycle;
    }
    public withRecordCycle(recordCycle: number): FLVRecordConfig {
        this['record_cycle'] = recordCycle;
        return this;
    }
    public set recordCycle(recordCycle: number | undefined) {
        this['record_cycle'] = recordCycle;
    }
    public get recordCycle() {
        return this['record_cycle'];
    }
    public withRecordPrefix(recordPrefix: string): FLVRecordConfig {
        this['record_prefix'] = recordPrefix;
        return this;
    }
    public set recordPrefix(recordPrefix: string | undefined) {
        this['record_prefix'] = recordPrefix;
    }
    public get recordPrefix() {
        return this['record_prefix'];
    }
    public withRecordMaxDurationToMergeFile(recordMaxDurationToMergeFile: number): FLVRecordConfig {
        this['record_max_duration_to_merge_file'] = recordMaxDurationToMergeFile;
        return this;
    }
    public set recordMaxDurationToMergeFile(recordMaxDurationToMergeFile: number | undefined) {
        this['record_max_duration_to_merge_file'] = recordMaxDurationToMergeFile;
    }
    public get recordMaxDurationToMergeFile() {
        return this['record_max_duration_to_merge_file'];
    }
}