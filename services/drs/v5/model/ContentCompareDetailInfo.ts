

export class ContentCompareDetailInfo {
    private 'source_db'?: string | undefined;
    private 'target_db'?: string | undefined;
    private 'source_table_name'?: string | undefined;
    private 'target_table_name'?: string | undefined;
    private 'source_row_num'?: number | undefined;
    private 'target_row_num'?: number | undefined;
    private 'difference_row_num'?: number | undefined;
    private 'line_compare_result'?: boolean | undefined;
    private 'content_compare_result'?: boolean | undefined;
    public message?: string;
    public constructor() { 
    }
    public withSourceDb(sourceDb: string): ContentCompareDetailInfo {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: string | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb() {
        return this['source_db'];
    }
    public withTargetDb(targetDb: string): ContentCompareDetailInfo {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: string | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb() {
        return this['target_db'];
    }
    public withSourceTableName(sourceTableName: string): ContentCompareDetailInfo {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName() {
        return this['source_table_name'];
    }
    public withTargetTableName(targetTableName: string): ContentCompareDetailInfo {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName() {
        return this['target_table_name'];
    }
    public withSourceRowNum(sourceRowNum: number): ContentCompareDetailInfo {
        this['source_row_num'] = sourceRowNum;
        return this;
    }
    public set sourceRowNum(sourceRowNum: number | undefined) {
        this['source_row_num'] = sourceRowNum;
    }
    public get sourceRowNum() {
        return this['source_row_num'];
    }
    public withTargetRowNum(targetRowNum: number): ContentCompareDetailInfo {
        this['target_row_num'] = targetRowNum;
        return this;
    }
    public set targetRowNum(targetRowNum: number | undefined) {
        this['target_row_num'] = targetRowNum;
    }
    public get targetRowNum() {
        return this['target_row_num'];
    }
    public withDifferenceRowNum(differenceRowNum: number): ContentCompareDetailInfo {
        this['difference_row_num'] = differenceRowNum;
        return this;
    }
    public set differenceRowNum(differenceRowNum: number | undefined) {
        this['difference_row_num'] = differenceRowNum;
    }
    public get differenceRowNum() {
        return this['difference_row_num'];
    }
    public withLineCompareResult(lineCompareResult: boolean): ContentCompareDetailInfo {
        this['line_compare_result'] = lineCompareResult;
        return this;
    }
    public set lineCompareResult(lineCompareResult: boolean | undefined) {
        this['line_compare_result'] = lineCompareResult;
    }
    public get lineCompareResult() {
        return this['line_compare_result'];
    }
    public withContentCompareResult(contentCompareResult: boolean): ContentCompareDetailInfo {
        this['content_compare_result'] = contentCompareResult;
        return this;
    }
    public set contentCompareResult(contentCompareResult: boolean | undefined) {
        this['content_compare_result'] = contentCompareResult;
    }
    public get contentCompareResult() {
        return this['content_compare_result'];
    }
    public withMessage(message: string): ContentCompareDetailInfo {
        this['message'] = message;
        return this;
    }
}