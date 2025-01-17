

export class PendingAggregationRequest {
    private 'requester_account_id'?: string | undefined;
    public constructor() { 
    }
    public withRequesterAccountId(requesterAccountId: string): PendingAggregationRequest {
        this['requester_account_id'] = requesterAccountId;
        return this;
    }
    public set requesterAccountId(requesterAccountId: string | undefined) {
        this['requester_account_id'] = requesterAccountId;
    }
    public get requesterAccountId() {
        return this['requester_account_id'];
    }
}