

export class DeleteTagsRequestBody {
    private 'resource_id': string | undefined;
    public tags: Array<string>;
    public constructor(resourceId?: any, tags?: any) { 
        this['resource_id'] = resourceId;
        this['tags'] = tags;
    }
    public withResourceId(resourceId: string): DeleteTagsRequestBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTags(tags: Array<string>): DeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}