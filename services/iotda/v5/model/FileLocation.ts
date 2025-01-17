import { ObsLocation } from './ObsLocation';


export class FileLocation {
    private 'obs_location'?: ObsLocation | undefined;
    public constructor() { 
    }
    public withObsLocation(obsLocation: ObsLocation): FileLocation {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: ObsLocation | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation() {
        return this['obs_location'];
    }
}