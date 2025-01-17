import { BatchUpdateMembersRequestBody } from './BatchUpdateMembersRequestBody';


export class BatchUpdateMembersRequest {
    private 'pool_id': string | undefined;
    public body?: BatchUpdateMembersRequestBody;
    public constructor(poolId?: any) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): BatchUpdateMembersRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withBody(body: BatchUpdateMembersRequestBody): BatchUpdateMembersRequest {
        this['body'] = body;
        return this;
    }
}