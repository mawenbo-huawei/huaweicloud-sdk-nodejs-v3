

export class GeneralTextRequestBody {
    public image?: string;
    public url?: string;
    private 'detect_direction'?: boolean | undefined;
    private 'quick_mode'?: boolean | undefined;
    private 'character_mode'?: boolean | undefined;
    public language?: string;
    private 'single_orientation_mode'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): GeneralTextRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): GeneralTextRequestBody {
        this['url'] = url;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): GeneralTextRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection() {
        return this['detect_direction'];
    }
    public withQuickMode(quickMode: boolean): GeneralTextRequestBody {
        this['quick_mode'] = quickMode;
        return this;
    }
    public set quickMode(quickMode: boolean | undefined) {
        this['quick_mode'] = quickMode;
    }
    public get quickMode() {
        return this['quick_mode'];
    }
    public withCharacterMode(characterMode: boolean): GeneralTextRequestBody {
        this['character_mode'] = characterMode;
        return this;
    }
    public set characterMode(characterMode: boolean | undefined) {
        this['character_mode'] = characterMode;
    }
    public get characterMode() {
        return this['character_mode'];
    }
    public withLanguage(language: string): GeneralTextRequestBody {
        this['language'] = language;
        return this;
    }
    public withSingleOrientationMode(singleOrientationMode: boolean): GeneralTextRequestBody {
        this['single_orientation_mode'] = singleOrientationMode;
        return this;
    }
    public set singleOrientationMode(singleOrientationMode: boolean | undefined) {
        this['single_orientation_mode'] = singleOrientationMode;
    }
    public get singleOrientationMode() {
        return this['single_orientation_mode'];
    }
}