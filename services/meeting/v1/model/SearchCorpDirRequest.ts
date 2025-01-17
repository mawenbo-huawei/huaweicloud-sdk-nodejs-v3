

export class SearchCorpDirRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public deptCode?: string;
    public querySubDept?: boolean;
    public searchScope?: string;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchCorpDirRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchCorpDirRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchCorpDirRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpDirRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchCorpDirRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withDeptCode(deptCode: string): SearchCorpDirRequest {
        this['deptCode'] = deptCode;
        return this;
    }
    public withQuerySubDept(querySubDept: boolean): SearchCorpDirRequest {
        this['querySubDept'] = querySubDept;
        return this;
    }
    public withSearchScope(searchScope: string): SearchCorpDirRequest {
        this['searchScope'] = searchScope;
        return this;
    }
}