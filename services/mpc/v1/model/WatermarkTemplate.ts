import { ImageWatermark } from './ImageWatermark';


export class WatermarkTemplate {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string | undefined;
    private 'timeline_duration'?: string | undefined;
    private 'image_process'?: string | undefined;
    public width?: string;
    public height?: string;
    public base?: WatermarkTemplateBaseEnum;
    private 'template_id'?: number | undefined;
    private 'template_name'?: string | undefined;
    public type?: string;
    public constructor() { 
    }
    public withDx(dx: string): WatermarkTemplate {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): WatermarkTemplate {
        this['dy'] = dy;
        return this;
    }
    public withReferpos(referpos: string): WatermarkTemplate {
        this['referpos'] = referpos;
        return this;
    }
    public withTimelineStart(timelineStart: string): WatermarkTemplate {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): WatermarkTemplate {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration() {
        return this['timeline_duration'];
    }
    public withImageProcess(imageProcess: string): WatermarkTemplate {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: string | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess() {
        return this['image_process'];
    }
    public withWidth(width: string): WatermarkTemplate {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): WatermarkTemplate {
        this['height'] = height;
        return this;
    }
    public withBase(base: WatermarkTemplateBaseEnum): WatermarkTemplate {
        this['base'] = base;
        return this;
    }
    public withTemplateId(templateId: number): WatermarkTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): WatermarkTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withType(type: string): WatermarkTemplate {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WatermarkTemplateBaseEnum {
    INPUT = 'input',
    OUTPUT = 'output'
}
