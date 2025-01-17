import { StructProcessResp } from './StructProcessResp';


export class QueryStructProcessResp {
    private 'job_id': string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_message'?: string | undefined;
    private 'struct_process'?: StructProcessResp | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): QueryStructProcessResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withErrorCode(errorCode: string): QueryStructProcessResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): QueryStructProcessResp {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
    public withStructProcess(structProcess: StructProcessResp): QueryStructProcessResp {
        this['struct_process'] = structProcess;
        return this;
    }
    public set structProcess(structProcess: StructProcessResp | undefined) {
        this['struct_process'] = structProcess;
    }
    public get structProcess() {
        return this['struct_process'];
    }
}