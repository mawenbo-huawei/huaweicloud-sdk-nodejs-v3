

export class AggregationAuthorizationResp {
    private 'aggregation_authorization_urn'?: string | undefined;
    private 'authorized_account_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    public constructor() { 
    }
    public withAggregationAuthorizationUrn(aggregationAuthorizationUrn: string): AggregationAuthorizationResp {
        this['aggregation_authorization_urn'] = aggregationAuthorizationUrn;
        return this;
    }
    public set aggregationAuthorizationUrn(aggregationAuthorizationUrn: string | undefined) {
        this['aggregation_authorization_urn'] = aggregationAuthorizationUrn;
    }
    public get aggregationAuthorizationUrn() {
        return this['aggregation_authorization_urn'];
    }
    public withAuthorizedAccountId(authorizedAccountId: string): AggregationAuthorizationResp {
        this['authorized_account_id'] = authorizedAccountId;
        return this;
    }
    public set authorizedAccountId(authorizedAccountId: string | undefined) {
        this['authorized_account_id'] = authorizedAccountId;
    }
    public get authorizedAccountId() {
        return this['authorized_account_id'];
    }
    public withCreatedAt(createdAt: string): AggregationAuthorizationResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
}