import { TextDetectionDataReq } from './TextDetectionDataReq';


export class TextDetectionReq {
    private 'event_type': string | undefined;
    private 'glossary_names'?: Array<string> | undefined;
    public data: TextDetectionDataReq;
    private 'white_glossary_names'?: Array<string> | undefined;
    public constructor(eventType?: any, data?: any) { 
        this['event_type'] = eventType;
        this['data'] = data;
    }
    public withEventType(eventType: string): TextDetectionReq {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType() {
        return this['event_type'];
    }
    public withGlossaryNames(glossaryNames: Array<string>): TextDetectionReq {
        this['glossary_names'] = glossaryNames;
        return this;
    }
    public set glossaryNames(glossaryNames: Array<string> | undefined) {
        this['glossary_names'] = glossaryNames;
    }
    public get glossaryNames() {
        return this['glossary_names'];
    }
    public withData(data: TextDetectionDataReq): TextDetectionReq {
        this['data'] = data;
        return this;
    }
    public withWhiteGlossaryNames(whiteGlossaryNames: Array<string>): TextDetectionReq {
        this['white_glossary_names'] = whiteGlossaryNames;
        return this;
    }
    public set whiteGlossaryNames(whiteGlossaryNames: Array<string> | undefined) {
        this['white_glossary_names'] = whiteGlossaryNames;
    }
    public get whiteGlossaryNames() {
        return this['white_glossary_names'];
    }
}