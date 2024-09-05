

export class DataClassificationRuleQueryDTO {
    public uuid?: string;
    private 'rule_type'?: DataClassificationRuleQueryDTORuleTypeEnum | string;
    private 'secrecy_level'?: string;
    private 'secrecy_level_num'?: number;
    public name?: string;
    public guid?: string;
    public enable?: boolean;
    public method?: DataClassificationRuleQueryDTOMethodEnum | string;
    private 'content_expression'?: string;
    private 'column_expression'?: string;
    private 'commit_expression'?: string;
    private 'combine_expression'?: string;
    private 'project_id'?: string;
    public description?: string;
    private 'created_by'?: string;
    private 'created_at'?: number;
    private 'updated_by'?: string;
    private 'updated_at'?: number;
    private 'builtin_rule_id'?: string;
    private 'category_id'?: string;
    private 'instance_id'?: string;
    private 'match_type'?: string;
    public constructor() { 
    }
    public withUuid(uuid: string): DataClassificationRuleQueryDTO {
        this['uuid'] = uuid;
        return this;
    }
    public withRuleType(ruleType: DataClassificationRuleQueryDTORuleTypeEnum | string): DataClassificationRuleQueryDTO {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: DataClassificationRuleQueryDTORuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): DataClassificationRuleQueryDTORuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
    public withSecrecyLevel(secrecyLevel: string): DataClassificationRuleQueryDTO {
        this['secrecy_level'] = secrecyLevel;
        return this;
    }
    public set secrecyLevel(secrecyLevel: string  | undefined) {
        this['secrecy_level'] = secrecyLevel;
    }
    public get secrecyLevel(): string | undefined {
        return this['secrecy_level'];
    }
    public withSecrecyLevelNum(secrecyLevelNum: number): DataClassificationRuleQueryDTO {
        this['secrecy_level_num'] = secrecyLevelNum;
        return this;
    }
    public set secrecyLevelNum(secrecyLevelNum: number  | undefined) {
        this['secrecy_level_num'] = secrecyLevelNum;
    }
    public get secrecyLevelNum(): number | undefined {
        return this['secrecy_level_num'];
    }
    public withName(name: string): DataClassificationRuleQueryDTO {
        this['name'] = name;
        return this;
    }
    public withGuid(guid: string): DataClassificationRuleQueryDTO {
        this['guid'] = guid;
        return this;
    }
    public withEnable(enable: boolean): DataClassificationRuleQueryDTO {
        this['enable'] = enable;
        return this;
    }
    public withMethod(method: DataClassificationRuleQueryDTOMethodEnum | string): DataClassificationRuleQueryDTO {
        this['method'] = method;
        return this;
    }
    public withContentExpression(contentExpression: string): DataClassificationRuleQueryDTO {
        this['content_expression'] = contentExpression;
        return this;
    }
    public set contentExpression(contentExpression: string  | undefined) {
        this['content_expression'] = contentExpression;
    }
    public get contentExpression(): string | undefined {
        return this['content_expression'];
    }
    public withColumnExpression(columnExpression: string): DataClassificationRuleQueryDTO {
        this['column_expression'] = columnExpression;
        return this;
    }
    public set columnExpression(columnExpression: string  | undefined) {
        this['column_expression'] = columnExpression;
    }
    public get columnExpression(): string | undefined {
        return this['column_expression'];
    }
    public withCommitExpression(commitExpression: string): DataClassificationRuleQueryDTO {
        this['commit_expression'] = commitExpression;
        return this;
    }
    public set commitExpression(commitExpression: string  | undefined) {
        this['commit_expression'] = commitExpression;
    }
    public get commitExpression(): string | undefined {
        return this['commit_expression'];
    }
    public withCombineExpression(combineExpression: string): DataClassificationRuleQueryDTO {
        this['combine_expression'] = combineExpression;
        return this;
    }
    public set combineExpression(combineExpression: string  | undefined) {
        this['combine_expression'] = combineExpression;
    }
    public get combineExpression(): string | undefined {
        return this['combine_expression'];
    }
    public withProjectId(projectId: string): DataClassificationRuleQueryDTO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): DataClassificationRuleQueryDTO {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): DataClassificationRuleQueryDTO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedAt(createdAt: number): DataClassificationRuleQueryDTO {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedBy(updatedBy: string): DataClassificationRuleQueryDTO {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withUpdatedAt(updatedAt: number): DataClassificationRuleQueryDTO {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withBuiltinRuleId(builtinRuleId: string): DataClassificationRuleQueryDTO {
        this['builtin_rule_id'] = builtinRuleId;
        return this;
    }
    public set builtinRuleId(builtinRuleId: string  | undefined) {
        this['builtin_rule_id'] = builtinRuleId;
    }
    public get builtinRuleId(): string | undefined {
        return this['builtin_rule_id'];
    }
    public withCategoryId(categoryId: string): DataClassificationRuleQueryDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withInstanceId(instanceId: string): DataClassificationRuleQueryDTO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMatchType(matchType: string): DataClassificationRuleQueryDTO {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataClassificationRuleQueryDTORuleTypeEnum {
    CUSTOM = 'CUSTOM',
    BUILTIN = 'BUILTIN'
}
/**
    * @export
    * @enum {string}
    */
export enum DataClassificationRuleQueryDTOMethodEnum {
    REGULAR = 'REGULAR',
    NONE = 'NONE',
    DEFAULT = 'DEFAULT',
    COMBINE = 'COMBINE'
}
