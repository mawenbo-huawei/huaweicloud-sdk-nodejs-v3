

export class DetectLiveByFileIntlRequestBody {
    private 'video_file': any | undefined;
    public actions: string;
    private 'action_time'?: string | undefined;
    public constructor(videoFile?: any, actions?: any) { 
        this['video_file'] = videoFile;
        this['actions'] = actions;
    }
    public withVideoFile(videoFile: any): DetectLiveByFileIntlRequestBody {
        this['video_file'] = videoFile;
        return this;
    }
    public set videoFile(videoFile: any | undefined) {
        this['video_file'] = videoFile;
    }
    public get videoFile() {
        return this['video_file'];
    }
    public withActions(actions: string): DetectLiveByFileIntlRequestBody {
        this['actions'] = actions;
        return this;
    }
    public withActionTime(actionTime: string): DetectLiveByFileIntlRequestBody {
        this['action_time'] = actionTime;
        return this;
    }
    public set actionTime(actionTime: string | undefined) {
        this['action_time'] = actionTime;
    }
    public get actionTime() {
        return this['action_time'];
    }
}