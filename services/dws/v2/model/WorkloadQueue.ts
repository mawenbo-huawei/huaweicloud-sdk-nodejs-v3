import { WorkloadResource } from './WorkloadResource';


export class WorkloadQueue {
    private 'workload_queue_name': string | undefined;
    private 'logical_cluster_name'?: string | undefined;
    private 'workload_resource_item_list': Array<WorkloadResource> | undefined;
    public constructor(workloadQueueName?: any, workloadResourceItemList?: any) { 
        this['workload_queue_name'] = workloadQueueName;
        this['workload_resource_item_list'] = workloadResourceItemList;
    }
    public withWorkloadQueueName(workloadQueueName: string): WorkloadQueue {
        this['workload_queue_name'] = workloadQueueName;
        return this;
    }
    public set workloadQueueName(workloadQueueName: string | undefined) {
        this['workload_queue_name'] = workloadQueueName;
    }
    public get workloadQueueName() {
        return this['workload_queue_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): WorkloadQueue {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName() {
        return this['logical_cluster_name'];
    }
    public withWorkloadResourceItemList(workloadResourceItemList: Array<WorkloadResource>): WorkloadQueue {
        this['workload_resource_item_list'] = workloadResourceItemList;
        return this;
    }
    public set workloadResourceItemList(workloadResourceItemList: Array<WorkloadResource> | undefined) {
        this['workload_resource_item_list'] = workloadResourceItemList;
    }
    public get workloadResourceItemList() {
        return this['workload_resource_item_list'];
    }
}