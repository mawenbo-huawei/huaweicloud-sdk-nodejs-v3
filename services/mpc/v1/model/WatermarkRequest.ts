import { ImageWatermark } from './ImageWatermark';
import { ObsObjInfo } from './ObsObjInfo';
import { TextWatermark } from './TextWatermark';


export class WatermarkRequest {
    public input?: ObsObjInfo;
    private 'template_id'?: string | undefined;
    private 'text_context'?: string | undefined;
    private 'image_watermark'?: ImageWatermark | undefined;
    private 'text_watermark'?: TextWatermark | undefined;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): WatermarkRequest {
        this['input'] = input;
        return this;
    }
    public withTemplateId(templateId: string): WatermarkRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTextContext(textContext: string): WatermarkRequest {
        this['text_context'] = textContext;
        return this;
    }
    public set textContext(textContext: string | undefined) {
        this['text_context'] = textContext;
    }
    public get textContext() {
        return this['text_context'];
    }
    public withImageWatermark(imageWatermark: ImageWatermark): WatermarkRequest {
        this['image_watermark'] = imageWatermark;
        return this;
    }
    public set imageWatermark(imageWatermark: ImageWatermark | undefined) {
        this['image_watermark'] = imageWatermark;
    }
    public get imageWatermark() {
        return this['image_watermark'];
    }
    public withTextWatermark(textWatermark: TextWatermark): WatermarkRequest {
        this['text_watermark'] = textWatermark;
        return this;
    }
    public set textWatermark(textWatermark: TextWatermark | undefined) {
        this['text_watermark'] = textWatermark;
    }
    public get textWatermark() {
        return this['text_watermark'];
    }
}