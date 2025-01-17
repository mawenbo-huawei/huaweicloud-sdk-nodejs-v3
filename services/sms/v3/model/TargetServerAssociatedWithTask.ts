

export class TargetServerAssociatedWithTask {
    public id?: string;
    private 'vm_id'?: string | undefined;
    public name?: string;
    public ip?: string;
    private 'os_type'?: TargetServerAssociatedWithTaskOsTypeEnum | undefined;
    private 'os_version'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): TargetServerAssociatedWithTask {
        this['id'] = id;
        return this;
    }
    public withVmId(vmId: string): TargetServerAssociatedWithTask {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId() {
        return this['vm_id'];
    }
    public withName(name: string): TargetServerAssociatedWithTask {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): TargetServerAssociatedWithTask {
        this['ip'] = ip;
        return this;
    }
    public withOsType(osType: TargetServerAssociatedWithTaskOsTypeEnum): TargetServerAssociatedWithTask {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: TargetServerAssociatedWithTaskOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): TargetServerAssociatedWithTask {
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

/**
    * @export
    * @enum {string}
    */
export enum TargetServerAssociatedWithTaskOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
