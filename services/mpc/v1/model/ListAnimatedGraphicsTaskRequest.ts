

export class ListAnimatedGraphicsTaskRequest {
    private 'x-language'?: string | undefined;
    private 'task_id'?: Array<string> | undefined;
    public status?: ListAnimatedGraphicsTaskRequestStatusEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListAnimatedGraphicsTaskRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage() {
        return this['x-language'];
    }
    public withTaskId(taskId: Array<string>): ListAnimatedGraphicsTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string> | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: ListAnimatedGraphicsTaskRequestStatusEnum): ListAnimatedGraphicsTaskRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListAnimatedGraphicsTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAnimatedGraphicsTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withPage(page: number): ListAnimatedGraphicsTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListAnimatedGraphicsTaskRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAnimatedGraphicsTaskRequestStatusEnum {
    INIT = 'INIT',
    WAITING = 'WAITING',
    PREPROCESSING = 'PREPROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
