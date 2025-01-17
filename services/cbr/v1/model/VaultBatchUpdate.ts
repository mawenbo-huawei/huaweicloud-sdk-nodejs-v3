

export class VaultBatchUpdate {
    private 'smn_notify'?: boolean | undefined;
    public threshold?: number;
    public constructor() { 
    }
    public withSmnNotify(smnNotify: boolean): VaultBatchUpdate {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify() {
        return this['smn_notify'];
    }
    public withThreshold(threshold: number): VaultBatchUpdate {
        this['threshold'] = threshold;
        return this;
    }
}