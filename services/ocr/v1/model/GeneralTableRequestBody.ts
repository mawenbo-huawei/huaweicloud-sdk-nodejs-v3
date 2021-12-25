

export class GeneralTableRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean | undefined;
    private 'return_confidence'?: boolean | undefined;
    private 'return_excel'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): GeneralTableRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): GeneralTableRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnTextLocation(returnTextLocation: boolean): GeneralTableRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation() {
        return this['return_text_location'];
    }
    public withReturnConfidence(returnConfidence: boolean): GeneralTableRequestBody {
        this['return_confidence'] = returnConfidence;
        return this;
    }
    public set returnConfidence(returnConfidence: boolean | undefined) {
        this['return_confidence'] = returnConfidence;
    }
    public get returnConfidence() {
        return this['return_confidence'];
    }
    public withReturnExcel(returnExcel: boolean): GeneralTableRequestBody {
        this['return_excel'] = returnExcel;
        return this;
    }
    public set returnExcel(returnExcel: boolean | undefined) {
        this['return_excel'] = returnExcel;
    }
    public get returnExcel() {
        return this['return_excel'];
    }
}