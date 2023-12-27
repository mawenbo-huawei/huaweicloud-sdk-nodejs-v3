

export class PlayPolicy {
    private 'repeat_count'?: number;
    private 'auto_play_script'?: boolean;
    private 'play_mode'?: PlayPolicyPlayModeEnum | string;
    private 'random_play_mode'?: PlayPolicyRandomPlayModeEnum | string;
    public constructor() { 
    }
    public withRepeatCount(repeatCount: number): PlayPolicy {
        this['repeat_count'] = repeatCount;
        return this;
    }
    public set repeatCount(repeatCount: number  | undefined) {
        this['repeat_count'] = repeatCount;
    }
    public get repeatCount(): number | undefined {
        return this['repeat_count'];
    }
    public withAutoPlayScript(autoPlayScript: boolean): PlayPolicy {
        this['auto_play_script'] = autoPlayScript;
        return this;
    }
    public set autoPlayScript(autoPlayScript: boolean  | undefined) {
        this['auto_play_script'] = autoPlayScript;
    }
    public get autoPlayScript(): boolean | undefined {
        return this['auto_play_script'];
    }
    public withPlayMode(playMode: PlayPolicyPlayModeEnum | string): PlayPolicy {
        this['play_mode'] = playMode;
        return this;
    }
    public set playMode(playMode: PlayPolicyPlayModeEnum | string  | undefined) {
        this['play_mode'] = playMode;
    }
    public get playMode(): PlayPolicyPlayModeEnum | string | undefined {
        return this['play_mode'];
    }
    public withRandomPlayMode(randomPlayMode: PlayPolicyRandomPlayModeEnum | string): PlayPolicy {
        this['random_play_mode'] = randomPlayMode;
        return this;
    }
    public set randomPlayMode(randomPlayMode: PlayPolicyRandomPlayModeEnum | string  | undefined) {
        this['random_play_mode'] = randomPlayMode;
    }
    public get randomPlayMode(): PlayPolicyRandomPlayModeEnum | string | undefined {
        return this['random_play_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PlayPolicyPlayModeEnum {
    TEXT = 'TEXT',
    AUDIO = 'AUDIO'
}
/**
    * @export
    * @enum {string}
    */
export enum PlayPolicyRandomPlayModeEnum {
    NONE = 'NONE',
    SCENE = 'SCENE',
    SCRIPT_ITEM = 'SCRIPT_ITEM',
    SCENE_AND_SCRIPT_ITEM = 'SCENE_AND_SCRIPT_ITEM'
}
