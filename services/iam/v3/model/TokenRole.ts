

export class TokenRole {
    public name: string;
    public id: string;
    public constructor(name?: any, id?: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): TokenRole {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TokenRole {
        this['id'] = id;
        return this;
    }
}