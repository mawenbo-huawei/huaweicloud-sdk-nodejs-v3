import { MaskType } from './MaskType';
import { RelationType } from './RelationType';
import { Resource } from './Resource';


export class UpdateNotificationMasksRequestBody {
    private 'mask_name'?: string;
    private 'relation_ids'?: Array<string>;
    private 'relation_type'?: RelationType;
    public resources?: Array<Resource>;
    private 'mask_type'?: MaskType;
    private 'start_date'?: string;
    private 'start_time'?: string;
    private 'end_date'?: string;
    private 'end_time'?: string;
    public constructor(maskName?: string, resources?: Array<Resource>, maskType?: MaskType) { 
        this['mask_name'] = maskName;
        this['resources'] = resources;
        this['mask_type'] = maskType;
    }
    public withMaskName(maskName: string): UpdateNotificationMasksRequestBody {
        this['mask_name'] = maskName;
        return this;
    }
    public set maskName(maskName: string  | undefined) {
        this['mask_name'] = maskName;
    }
    public get maskName(): string | undefined {
        return this['mask_name'];
    }
    public withRelationIds(relationIds: Array<string>): UpdateNotificationMasksRequestBody {
        this['relation_ids'] = relationIds;
        return this;
    }
    public set relationIds(relationIds: Array<string>  | undefined) {
        this['relation_ids'] = relationIds;
    }
    public get relationIds(): Array<string> | undefined {
        return this['relation_ids'];
    }
    public withRelationType(relationType: RelationType): UpdateNotificationMasksRequestBody {
        this['relation_type'] = relationType;
        return this;
    }
    public set relationType(relationType: RelationType  | undefined) {
        this['relation_type'] = relationType;
    }
    public get relationType(): RelationType | undefined {
        return this['relation_type'];
    }
    public withResources(resources: Array<Resource>): UpdateNotificationMasksRequestBody {
        this['resources'] = resources;
        return this;
    }
    public withMaskType(maskType: MaskType): UpdateNotificationMasksRequestBody {
        this['mask_type'] = maskType;
        return this;
    }
    public set maskType(maskType: MaskType  | undefined) {
        this['mask_type'] = maskType;
    }
    public get maskType(): MaskType | undefined {
        return this['mask_type'];
    }
    public withStartDate(startDate: string): UpdateNotificationMasksRequestBody {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withStartTime(startTime: string): UpdateNotificationMasksRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndDate(endDate: string): UpdateNotificationMasksRequestBody {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withEndTime(endTime: string): UpdateNotificationMasksRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}