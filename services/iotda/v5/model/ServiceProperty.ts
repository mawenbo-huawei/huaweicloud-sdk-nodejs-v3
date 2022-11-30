

export class ServiceProperty {
    private 'property_name': string | undefined;
    private 'data_type': string | undefined;
    public required?: boolean;
    private 'enum_list'?: Array<string> | undefined;
    public min?: string;
    public max?: string;
    private 'max_length'?: number | undefined;
    public step?: number;
    public unit?: string;
    public method: string;
    public description?: string;
    private 'default_value'?: object | undefined;
    public constructor(propertyName?: any, dataType?: any, method?: any) { 
        this['property_name'] = propertyName;
        this['data_type'] = dataType;
        this['method'] = method;
    }
    public withPropertyName(propertyName: string): ServiceProperty {
        this['property_name'] = propertyName;
        return this;
    }
    public set propertyName(propertyName: string | undefined) {
        this['property_name'] = propertyName;
    }
    public get propertyName() {
        return this['property_name'];
    }
    public withDataType(dataType: string): ServiceProperty {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType() {
        return this['data_type'];
    }
    public withRequired(required: boolean): ServiceProperty {
        this['required'] = required;
        return this;
    }
    public withEnumList(enumList: Array<string>): ServiceProperty {
        this['enum_list'] = enumList;
        return this;
    }
    public set enumList(enumList: Array<string> | undefined) {
        this['enum_list'] = enumList;
    }
    public get enumList() {
        return this['enum_list'];
    }
    public withMin(min: string): ServiceProperty {
        this['min'] = min;
        return this;
    }
    public withMax(max: string): ServiceProperty {
        this['max'] = max;
        return this;
    }
    public withMaxLength(maxLength: number): ServiceProperty {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength() {
        return this['max_length'];
    }
    public withStep(step: number): ServiceProperty {
        this['step'] = step;
        return this;
    }
    public withUnit(unit: string): ServiceProperty {
        this['unit'] = unit;
        return this;
    }
    public withMethod(method: string): ServiceProperty {
        this['method'] = method;
        return this;
    }
    public withDescription(description: string): ServiceProperty {
        this['description'] = description;
        return this;
    }
    public withDefaultValue(defaultValue: object): ServiceProperty {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: object | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue() {
        return this['default_value'];
    }
}