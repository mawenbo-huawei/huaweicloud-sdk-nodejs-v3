

export class DeleteTagRequest {
    public key: string;
    public constructor(key?: any) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteTagRequest {
        this['key'] = key;
        return this;
    }
}