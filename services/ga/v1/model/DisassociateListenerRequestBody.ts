

export class DisassociateListenerRequestBody {
    private 'listener_id': string | undefined;
    public constructor(listenerId?: any) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): DisassociateListenerRequestBody {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
}