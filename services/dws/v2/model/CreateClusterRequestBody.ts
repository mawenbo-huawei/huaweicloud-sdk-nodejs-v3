import { CreateClusterInfo } from './CreateClusterInfo';


export class CreateClusterRequestBody {
    public cluster: CreateClusterInfo;
    public constructor(cluster?: any) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: CreateClusterInfo): CreateClusterRequestBody {
        this['cluster'] = cluster;
        return this;
    }
}