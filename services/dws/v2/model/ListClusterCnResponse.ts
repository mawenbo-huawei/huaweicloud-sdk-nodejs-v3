import { CoordinatorNode } from './CoordinatorNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterCnResponse extends SdkResponse {
    private 'min_num'?: number | undefined;
    private 'max_num'?: number | undefined;
    public instances?: Array<CoordinatorNode>;
    public constructor() { 
        super();
    }
    public withMinNum(minNum: number): ListClusterCnResponse {
        this['min_num'] = minNum;
        return this;
    }
    public set minNum(minNum: number | undefined) {
        this['min_num'] = minNum;
    }
    public get minNum() {
        return this['min_num'];
    }
    public withMaxNum(maxNum: number): ListClusterCnResponse {
        this['max_num'] = maxNum;
        return this;
    }
    public set maxNum(maxNum: number | undefined) {
        this['max_num'] = maxNum;
    }
    public get maxNum() {
        return this['max_num'];
    }
    public withInstances(instances: Array<CoordinatorNode>): ListClusterCnResponse {
        this['instances'] = instances;
        return this;
    }
}