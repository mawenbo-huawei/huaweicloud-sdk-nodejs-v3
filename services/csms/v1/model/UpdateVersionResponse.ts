import { VersionMetadata } from './VersionMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVersionResponse extends SdkResponse {
    private 'version_metadata'?: VersionMetadata;
    public constructor() { 
        super();
    }
    public withVersionMetadata(versionMetadata: VersionMetadata): UpdateVersionResponse {
        this['version_metadata'] = versionMetadata;
        return this;
    }
    public set versionMetadata(versionMetadata: VersionMetadata  | undefined) {
        this['version_metadata'] = versionMetadata;
    }
    public get versionMetadata(): VersionMetadata | undefined {
        return this['version_metadata'];
    }
}