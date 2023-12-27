

export class CreateShrinkageJobRequestBody {
    private 'new_broker_num'?: string;
    public constructor() { 
    }
    public withNewBrokerNum(newBrokerNum: string): CreateShrinkageJobRequestBody {
        this['new_broker_num'] = newBrokerNum;
        return this;
    }
    public set newBrokerNum(newBrokerNum: string  | undefined) {
        this['new_broker_num'] = newBrokerNum;
    }
    public get newBrokerNum(): string | undefined {
        return this['new_broker_num'];
    }
}