import { ExternalCreatePeerLink } from './ExternalCreatePeerLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePeerLinkResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'peer_link'?: ExternalCreatePeerLink;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreatePeerLinkResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPeerLink(peerLink: ExternalCreatePeerLink): CreatePeerLinkResponse {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: ExternalCreatePeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): ExternalCreatePeerLink | undefined {
        return this['peer_link'];
    }
    public withXRequestId(xRequestId: string): CreatePeerLinkResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}