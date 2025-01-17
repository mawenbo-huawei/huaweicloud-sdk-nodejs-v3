import { PolicyTriggerPropertiesReq } from './PolicyTriggerPropertiesReq';


export class PolicyTriggerReq {
    public properties: PolicyTriggerPropertiesReq;
    public constructor(properties?: any) { 
        this['properties'] = properties;
    }
    public withProperties(properties: PolicyTriggerPropertiesReq): PolicyTriggerReq {
        this['properties'] = properties;
        return this;
    }
}