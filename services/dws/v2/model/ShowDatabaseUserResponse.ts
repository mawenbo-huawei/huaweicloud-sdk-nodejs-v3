
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseUserResponse extends SdkResponse {
    public login?: boolean;
    public createrole?: boolean;
    public createdb?: boolean;
    public systemadmin?: boolean;
    public auditadmin?: boolean;
    public inherit?: boolean;
    public useft?: boolean;
    private 'conn_limit'?: number | undefined;
    public replication?: boolean;
    private 'valid_begin'?: number | undefined;
    private 'valid_until'?: number | undefined;
    public lock?: boolean;
    public constructor() { 
        super();
    }
    public withLogin(login: boolean): ShowDatabaseUserResponse {
        this['login'] = login;
        return this;
    }
    public withCreaterole(createrole: boolean): ShowDatabaseUserResponse {
        this['createrole'] = createrole;
        return this;
    }
    public withCreatedb(createdb: boolean): ShowDatabaseUserResponse {
        this['createdb'] = createdb;
        return this;
    }
    public withSystemadmin(systemadmin: boolean): ShowDatabaseUserResponse {
        this['systemadmin'] = systemadmin;
        return this;
    }
    public withAuditadmin(auditadmin: boolean): ShowDatabaseUserResponse {
        this['auditadmin'] = auditadmin;
        return this;
    }
    public withInherit(inherit: boolean): ShowDatabaseUserResponse {
        this['inherit'] = inherit;
        return this;
    }
    public withUseft(useft: boolean): ShowDatabaseUserResponse {
        this['useft'] = useft;
        return this;
    }
    public withConnLimit(connLimit: number): ShowDatabaseUserResponse {
        this['conn_limit'] = connLimit;
        return this;
    }
    public set connLimit(connLimit: number | undefined) {
        this['conn_limit'] = connLimit;
    }
    public get connLimit() {
        return this['conn_limit'];
    }
    public withReplication(replication: boolean): ShowDatabaseUserResponse {
        this['replication'] = replication;
        return this;
    }
    public withValidBegin(validBegin: number): ShowDatabaseUserResponse {
        this['valid_begin'] = validBegin;
        return this;
    }
    public set validBegin(validBegin: number | undefined) {
        this['valid_begin'] = validBegin;
    }
    public get validBegin() {
        return this['valid_begin'];
    }
    public withValidUntil(validUntil: number): ShowDatabaseUserResponse {
        this['valid_until'] = validUntil;
        return this;
    }
    public set validUntil(validUntil: number | undefined) {
        this['valid_until'] = validUntil;
    }
    public get validUntil() {
        return this['valid_until'];
    }
    public withLock(lock: boolean): ShowDatabaseUserResponse {
        this['lock'] = lock;
        return this;
    }
}