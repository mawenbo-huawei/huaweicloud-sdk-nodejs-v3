

export class MetricConfig {
    public name?: string;
    public type?: string;
    public threshold?: number;
    public min?: number;
    public constructor() { 
    }
    public withName(name: string): MetricConfig {
        this['name'] = name;
        return this;
    }
    public withType(type: string): MetricConfig {
        this['type'] = type;
        return this;
    }
    public withThreshold(threshold: number): MetricConfig {
        this['threshold'] = threshold;
        return this;
    }
    public withMin(min: number): MetricConfig {
        this['min'] = min;
        return this;
    }
}