import { StartTaskGroupReq } from './StartTaskGroupReq';


export class StartTaskGroupRequest {
    private 'group_id': string | undefined;
    public body?: StartTaskGroupReq;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): StartTaskGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withBody(body: StartTaskGroupReq): StartTaskGroupRequest {
        this['body'] = body;
        return this;
    }
}