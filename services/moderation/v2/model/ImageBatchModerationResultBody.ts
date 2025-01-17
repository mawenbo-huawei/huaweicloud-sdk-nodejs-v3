import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class ImageBatchModerationResultBody {
    public url?: string;
    public suggestion?: string;
    public detail?: ImageDetectionResultDetail;
    private 'category_suggestions'?: object | undefined;
    private 'ocr_text'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withUrl(url: string): ImageBatchModerationResultBody {
        this['url'] = url;
        return this;
    }
    public withSuggestion(suggestion: string): ImageBatchModerationResultBody {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetail(detail: ImageDetectionResultDetail): ImageBatchModerationResultBody {
        this['detail'] = detail;
        return this;
    }
    public withCategorySuggestions(categorySuggestions: object): ImageBatchModerationResultBody {
        this['category_suggestions'] = categorySuggestions;
        return this;
    }
    public set categorySuggestions(categorySuggestions: object | undefined) {
        this['category_suggestions'] = categorySuggestions;
    }
    public get categorySuggestions() {
        return this['category_suggestions'];
    }
    public withOcrText(ocrText: string): ImageBatchModerationResultBody {
        this['ocr_text'] = ocrText;
        return this;
    }
    public set ocrText(ocrText: string | undefined) {
        this['ocr_text'] = ocrText;
    }
    public get ocrText() {
        return this['ocr_text'];
    }
    public withErrorCode(errorCode: string): ImageBatchModerationResultBody {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ImageBatchModerationResultBody {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}