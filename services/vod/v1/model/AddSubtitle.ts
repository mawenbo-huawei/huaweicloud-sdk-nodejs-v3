import { ObsInfo } from './ObsInfo';


export class AddSubtitle {
    public type: AddSubtitleTypeEnum;
    public language: string;
    private 'obs_info': ObsInfo | undefined;
    public constructor(type?: any, language?: any, obsInfo?: any) { 
        this['type'] = type;
        this['language'] = language;
        this['obs_info'] = obsInfo;
    }
    public withType(type: AddSubtitleTypeEnum): AddSubtitle {
        this['type'] = type;
        return this;
    }
    public withLanguage(language: string): AddSubtitle {
        this['language'] = language;
        return this;
    }
    public withObsInfo(obsInfo: ObsInfo): AddSubtitle {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo() {
        return this['obs_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddSubtitleTypeEnum {
    VTT = 'VTT'
}
