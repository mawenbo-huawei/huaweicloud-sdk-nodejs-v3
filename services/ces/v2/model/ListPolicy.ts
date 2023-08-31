import { MetricExtraInfo } from './MetricExtraInfo';


export class ListPolicy {
    private 'metric_name'?: string;
    private 'extra_info'?: MetricExtraInfo;
    public period?: number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    public unit?: string;
    public type?: string;
    public count?: number;
    private 'suppress_duration'?: number;
    public level?: number;
    public constructor(metricName?: string, period?: number, filter?: string, comparisonOperator?: string, value?: number, count?: number) { 
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['value'] = value;
        this['count'] = count;
    }
    public withMetricName(metricName: string): ListPolicy {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withExtraInfo(extraInfo: MetricExtraInfo): ListPolicy {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: MetricExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): MetricExtraInfo | undefined {
        return this['extra_info'];
    }
    public withPeriod(period: number): ListPolicy {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): ListPolicy {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): ListPolicy {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): ListPolicy {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): ListPolicy {
        this['unit'] = unit;
        return this;
    }
    public withType(type: string): ListPolicy {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): ListPolicy {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: number): ListPolicy {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): number | undefined {
        return this['suppress_duration'];
    }
    public withLevel(level: number): ListPolicy {
        this['level'] = level;
        return this;
    }
}