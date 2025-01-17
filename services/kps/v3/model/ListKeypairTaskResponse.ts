
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeypairTaskResponse extends SdkResponse {
    private 'server_id'?: string | undefined;
    private 'task_id'?: string | undefined;
    private 'task_status'?: ListKeypairTaskResponseTaskStatusEnum | undefined;
    public constructor() { 
        super();
    }
    public withServerId(serverId: string): ListKeypairTaskResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withTaskId(taskId: string): ListKeypairTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskStatus(taskStatus: ListKeypairTaskResponseTaskStatusEnum): ListKeypairTaskResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: ListKeypairTaskResponseTaskStatusEnum | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus() {
        return this['task_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListKeypairTaskResponseTaskStatusEnum {
    READY_RESET = 'READY_RESET',
    RUNNING_RESET = 'RUNNING_RESET',
    FAILED_RESET = 'FAILED_RESET',
    SUCCESS_RESET = 'SUCCESS_RESET',
    READY_REPLACE = 'READY_REPLACE',
    RUNNING_REPLACE = 'RUNNING_REPLACE',
    READY_UNBIND = 'READY_UNBIND',
    RUNNING_UNBIND = 'RUNNING_UNBIND',
    FAILED_UNBIND = 'FAILED_UNBIND',
    SUCCESS_UNBIND = 'SUCCESS_UNBIND'
}
