import { GetHostGroupListTag } from './GetHostGroupListTag';


export class GetHostGroupListFilter {
    private 'host_group_type'?: GetHostGroupListFilterHostGroupTypeEnum | undefined;
    private 'host_group_name_list'?: Array<string> | undefined;
    private 'host_name_list'?: Array<string> | undefined;
    private 'host_group_tag'?: GetHostGroupListTag | undefined;
    public constructor() { 
    }
    public withHostGroupType(hostGroupType: GetHostGroupListFilterHostGroupTypeEnum): GetHostGroupListFilter {
        this['host_group_type'] = hostGroupType;
        return this;
    }
    public set hostGroupType(hostGroupType: GetHostGroupListFilterHostGroupTypeEnum | undefined) {
        this['host_group_type'] = hostGroupType;
    }
    public get hostGroupType() {
        return this['host_group_type'];
    }
    public withHostGroupNameList(hostGroupNameList: Array<string>): GetHostGroupListFilter {
        this['host_group_name_list'] = hostGroupNameList;
        return this;
    }
    public set hostGroupNameList(hostGroupNameList: Array<string> | undefined) {
        this['host_group_name_list'] = hostGroupNameList;
    }
    public get hostGroupNameList() {
        return this['host_group_name_list'];
    }
    public withHostNameList(hostNameList: Array<string>): GetHostGroupListFilter {
        this['host_name_list'] = hostNameList;
        return this;
    }
    public set hostNameList(hostNameList: Array<string> | undefined) {
        this['host_name_list'] = hostNameList;
    }
    public get hostNameList() {
        return this['host_name_list'];
    }
    public withHostGroupTag(hostGroupTag: GetHostGroupListTag): GetHostGroupListFilter {
        this['host_group_tag'] = hostGroupTag;
        return this;
    }
    public set hostGroupTag(hostGroupTag: GetHostGroupListTag | undefined) {
        this['host_group_tag'] = hostGroupTag;
    }
    public get hostGroupTag() {
        return this['host_group_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHostGroupListFilterHostGroupTypeEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
