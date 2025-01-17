import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';


export class AddonInstance {
    public kind: string;
    public apiVersion: string;
    public metadata?: AddonMetadata;
    public spec: InstanceSpec;
    public status: AddonInstanceStatus;
    public constructor(kind?: any, apiVersion?: any, spec?: any, status?: any) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
        this['status'] = status;
    }
    public withKind(kind: string): AddonInstance {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AddonInstance {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AddonMetadata): AddonInstance {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: InstanceSpec): AddonInstance {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): AddonInstance {
        this['status'] = status;
        return this;
    }
}