

export class OCRTextDetail {
    public segment?: string;
    private 'glossary_name'?: string | undefined;
    public constructor() { 
    }
    public withSegment(segment: string): OCRTextDetail {
        this['segment'] = segment;
        return this;
    }
    public withGlossaryName(glossaryName: string): OCRTextDetail {
        this['glossary_name'] = glossaryName;
        return this;
    }
    public set glossaryName(glossaryName: string | undefined) {
        this['glossary_name'] = glossaryName;
    }
    public get glossaryName() {
        return this['glossary_name'];
    }
}