
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceDescribeDetailsResponse extends SdkResponse {
    public id?: string;
    private 'service_name'?: string | undefined;
    private 'service_type'?: ListServiceDescribeDetailsResponseServiceTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'is_charge'?: boolean | undefined;
    private 'public_border_group'?: string | undefined;
    private 'enable_policy'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): ListServiceDescribeDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withServiceName(serviceName: string): ListServiceDescribeDetailsResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withServiceType(serviceType: ListServiceDescribeDetailsResponseServiceTypeEnum): ListServiceDescribeDetailsResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListServiceDescribeDetailsResponseServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): ListServiceDescribeDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withIsCharge(isCharge: boolean): ListServiceDescribeDetailsResponse {
        this['is_charge'] = isCharge;
        return this;
    }
    public set isCharge(isCharge: boolean | undefined) {
        this['is_charge'] = isCharge;
    }
    public get isCharge() {
        return this['is_charge'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListServiceDescribeDetailsResponse {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
    public withEnablePolicy(enablePolicy: boolean): ListServiceDescribeDetailsResponse {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy() {
        return this['enable_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServiceDescribeDetailsResponseServiceTypeEnum {
    INTERFACE = 'interface'
}
