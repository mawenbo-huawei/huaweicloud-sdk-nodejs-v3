

export class ListRuleActionsRequest {
    private 'Instance-Id'?: string | undefined;
    private 'rule_id'?: string | undefined;
    public channel?: string;
    private 'app_type'?: string | undefined;
    private 'app_id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListRuleActionsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withRuleId(ruleId: string): ListRuleActionsRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withChannel(channel: string): ListRuleActionsRequest {
        this['channel'] = channel;
        return this;
    }
    public withAppType(appType: string): ListRuleActionsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string | undefined) {
        this['app_type'] = appType;
    }
    public get appType() {
        return this['app_type'];
    }
    public withAppId(appId: string): ListRuleActionsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withLimit(limit: number): ListRuleActionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRuleActionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListRuleActionsRequest {
        this['offset'] = offset;
        return this;
    }
}