import { Event } from './Event';


export class DeleteActiveAlarmsRequestBody {
    public events: Array<Event>;
    public constructor(events?: any) { 
        this['events'] = events;
    }
    public withEvents(events: Array<Event>): DeleteActiveAlarmsRequestBody {
        this['events'] = events;
        return this;
    }
}