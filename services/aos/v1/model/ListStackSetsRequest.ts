

export class ListStackSetsRequest {
    private 'Client-Request-Id'?: string;
    public filter?: string;
    private 'sort_key'?: Array<ListStackSetsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListStackSetsRequestSortDirEnum> | Array<string>;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): ListStackSetsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withFilter(filter: string): ListStackSetsRequest {
        this['filter'] = filter;
        return this;
    }
    public withSortKey(sortKey: Array<ListStackSetsRequestSortKeyEnum> | Array<string>): ListStackSetsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListStackSetsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListStackSetsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListStackSetsRequestSortDirEnum> | Array<string>): ListStackSetsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListStackSetsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListStackSetsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStackSetsRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListStackSetsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
