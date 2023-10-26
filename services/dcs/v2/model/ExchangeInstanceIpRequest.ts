import { IpExchangeRequest } from './IpExchangeRequest';


export class ExchangeInstanceIpRequest {
    private 'task_id'?: string;
    public body?: IpExchangeRequest;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ExchangeInstanceIpRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: IpExchangeRequest): ExchangeInstanceIpRequest {
        this['body'] = body;
        return this;
    }
}