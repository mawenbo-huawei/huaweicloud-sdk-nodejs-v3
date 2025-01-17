

export class UpdateTaskSpeedReq {
    private 'subtask_name': UpdateTaskSpeedReqSubtaskNameEnum | undefined;
    public progress: number;
    public replicatesize: number;
    public totalsize: number;
    private 'process_trace': string | undefined;
    private 'migrate_speed'?: number | undefined;
    private 'compress_rate'?: number | undefined;
    private 'remain_time'?: number | undefined;
    public constructor(subtaskName?: any, progress?: any, replicatesize?: any, totalsize?: any, processTrace?: any) { 
        this['subtask_name'] = subtaskName;
        this['progress'] = progress;
        this['replicatesize'] = replicatesize;
        this['totalsize'] = totalsize;
        this['process_trace'] = processTrace;
    }
    public withSubtaskName(subtaskName: UpdateTaskSpeedReqSubtaskNameEnum): UpdateTaskSpeedReq {
        this['subtask_name'] = subtaskName;
        return this;
    }
    public set subtaskName(subtaskName: UpdateTaskSpeedReqSubtaskNameEnum | undefined) {
        this['subtask_name'] = subtaskName;
    }
    public get subtaskName() {
        return this['subtask_name'];
    }
    public withProgress(progress: number): UpdateTaskSpeedReq {
        this['progress'] = progress;
        return this;
    }
    public withReplicatesize(replicatesize: number): UpdateTaskSpeedReq {
        this['replicatesize'] = replicatesize;
        return this;
    }
    public withTotalsize(totalsize: number): UpdateTaskSpeedReq {
        this['totalsize'] = totalsize;
        return this;
    }
    public withProcessTrace(processTrace: string): UpdateTaskSpeedReq {
        this['process_trace'] = processTrace;
        return this;
    }
    public set processTrace(processTrace: string | undefined) {
        this['process_trace'] = processTrace;
    }
    public get processTrace() {
        return this['process_trace'];
    }
    public withMigrateSpeed(migrateSpeed: number): UpdateTaskSpeedReq {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withCompressRate(compressRate: number): UpdateTaskSpeedReq {
        this['compress_rate'] = compressRate;
        return this;
    }
    public set compressRate(compressRate: number | undefined) {
        this['compress_rate'] = compressRate;
    }
    public get compressRate() {
        return this['compress_rate'];
    }
    public withRemainTime(remainTime: number): UpdateTaskSpeedReq {
        this['remain_time'] = remainTime;
        return this;
    }
    public set remainTime(remainTime: number | undefined) {
        this['remain_time'] = remainTime;
    }
    public get remainTime() {
        return this['remain_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTaskSpeedReqSubtaskNameEnum {
    CREATE_CLOUD_SERVER = 'CREATE_CLOUD_SERVER',
    SSL_CONFIG = 'SSL_CONFIG',
    ATTACH_AGENT_IMAGE = 'ATTACH_AGENT_IMAGE',
    DETTACH_AGENT_IMAGE = 'DETTACH_AGENT_IMAGE',
    FORMAT_DISK_LINUX = 'FORMAT_DISK_LINUX',
    FORMAT_DISK_LINUX_FILE = 'FORMAT_DISK_LINUX_FILE',
    FORMAT_DISK_LINUX_BLOCK = 'FORMAT_DISK_LINUX_BLOCK',
    FORMAT_DISK_WINDOWS = 'FORMAT_DISK_WINDOWS',
    MIGRATE_LINUX_FILE = 'MIGRATE_LINUX_FILE',
    MIGRATE_LINUX_BLOCK = 'MIGRATE_LINUX_BLOCK',
    MIGRATE_WINDOWS_BLOCK = 'MIGRATE_WINDOWS_BLOCK',
    CLONE_VM = 'CLONE_VM',
    SYNC_LINUX_FILE = 'SYNC_LINUX_FILE',
    SYNC_LINUX_BLOCK = 'SYNC_LINUX_BLOCK',
    SYNC_WINDOWS_BLOCK = 'SYNC_WINDOWS_BLOCK',
    CONFIGURE_LINUX = 'CONFIGURE_LINUX',
    CONFIGURE_LINUX_BLOCK = 'CONFIGURE_LINUX_BLOCK',
    CONFIGURE_LINUX_FILE = 'CONFIGURE_LINUX_FILE',
    CONFIGURE_WINDOWS = 'CONFIGURE_WINDOWS'
}
