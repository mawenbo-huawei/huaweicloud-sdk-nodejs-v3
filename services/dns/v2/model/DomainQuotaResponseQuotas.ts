

export class DomainQuotaResponseQuotas {
    private 'quota_key': string | undefined;
    private 'quota_limit': number | undefined;
    public used: number;
    public unit: string;
    public constructor(quotaKey?: any, quotaLimit?: any, used?: any, unit?: any) { 
        this['quota_key'] = quotaKey;
        this['quota_limit'] = quotaLimit;
        this['used'] = used;
        this['unit'] = unit;
    }
    public withQuotaKey(quotaKey: string): DomainQuotaResponseQuotas {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: string | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey() {
        return this['quota_key'];
    }
    public withQuotaLimit(quotaLimit: number): DomainQuotaResponseQuotas {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit() {
        return this['quota_limit'];
    }
    public withUsed(used: number): DomainQuotaResponseQuotas {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): DomainQuotaResponseQuotas {
        this['unit'] = unit;
        return this;
    }
}