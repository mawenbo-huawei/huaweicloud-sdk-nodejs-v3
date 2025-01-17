

export class ParameterInfo {
    public id?: string;
    public name: string;
    private 'default_value': string | undefined;
    private 'value_type': string | undefined;
    private 'running_value': string | undefined;
    public unit: string;
    public reboot: boolean;
    private 'value_range': string | undefined;
    public description: string;
    public constructor(name?: any, defaultValue?: any, valueType?: any, runningValue?: any, unit?: any, reboot?: any, valueRange?: any, description?: any) { 
        this['name'] = name;
        this['default_value'] = defaultValue;
        this['value_type'] = valueType;
        this['running_value'] = runningValue;
        this['unit'] = unit;
        this['reboot'] = reboot;
        this['value_range'] = valueRange;
        this['description'] = description;
    }
    public withId(id: string): ParameterInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ParameterInfo {
        this['name'] = name;
        return this;
    }
    public withDefaultValue(defaultValue: string): ParameterInfo {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue() {
        return this['default_value'];
    }
    public withValueType(valueType: string): ParameterInfo {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType() {
        return this['value_type'];
    }
    public withRunningValue(runningValue: string): ParameterInfo {
        this['running_value'] = runningValue;
        return this;
    }
    public set runningValue(runningValue: string | undefined) {
        this['running_value'] = runningValue;
    }
    public get runningValue() {
        return this['running_value'];
    }
    public withUnit(unit: string): ParameterInfo {
        this['unit'] = unit;
        return this;
    }
    public withReboot(reboot: boolean): ParameterInfo {
        this['reboot'] = reboot;
        return this;
    }
    public withValueRange(valueRange: string): ParameterInfo {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange() {
        return this['value_range'];
    }
    public withDescription(description: string): ParameterInfo {
        this['description'] = description;
        return this;
    }
}