

export class DeleteStoredQueryRequest {
    private 'query_id': string | undefined;
    public constructor(queryId?: any) { 
        this['query_id'] = queryId;
    }
    public withQueryId(queryId: string): DeleteStoredQueryRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId() {
        return this['query_id'];
    }
}