

export class ShowRecordingFileDownloadUrlsRequest {
    public confUUID: string;
    public offset?: number;
    public limit?: number;
    private 'X-Authorization-Type'?: string | undefined;
    private 'X-Site-Id'?: string | undefined;
    public constructor(confUUID?: any) { 
        this['confUUID'] = confUUID;
    }
    public withConfUUID(confUUID: string): ShowRecordingFileDownloadUrlsRequest {
        this['confUUID'] = confUUID;
        return this;
    }
    public withOffset(offset: number): ShowRecordingFileDownloadUrlsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowRecordingFileDownloadUrlsRequest {
        this['limit'] = limit;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): ShowRecordingFileDownloadUrlsRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): ShowRecordingFileDownloadUrlsRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
}