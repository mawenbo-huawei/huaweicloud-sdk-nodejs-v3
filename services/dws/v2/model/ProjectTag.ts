

export class ProjectTag {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): ProjectTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ProjectTag {
        this['values'] = values;
        return this;
    }
}