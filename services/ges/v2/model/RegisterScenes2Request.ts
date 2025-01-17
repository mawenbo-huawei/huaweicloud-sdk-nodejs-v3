import { RegisterScenesReq } from './RegisterScenesReq';


export class RegisterScenes2Request {
    private 'graph_id': string | undefined;
    public body?: RegisterScenesReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): RegisterScenes2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: RegisterScenesReq): RegisterScenes2Request {
        this['body'] = body;
        return this;
    }
}