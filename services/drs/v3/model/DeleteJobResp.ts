

export class DeleteJobResp {
    public id?: string;
    public status?: DeleteJobRespStatusEnum;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): DeleteJobResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: DeleteJobRespStatusEnum): DeleteJobResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): DeleteJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DeleteJobResp {
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
export enum DeleteJobRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
