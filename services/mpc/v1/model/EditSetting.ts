import { AvParameters } from './AvParameters';
import { ImageWatermarkSetting } from './ImageWatermarkSetting';
import { MosaicInfo } from './MosaicInfo';
import { ObsObjInfo } from './ObsObjInfo';


export class EditSetting {
    private 'timeline_start'?: string | undefined;
    private 'timeline_end'?: string | undefined;
    private 'trans_template_id'?: number | undefined;
    private 'av_parameter'?: AvParameters | undefined;
    public mosaics?: Array<MosaicInfo>;
    private 'image_watermarks'?: Array<ImageWatermarkSetting> | undefined;
    public heads?: Array<ObsObjInfo>;
    public tails?: Array<ObsObjInfo>;
    public output: ObsObjInfo;
    public constructor(output?: any) { 
        this['output'] = output;
    }
    public withTimelineStart(timelineStart: string): EditSetting {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineEnd(timelineEnd: string): EditSetting {
        this['timeline_end'] = timelineEnd;
        return this;
    }
    public set timelineEnd(timelineEnd: string | undefined) {
        this['timeline_end'] = timelineEnd;
    }
    public get timelineEnd() {
        return this['timeline_end'];
    }
    public withTransTemplateId(transTemplateId: number): EditSetting {
        this['trans_template_id'] = transTemplateId;
        return this;
    }
    public set transTemplateId(transTemplateId: number | undefined) {
        this['trans_template_id'] = transTemplateId;
    }
    public get transTemplateId() {
        return this['trans_template_id'];
    }
    public withAvParameter(avParameter: AvParameters): EditSetting {
        this['av_parameter'] = avParameter;
        return this;
    }
    public set avParameter(avParameter: AvParameters | undefined) {
        this['av_parameter'] = avParameter;
    }
    public get avParameter() {
        return this['av_parameter'];
    }
    public withMosaics(mosaics: Array<MosaicInfo>): EditSetting {
        this['mosaics'] = mosaics;
        return this;
    }
    public withImageWatermarks(imageWatermarks: Array<ImageWatermarkSetting>): EditSetting {
        this['image_watermarks'] = imageWatermarks;
        return this;
    }
    public set imageWatermarks(imageWatermarks: Array<ImageWatermarkSetting> | undefined) {
        this['image_watermarks'] = imageWatermarks;
    }
    public get imageWatermarks() {
        return this['image_watermarks'];
    }
    public withHeads(heads: Array<ObsObjInfo>): EditSetting {
        this['heads'] = heads;
        return this;
    }
    public withTails(tails: Array<ObsObjInfo>): EditSetting {
        this['tails'] = tails;
        return this;
    }
    public withOutput(output: ObsObjInfo): EditSetting {
        this['output'] = output;
        return this;
    }
}