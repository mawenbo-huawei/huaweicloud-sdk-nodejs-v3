import { PrivateModuleVersion } from './PrivateModuleVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateModuleVersionMetadataResponse extends SdkResponse {
    private 'module_name'?: string;
    private 'module_id'?: string;
    private 'module_version'?: string;
    private 'version_description'?: string;
    private 'create_time'?: string;
    private 'module_source'?: string;
    public constructor(moduleName?: string) { 
        super();
        this['module_name'] = moduleName;
    }
    public withModuleName(moduleName: string): ShowPrivateModuleVersionMetadataResponse {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleId(moduleId: string): ShowPrivateModuleVersionMetadataResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withModuleVersion(moduleVersion: string): ShowPrivateModuleVersionMetadataResponse {
        this['module_version'] = moduleVersion;
        return this;
    }
    public set moduleVersion(moduleVersion: string  | undefined) {
        this['module_version'] = moduleVersion;
    }
    public get moduleVersion(): string | undefined {
        return this['module_version'];
    }
    public withVersionDescription(versionDescription: string): ShowPrivateModuleVersionMetadataResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withCreateTime(createTime: string): ShowPrivateModuleVersionMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withModuleSource(moduleSource: string): ShowPrivateModuleVersionMetadataResponse {
        this['module_source'] = moduleSource;
        return this;
    }
    public set moduleSource(moduleSource: string  | undefined) {
        this['module_source'] = moduleSource;
    }
    public get moduleSource(): string | undefined {
        return this['module_source'];
    }
}