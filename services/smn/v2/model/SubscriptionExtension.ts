

export class SubscriptionExtension {
    private 'client_id'?: string | undefined;
    private 'client_secret'?: string | undefined;
    public keyword?: string;
    private 'sign_secret'?: string | undefined;
    public constructor() { 
    }
    public withClientId(clientId: string): SubscriptionExtension {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId() {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): SubscriptionExtension {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret() {
        return this['client_secret'];
    }
    public withKeyword(keyword: string): SubscriptionExtension {
        this['keyword'] = keyword;
        return this;
    }
    public withSignSecret(signSecret: string): SubscriptionExtension {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret() {
        return this['sign_secret'];
    }
}