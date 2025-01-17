

export class NodeTypeElasticVolumeSpecs {
    public type: string;
    public step: string;
    private 'min_size': number | undefined;
    private 'max_size': number | undefined;
    public constructor(type?: any, step?: any, minSize?: any, maxSize?: any) { 
        this['type'] = type;
        this['step'] = step;
        this['min_size'] = minSize;
        this['max_size'] = maxSize;
    }
    public withType(type: string): NodeTypeElasticVolumeSpecs {
        this['type'] = type;
        return this;
    }
    public withStep(step: string): NodeTypeElasticVolumeSpecs {
        this['step'] = step;
        return this;
    }
    public withMinSize(minSize: number): NodeTypeElasticVolumeSpecs {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize() {
        return this['min_size'];
    }
    public withMaxSize(maxSize: number): NodeTypeElasticVolumeSpecs {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize() {
        return this['max_size'];
    }
}