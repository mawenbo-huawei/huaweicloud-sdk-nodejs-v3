

export class DeleteLayoutRequest {
    public conferenceID: string;
    public uuID: string;
    private 'X-Conference-Authorization': string | undefined;
    public constructor(conferenceID?: any, uuID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['uuID'] = uuID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): DeleteLayoutRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withUuID(uuID: string): DeleteLayoutRequest {
        this['uuID'] = uuID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): DeleteLayoutRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
}