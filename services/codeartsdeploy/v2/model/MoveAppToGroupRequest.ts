import { MoveAppToGroupRequestBody } from './MoveAppToGroupRequestBody';


export class MoveAppToGroupRequest {
    private 'project_id'?: string;
    public body?: MoveAppToGroupRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): MoveAppToGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: MoveAppToGroupRequestBody): MoveAppToGroupRequest {
        this['body'] = body;
        return this;
    }
}