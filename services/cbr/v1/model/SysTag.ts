

export class SysTag {
    public key: string;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): SysTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SysTag {
        this['value'] = value;
        return this;
    }
}