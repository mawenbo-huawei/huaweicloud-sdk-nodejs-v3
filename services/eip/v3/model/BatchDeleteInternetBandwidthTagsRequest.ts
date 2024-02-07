import { BatchDeleteV2RequestBody } from './BatchDeleteV2RequestBody';


export class BatchDeleteInternetBandwidthTagsRequest {
    private 'resource_id'?: string;
    public body?: BatchDeleteV2RequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchDeleteInternetBandwidthTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchDeleteV2RequestBody): BatchDeleteInternetBandwidthTagsRequest {
        this['body'] = body;
        return this;
    }
}