

export class ClusterConfiguration {
    public id: string;
    public name: string;
    public type: string;
    public status: string;
    private 'fail_reason': string | undefined;
    public constructor(id?: any, name?: any, type?: any, status?: any, failReason?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['status'] = status;
        this['fail_reason'] = failReason;
    }
    public withId(id: string): ClusterConfiguration {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterConfiguration {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ClusterConfiguration {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ClusterConfiguration {
        this['status'] = status;
        return this;
    }
    public withFailReason(failReason: string): ClusterConfiguration {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
        return this['fail_reason'];
    }
}