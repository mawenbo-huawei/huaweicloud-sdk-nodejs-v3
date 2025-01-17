

export class ShowUrlTaskInfoRequest {
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    public offset?: number;
    public limit?: number;
    public url?: string;
    private 'task_type'?: string | undefined;
    public status?: string;
    private 'file_type'?: string | undefined;
    public constructor() { 
    }
    public withStartTime(startTime: number): ShowUrlTaskInfoRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowUrlTaskInfoRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowUrlTaskInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowUrlTaskInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withUrl(url: string): ShowUrlTaskInfoRequest {
        this['url'] = url;
        return this;
    }
    public withTaskType(taskType: string): ShowUrlTaskInfoRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withStatus(status: string): ShowUrlTaskInfoRequest {
        this['status'] = status;
        return this;
    }
    public withFileType(fileType: string): ShowUrlTaskInfoRequest {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
}