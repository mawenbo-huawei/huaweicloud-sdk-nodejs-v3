import { QueryRunRequestBody } from './QueryRunRequestBody';


export class RunAggregateResourceQueryRequest {
    private 'aggregator_id': string | undefined;
    public body?: QueryRunRequestBody;
    public constructor(aggregatorId?: any) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): RunAggregateResourceQueryRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withBody(body: QueryRunRequestBody): RunAggregateResourceQueryRequest {
        this['body'] = body;
        return this;
    }
}