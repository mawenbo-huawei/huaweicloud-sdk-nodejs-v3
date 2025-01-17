import { UpdateEndpointOption } from './UpdateEndpointOption';


export class UpdateEndpointRequestBody {
    public endpoint: UpdateEndpointOption;
    public constructor(endpoint?: any) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: UpdateEndpointOption): UpdateEndpointRequestBody {
        this['endpoint'] = endpoint;
        return this;
    }
}