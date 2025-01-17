

export class AppAuth {
    public enable?: boolean;
    public expire?: number;
    private 'app_key'?: string | undefined;
    private 'update_time'?: string | undefined;
    public constructor() { 
    }
    public withEnable(enable: boolean): AppAuth {
        this['enable'] = enable;
        return this;
    }
    public withExpire(expire: number): AppAuth {
        this['expire'] = expire;
        return this;
    }
    public withAppKey(appKey: string): AppAuth {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey() {
        return this['app_key'];
    }
    public withUpdateTime(updateTime: string): AppAuth {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}