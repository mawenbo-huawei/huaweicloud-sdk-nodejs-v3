

export class BatchUpdateMembersOption {
    public id: string;
    private 'admin_state_up'?: boolean | undefined;
    public name?: string;
    private 'protocol_port'?: number | undefined;
    public weight?: number;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): BatchUpdateMembersOption {
        this['id'] = id;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): BatchUpdateMembersOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withName(name: string): BatchUpdateMembersOption {
        this['name'] = name;
        return this;
    }
    public withProtocolPort(protocolPort: number): BatchUpdateMembersOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withWeight(weight: number): BatchUpdateMembersOption {
        this['weight'] = weight;
        return this;
    }
}