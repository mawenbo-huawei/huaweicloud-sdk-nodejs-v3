

export class DeleteGraph2Request {
    private 'graph_id': string | undefined;
    private 'keep_backup'?: boolean | undefined;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): DeleteGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withKeepBackup(keepBackup: boolean): DeleteGraph2Request {
        this['keep_backup'] = keepBackup;
        return this;
    }
    public set keepBackup(keepBackup: boolean | undefined) {
        this['keep_backup'] = keepBackup;
    }
    public get keepBackup() {
        return this['keep_backup'];
    }
}