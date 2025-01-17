import { PrecheckResult } from './PrecheckResult';


export class QueryPreCheckResult {
    public result?: boolean;
    public process?: string;
    private 'total_passed_rate'?: string | undefined;
    private 'rds_instance_id'?: string | undefined;
    private 'job_direction'?: string | undefined;
    private 'precheck_results'?: Array<PrecheckResult> | undefined;
    public constructor() { 
    }
    public withResult(result: boolean): QueryPreCheckResult {
        this['result'] = result;
        return this;
    }
    public withProcess(process: string): QueryPreCheckResult {
        this['process'] = process;
        return this;
    }
    public withTotalPassedRate(totalPassedRate: string): QueryPreCheckResult {
        this['total_passed_rate'] = totalPassedRate;
        return this;
    }
    public set totalPassedRate(totalPassedRate: string | undefined) {
        this['total_passed_rate'] = totalPassedRate;
    }
    public get totalPassedRate() {
        return this['total_passed_rate'];
    }
    public withRdsInstanceId(rdsInstanceId: string): QueryPreCheckResult {
        this['rds_instance_id'] = rdsInstanceId;
        return this;
    }
    public set rdsInstanceId(rdsInstanceId: string | undefined) {
        this['rds_instance_id'] = rdsInstanceId;
    }
    public get rdsInstanceId() {
        return this['rds_instance_id'];
    }
    public withJobDirection(jobDirection: string): QueryPreCheckResult {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: string | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withPrecheckResults(precheckResults: Array<PrecheckResult>): QueryPreCheckResult {
        this['precheck_results'] = precheckResults;
        return this;
    }
    public set precheckResults(precheckResults: Array<PrecheckResult> | undefined) {
        this['precheck_results'] = precheckResults;
    }
    public get precheckResults() {
        return this['precheck_results'];
    }
}