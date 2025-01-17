import { WorkloadStatus } from './WorkloadStatus';


export class WorkloadStatusReq {
    private 'workload_status'?: WorkloadStatus | undefined;
    public constructor() { 
    }
    public withWorkloadStatus(workloadStatus: WorkloadStatus): WorkloadStatusReq {
        this['workload_status'] = workloadStatus;
        return this;
    }
    public set workloadStatus(workloadStatus: WorkloadStatus | undefined) {
        this['workload_status'] = workloadStatus;
    }
    public get workloadStatus() {
        return this['workload_status'];
    }
}