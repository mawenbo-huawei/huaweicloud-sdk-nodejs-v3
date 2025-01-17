import { CommonCreateTaskReq } from './CommonCreateTaskReq';
import { ObsObjInfo } from './ObsObjInfo';


export class CreateExtractTaskReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'user_data'?: string | undefined;
    public sync?: number;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CreateExtractTaskReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateExtractTaskReq {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): CreateExtractTaskReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withSync(sync: number): CreateExtractTaskReq {
        this['sync'] = sync;
        return this;
    }
}