import { FlinkMetric } from './FlinkMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlinkMetricResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public metrics?: FlinkMetric;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowFlinkMetricResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowFlinkMetricResponse {
        this['message'] = message;
        return this;
    }
    public withMetrics(metrics: FlinkMetric): ShowFlinkMetricResponse {
        this['metrics'] = metrics;
        return this;
    }
}