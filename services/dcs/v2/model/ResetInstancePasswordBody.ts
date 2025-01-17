

export class ResetInstancePasswordBody {
    private 'new_password'?: string | undefined;
    private 'no_password_access'?: boolean | undefined;
    public constructor() { 
    }
    public withNewPassword(newPassword: string): ResetInstancePasswordBody {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword() {
        return this['new_password'];
    }
    public withNoPasswordAccess(noPasswordAccess: boolean): ResetInstancePasswordBody {
        this['no_password_access'] = noPasswordAccess;
        return this;
    }
    public set noPasswordAccess(noPasswordAccess: boolean | undefined) {
        this['no_password_access'] = noPasswordAccess;
    }
    public get noPasswordAccess() {
        return this['no_password_access'];
    }
}