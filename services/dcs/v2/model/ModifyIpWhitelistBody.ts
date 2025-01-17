import { Whitelist } from './Whitelist';


export class ModifyIpWhitelistBody {
    private 'instance_id'?: string | undefined;
    private 'enable_whitelist': boolean | undefined;
    public whitelist: Array<Whitelist>;
    public constructor(enableWhitelist?: any, whitelist?: any) { 
        this['enable_whitelist'] = enableWhitelist;
        this['whitelist'] = whitelist;
    }
    public withInstanceId(instanceId: string): ModifyIpWhitelistBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withEnableWhitelist(enableWhitelist: boolean): ModifyIpWhitelistBody {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: Array<Whitelist>): ModifyIpWhitelistBody {
        this['whitelist'] = whitelist;
        return this;
    }
}