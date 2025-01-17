import { Config } from './Config';


export class ComponentConfig {
    private 'component_name': string | undefined;
    public configs?: Array<Config>;
    public constructor(componentName?: any) { 
        this['component_name'] = componentName;
    }
    public withComponentName(componentName: string): ComponentConfig {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName() {
        return this['component_name'];
    }
    public withConfigs(configs: Array<Config>): ComponentConfig {
        this['configs'] = configs;
        return this;
    }
}