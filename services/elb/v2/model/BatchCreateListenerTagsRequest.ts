import { BatchCreateListenerTagsRequestBody } from './BatchCreateListenerTagsRequestBody';


export class BatchCreateListenerTagsRequest {
    private 'listener_id': string | undefined;
    public body?: BatchCreateListenerTagsRequestBody;
    public constructor(listenerId?: any) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): BatchCreateListenerTagsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withBody(body: BatchCreateListenerTagsRequestBody): BatchCreateListenerTagsRequest {
        this['body'] = body;
        return this;
    }
}