

export class TrainTicketRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): TrainTicketRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): TrainTicketRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnTextLocation(returnTextLocation: boolean): TrainTicketRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation() {
        return this['return_text_location'];
    }
}