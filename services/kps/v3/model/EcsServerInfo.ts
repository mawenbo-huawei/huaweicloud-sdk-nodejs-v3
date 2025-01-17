import { Auth } from './Auth';


export class EcsServerInfo {
    public id: string;
    public auth?: Auth;
    private 'disable_password'?: boolean | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): EcsServerInfo {
        this['id'] = id;
        return this;
    }
    public withAuth(auth: Auth): EcsServerInfo {
        this['auth'] = auth;
        return this;
    }
    public withDisablePassword(disablePassword: boolean): EcsServerInfo {
        this['disable_password'] = disablePassword;
        return this;
    }
    public set disablePassword(disablePassword: boolean | undefined) {
        this['disable_password'] = disablePassword;
    }
    public get disablePassword() {
        return this['disable_password'];
    }
}