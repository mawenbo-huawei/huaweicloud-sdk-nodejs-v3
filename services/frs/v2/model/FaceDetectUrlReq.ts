

export class FaceDetectUrlReq {
    private 'image_url': string | undefined;
    public attributes?: string;
    public constructor(imageUrl?: any) { 
        this['image_url'] = imageUrl;
    }
    public withImageUrl(imageUrl: string): FaceDetectUrlReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
    public withAttributes(attributes: string): FaceDetectUrlReq {
        this['attributes'] = attributes;
        return this;
    }
}