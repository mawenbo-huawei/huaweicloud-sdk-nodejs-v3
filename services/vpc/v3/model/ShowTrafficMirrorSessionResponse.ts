import { TrafficMirrorSession } from './TrafficMirrorSession';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrafficMirrorSessionResponse extends SdkResponse {
    private 'traffic_mirror_session'?: TrafficMirrorSession;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorSession(trafficMirrorSession: TrafficMirrorSession): ShowTrafficMirrorSessionResponse {
        this['traffic_mirror_session'] = trafficMirrorSession;
        return this;
    }
    public set trafficMirrorSession(trafficMirrorSession: TrafficMirrorSession  | undefined) {
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public get trafficMirrorSession(): TrafficMirrorSession | undefined {
        return this['traffic_mirror_session'];
    }
    public withRequestId(requestId: string): ShowTrafficMirrorSessionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}