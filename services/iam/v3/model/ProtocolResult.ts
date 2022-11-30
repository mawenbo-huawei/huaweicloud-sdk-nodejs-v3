import { ProtocolLinks } from './ProtocolLinks';


export class ProtocolResult {
    public id: string;
    private 'mapping_id': string | undefined;
    public links: ProtocolLinks;
    public constructor(id?: any, mappingId?: any, links?: any) { 
        this['id'] = id;
        this['mapping_id'] = mappingId;
        this['links'] = links;
    }
    public withId(id: string): ProtocolResult {
        this['id'] = id;
        return this;
    }
    public withMappingId(mappingId: string): ProtocolResult {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId() {
        return this['mapping_id'];
    }
    public withLinks(links: ProtocolLinks): ProtocolResult {
        this['links'] = links;
        return this;
    }
}