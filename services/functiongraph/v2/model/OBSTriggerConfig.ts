

export class OBSTriggerConfig {
    public bucket: string;
    public events: Array<string>;
    public prefix: string;
    public suffix: string;
    public constructor(bucket?: any, events?: any, prefix?: any, suffix?: any) { 
        this['bucket'] = bucket;
        this['events'] = events;
        this['prefix'] = prefix;
        this['suffix'] = suffix;
    }
    public withBucket(bucket: string): OBSTriggerConfig {
        this['bucket'] = bucket;
        return this;
    }
    public withEvents(events: Array<string>): OBSTriggerConfig {
        this['events'] = events;
        return this;
    }
    public withPrefix(prefix: string): OBSTriggerConfig {
        this['prefix'] = prefix;
        return this;
    }
    public withSuffix(suffix: string): OBSTriggerConfig {
        this['suffix'] = suffix;
        return this;
    }
}