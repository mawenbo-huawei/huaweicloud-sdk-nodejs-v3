

export class DeleteHotkeyScanTaskRequest {
    private 'instance_id': string | undefined;
    private 'hotkey_id': string | undefined;
    public constructor(instanceId?: any, hotkeyId?: any) { 
        this['instance_id'] = instanceId;
        this['hotkey_id'] = hotkeyId;
    }
    public withInstanceId(instanceId: string): DeleteHotkeyScanTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withHotkeyId(hotkeyId: string): DeleteHotkeyScanTaskRequest {
        this['hotkey_id'] = hotkeyId;
        return this;
    }
    public set hotkeyId(hotkeyId: string | undefined) {
        this['hotkey_id'] = hotkeyId;
    }
    public get hotkeyId() {
        return this['hotkey_id'];
    }
}