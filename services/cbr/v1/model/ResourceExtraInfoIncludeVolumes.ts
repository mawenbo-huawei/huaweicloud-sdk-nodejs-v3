

export class ResourceExtraInfoIncludeVolumes {
    public id: string;
    private 'os_version'?: string | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ResourceExtraInfoIncludeVolumes {
        this['id'] = id;
        return this;
    }
    public withOsVersion(osVersion: string): ResourceExtraInfoIncludeVolumes {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
}