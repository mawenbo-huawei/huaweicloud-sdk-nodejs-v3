import { ProgressInfo } from './ProgressInfo';


export class QueryProgressResp {
    private 'job_id'?: string | undefined;
    public progress?: string;
    private 'incre_trans_delay'?: string | undefined;
    private 'task_mode'?: QueryProgressRespTaskModeEnum | undefined;
    private 'transfer_status'?: string | undefined;
    private 'process_time'?: string | undefined;
    private 'remaining_time'?: string | undefined;
    private 'progress_map'?: { [key: string]: ProgressInfo; } | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withJobId(jobId: string): QueryProgressResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withProgress(progress: string): QueryProgressResp {
        this['progress'] = progress;
        return this;
    }
    public withIncreTransDelay(increTransDelay: string): QueryProgressResp {
        this['incre_trans_delay'] = increTransDelay;
        return this;
    }
    public set increTransDelay(increTransDelay: string | undefined) {
        this['incre_trans_delay'] = increTransDelay;
    }
    public get increTransDelay() {
        return this['incre_trans_delay'];
    }
    public withTaskMode(taskMode: QueryProgressRespTaskModeEnum): QueryProgressResp {
        this['task_mode'] = taskMode;
        return this;
    }
    public set taskMode(taskMode: QueryProgressRespTaskModeEnum | undefined) {
        this['task_mode'] = taskMode;
    }
    public get taskMode() {
        return this['task_mode'];
    }
    public withTransferStatus(transferStatus: string): QueryProgressResp {
        this['transfer_status'] = transferStatus;
        return this;
    }
    public set transferStatus(transferStatus: string | undefined) {
        this['transfer_status'] = transferStatus;
    }
    public get transferStatus() {
        return this['transfer_status'];
    }
    public withProcessTime(processTime: string): QueryProgressResp {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: string | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime() {
        return this['process_time'];
    }
    public withRemainingTime(remainingTime: string): QueryProgressResp {
        this['remaining_time'] = remainingTime;
        return this;
    }
    public set remainingTime(remainingTime: string | undefined) {
        this['remaining_time'] = remainingTime;
    }
    public get remainingTime() {
        return this['remaining_time'];
    }
    public withProgressMap(progressMap: { [key: string]: ProgressInfo; }): QueryProgressResp {
        this['progress_map'] = progressMap;
        return this;
    }
    public set progressMap(progressMap: { [key: string]: ProgressInfo; } | undefined) {
        this['progress_map'] = progressMap;
    }
    public get progressMap() {
        return this['progress_map'];
    }
    public withErrorCode(errorCode: string): QueryProgressResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): QueryProgressResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryProgressRespTaskModeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
