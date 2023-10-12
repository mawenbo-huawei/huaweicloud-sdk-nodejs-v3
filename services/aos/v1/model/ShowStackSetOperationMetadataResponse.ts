import { AdministrationAgencyNamePrimitiveTypeHolder } from './AdministrationAgencyNamePrimitiveTypeHolder';
import { AdministrationAgencyUrnPrimitiveTypeHolder } from './AdministrationAgencyUrnPrimitiveTypeHolder';
import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { DeploymentTargetsPrimitiveTypeHolderDeploymentTargets } from './DeploymentTargetsPrimitiveTypeHolderDeploymentTargets';
import { ManagedAgencyNamePrimitiveTypeHolder } from './ManagedAgencyNamePrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './StackSetNamePrimitiveTypeHolder';
import { StackSetOperationActionPrimitiveTypeHolder } from './StackSetOperationActionPrimitiveTypeHolder';
import { StackSetOperationCreateTimePrimitiveTypeHolder } from './StackSetOperationCreateTimePrimitiveTypeHolder';
import { StackSetOperationIdPrimitiveTypeHolder } from './StackSetOperationIdPrimitiveTypeHolder';
import { StackSetOperationStatusMessagePrimitiveTypeHolder } from './StackSetOperationStatusMessagePrimitiveTypeHolder';
import { StackSetOperationStatusPrimitiveTypeHolder } from './StackSetOperationStatusPrimitiveTypeHolder';
import { StackSetOperationUpdateTimePrimitiveTypeHolder } from './StackSetOperationUpdateTimePrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStackSetOperationMetadataResponse extends SdkResponse {
    private 'stack_set_operation_id'?: string;
    private 'stack_set_id'?: string;
    private 'stack_set_name'?: string;
    public status?: ShowStackSetOperationMetadataResponseStatusEnum | string;
    private 'status_message'?: string;
    public action?: ShowStackSetOperationMetadataResponseActionEnum | string;
    private 'administration_agency_name'?: string;
    private 'administration_agency_urn'?: string;
    private 'managed_agency_name'?: string;
    private 'deployment_targets'?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(stackSetName?: string, deploymentTargets?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets) { 
        super();
        this['stack_set_name'] = stackSetName;
        this['deployment_targets'] = deploymentTargets;
    }
    public withStackSetOperationId(stackSetOperationId: string): ShowStackSetOperationMetadataResponse {
        this['stack_set_operation_id'] = stackSetOperationId;
        return this;
    }
    public set stackSetOperationId(stackSetOperationId: string  | undefined) {
        this['stack_set_operation_id'] = stackSetOperationId;
    }
    public get stackSetOperationId(): string | undefined {
        return this['stack_set_operation_id'];
    }
    public withStackSetId(stackSetId: string): ShowStackSetOperationMetadataResponse {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetName(stackSetName: string): ShowStackSetOperationMetadataResponse {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStatus(status: ShowStackSetOperationMetadataResponseStatusEnum | string): ShowStackSetOperationMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): ShowStackSetOperationMetadataResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withAction(action: ShowStackSetOperationMetadataResponseActionEnum | string): ShowStackSetOperationMetadataResponse {
        this['action'] = action;
        return this;
    }
    public withAdministrationAgencyName(administrationAgencyName: string): ShowStackSetOperationMetadataResponse {
        this['administration_agency_name'] = administrationAgencyName;
        return this;
    }
    public set administrationAgencyName(administrationAgencyName: string  | undefined) {
        this['administration_agency_name'] = administrationAgencyName;
    }
    public get administrationAgencyName(): string | undefined {
        return this['administration_agency_name'];
    }
    public withAdministrationAgencyUrn(administrationAgencyUrn: string): ShowStackSetOperationMetadataResponse {
        this['administration_agency_urn'] = administrationAgencyUrn;
        return this;
    }
    public set administrationAgencyUrn(administrationAgencyUrn: string  | undefined) {
        this['administration_agency_urn'] = administrationAgencyUrn;
    }
    public get administrationAgencyUrn(): string | undefined {
        return this['administration_agency_urn'];
    }
    public withManagedAgencyName(managedAgencyName: string): ShowStackSetOperationMetadataResponse {
        this['managed_agency_name'] = managedAgencyName;
        return this;
    }
    public set managedAgencyName(managedAgencyName: string  | undefined) {
        this['managed_agency_name'] = managedAgencyName;
    }
    public get managedAgencyName(): string | undefined {
        return this['managed_agency_name'];
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets): ShowStackSetOperationMetadataResponse {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargetsPrimitiveTypeHolderDeploymentTargets | undefined {
        return this['deployment_targets'];
    }
    public withCreateTime(createTime: string): ShowStackSetOperationMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowStackSetOperationMetadataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStackSetOperationMetadataResponseStatusEnum {
    QUEUE_IN_PROGRESS = 'QUEUE_IN_PROGRESS',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    OPERATION_COMPLETE = 'OPERATION_COMPLETE',
    OPERATION_FAILED = 'OPERATION_FAILED',
    STOP_IN_PROGRESS = 'STOP_IN_PROGRESS',
    STOP_COMPLETE = 'STOP_COMPLETE',
    STOP_FAILED = 'STOP_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowStackSetOperationMetadataResponseActionEnum {
    CREATE_STACK_INSTANCES = 'CREATE_STACK_INSTANCES',
    DELETE_STACK_INSTANCES = 'DELETE_STACK_INSTANCES',
    DEPLOY_STACK_SET = 'DEPLOY_STACK_SET',
    DEPLOY_STACK_INSTANCES = 'DEPLOY_STACK_INSTANCES'
}
