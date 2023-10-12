

export class VideoConfig {
    private 'clip_mode'?: VideoConfigClipModeEnum | string;
    public codec?: VideoConfigCodecEnum | string;
    public bitrate?: number;
    public width?: number;
    public height?: number;
    private 'frame_rate'?: VideoConfigFrameRateEnum | string;
    private 'is_subtitle_enable'?: boolean;
    private 'disable_system_watermark'?: boolean;
    public dx?: number;
    public dy?: number;
    public constructor(codec?: string, bitrate?: number, width?: number, height?: number) { 
        this['codec'] = codec;
        this['bitrate'] = bitrate;
        this['width'] = width;
        this['height'] = height;
    }
    public withClipMode(clipMode: VideoConfigClipModeEnum | string): VideoConfig {
        this['clip_mode'] = clipMode;
        return this;
    }
    public set clipMode(clipMode: VideoConfigClipModeEnum | string  | undefined) {
        this['clip_mode'] = clipMode;
    }
    public get clipMode(): VideoConfigClipModeEnum | string | undefined {
        return this['clip_mode'];
    }
    public withCodec(codec: VideoConfigCodecEnum | string): VideoConfig {
        this['codec'] = codec;
        return this;
    }
    public withBitrate(bitrate: number): VideoConfig {
        this['bitrate'] = bitrate;
        return this;
    }
    public withWidth(width: number): VideoConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoConfig {
        this['height'] = height;
        return this;
    }
    public withFrameRate(frameRate: VideoConfigFrameRateEnum | string): VideoConfig {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: VideoConfigFrameRateEnum | string  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): VideoConfigFrameRateEnum | string | undefined {
        return this['frame_rate'];
    }
    public withIsSubtitleEnable(isSubtitleEnable: boolean): VideoConfig {
        this['is_subtitle_enable'] = isSubtitleEnable;
        return this;
    }
    public set isSubtitleEnable(isSubtitleEnable: boolean  | undefined) {
        this['is_subtitle_enable'] = isSubtitleEnable;
    }
    public get isSubtitleEnable(): boolean | undefined {
        return this['is_subtitle_enable'];
    }
    public withDisableSystemWatermark(disableSystemWatermark: boolean): VideoConfig {
        this['disable_system_watermark'] = disableSystemWatermark;
        return this;
    }
    public set disableSystemWatermark(disableSystemWatermark: boolean  | undefined) {
        this['disable_system_watermark'] = disableSystemWatermark;
    }
    public get disableSystemWatermark(): boolean | undefined {
        return this['disable_system_watermark'];
    }
    public withDx(dx: number): VideoConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): VideoConfig {
        this['dy'] = dy;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoConfigClipModeEnum {
    RESIZE = 'RESIZE',
    CROP = 'CROP'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoConfigCodecEnum {
    H264 = 'H264',
    VP8 = 'VP8'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoConfigFrameRateEnum {
    E_24 = '24',
    E_25 = '25',
    E_30 = '30'
}
