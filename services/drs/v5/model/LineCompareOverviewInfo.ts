

export class LineCompareOverviewInfo {
    private 'source_db_name'?: string | undefined;
    private 'target_db_name'?: string | undefined;
    public status?: LineCompareOverviewInfoStatusEnum;
    public constructor() { 
    }
    public withSourceDbName(sourceDbName: string): LineCompareOverviewInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): LineCompareOverviewInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName() {
        return this['target_db_name'];
    }
    public withStatus(status: LineCompareOverviewInfoStatusEnum): LineCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LineCompareOverviewInfoStatusEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIST = 'TARGET_DB_NOT_EXIST',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
