import { ImageHighresolutionMattingInference } from './ImageHighresolutionMattingInference';


export class ImageHighresolutionMattingConfigCommon {
    public inference: ImageHighresolutionMattingInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: ImageHighresolutionMattingInference): ImageHighresolutionMattingConfigCommon {
        this['inference'] = inference;
        return this;
    }
}