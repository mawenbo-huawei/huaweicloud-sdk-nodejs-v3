import { TaskPolicy } from './TaskPolicy';
import { TaskProgress } from './TaskProgress';


export class Task {
    private 'task_id'?: string | undefined;
    private 'task_name'?: string | undefined;
    private 'task_type'?: string | undefined;
    public targets?: Array<string>;
    private 'targets_filter'?: { [key: string]: object; } | undefined;
    public document?: object;
    private 'task_policy'?: TaskPolicy | undefined;
    public status?: string;
    private 'status_desc'?: string | undefined;
    private 'task_progress'?: TaskProgress | undefined;
    private 'create_time'?: string | undefined;
    public constructor() { 
    }
    public withTaskId(taskId: string): Task {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskName(taskName: string): Task {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withTaskType(taskType: string): Task {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withTargets(targets: Array<string>): Task {
        this['targets'] = targets;
        return this;
    }
    public withTargetsFilter(targetsFilter: { [key: string]: object; }): Task {
        this['targets_filter'] = targetsFilter;
        return this;
    }
    public set targetsFilter(targetsFilter: { [key: string]: object; } | undefined) {
        this['targets_filter'] = targetsFilter;
    }
    public get targetsFilter() {
        return this['targets_filter'];
    }
    public withDocument(document: object): Task {
        this['document'] = document;
        return this;
    }
    public withTaskPolicy(taskPolicy: TaskPolicy): Task {
        this['task_policy'] = taskPolicy;
        return this;
    }
    public set taskPolicy(taskPolicy: TaskPolicy | undefined) {
        this['task_policy'] = taskPolicy;
    }
    public get taskPolicy() {
        return this['task_policy'];
    }
    public withStatus(status: string): Task {
        this['status'] = status;
        return this;
    }
    public withStatusDesc(statusDesc: string): Task {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: string | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc() {
        return this['status_desc'];
    }
    public withTaskProgress(taskProgress: TaskProgress): Task {
        this['task_progress'] = taskProgress;
        return this;
    }
    public set taskProgress(taskProgress: TaskProgress | undefined) {
        this['task_progress'] = taskProgress;
    }
    public get taskProgress() {
        return this['task_progress'];
    }
    public withCreateTime(createTime: string): Task {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}