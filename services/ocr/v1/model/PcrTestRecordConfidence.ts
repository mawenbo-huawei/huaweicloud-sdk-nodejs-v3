

export class PcrTestRecordConfidence {
    public name?: number;
    private 'sampling_time'?: number | undefined;
    private 'test_time'?: number | undefined;
    private 'test_result'?: number | undefined;
    public constructor() { 
    }
    public withName(name: number): PcrTestRecordConfidence {
        this['name'] = name;
        return this;
    }
    public withSamplingTime(samplingTime: number): PcrTestRecordConfidence {
        this['sampling_time'] = samplingTime;
        return this;
    }
    public set samplingTime(samplingTime: number | undefined) {
        this['sampling_time'] = samplingTime;
    }
    public get samplingTime() {
        return this['sampling_time'];
    }
    public withTestTime(testTime: number): PcrTestRecordConfidence {
        this['test_time'] = testTime;
        return this;
    }
    public set testTime(testTime: number | undefined) {
        this['test_time'] = testTime;
    }
    public get testTime() {
        return this['test_time'];
    }
    public withTestResult(testResult: number): PcrTestRecordConfidence {
        this['test_result'] = testResult;
        return this;
    }
    public set testResult(testResult: number | undefined) {
        this['test_result'] = testResult;
    }
    public get testResult() {
        return this['test_result'];
    }
}