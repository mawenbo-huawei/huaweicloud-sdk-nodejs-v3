import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionResources } from './model/ActionResources';
import { BatchCreateOrDeleteTagsRequest } from './model/BatchCreateOrDeleteTagsRequest';
import { BatchCreateOrDeleteTagsRequestBody } from './model/BatchCreateOrDeleteTagsRequestBody';
import { BatchCreateOrDeleteTagsResponse } from './model/BatchCreateOrDeleteTagsResponse';
import { CreateSecretRequest } from './model/CreateSecretRequest';
import { CreateSecretRequestBody } from './model/CreateSecretRequestBody';
import { CreateSecretResponse } from './model/CreateSecretResponse';
import { CreateSecretTagRequest } from './model/CreateSecretTagRequest';
import { CreateSecretTagRequestBody } from './model/CreateSecretTagRequestBody';
import { CreateSecretTagResponse } from './model/CreateSecretTagResponse';
import { CreateSecretVersionRequest } from './model/CreateSecretVersionRequest';
import { CreateSecretVersionRequestBody } from './model/CreateSecretVersionRequestBody';
import { CreateSecretVersionResponse } from './model/CreateSecretVersionResponse';
import { DeleteSecretForScheduleRequest } from './model/DeleteSecretForScheduleRequest';
import { DeleteSecretForScheduleRequestBody } from './model/DeleteSecretForScheduleRequestBody';
import { DeleteSecretForScheduleResponse } from './model/DeleteSecretForScheduleResponse';
import { DeleteSecretRequest } from './model/DeleteSecretRequest';
import { DeleteSecretResponse } from './model/DeleteSecretResponse';
import { DeleteSecretStageRequest } from './model/DeleteSecretStageRequest';
import { DeleteSecretStageResponse } from './model/DeleteSecretStageResponse';
import { DeleteSecretTagRequest } from './model/DeleteSecretTagRequest';
import { DeleteSecretTagResponse } from './model/DeleteSecretTagResponse';
import { DownloadSecretBlobRequest } from './model/DownloadSecretBlobRequest';
import { DownloadSecretBlobResponse } from './model/DownloadSecretBlobResponse';
import { ListProjectSecretsTagsRequest } from './model/ListProjectSecretsTagsRequest';
import { ListProjectSecretsTagsResponse } from './model/ListProjectSecretsTagsResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesRequestBody } from './model/ListResourceInstancesRequestBody';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListSecretTagsRequest } from './model/ListSecretTagsRequest';
import { ListSecretTagsResponse } from './model/ListSecretTagsResponse';
import { ListSecretVersionsRequest } from './model/ListSecretVersionsRequest';
import { ListSecretVersionsResponse } from './model/ListSecretVersionsResponse';
import { ListSecretsRequest } from './model/ListSecretsRequest';
import { ListSecretsResponse } from './model/ListSecretsResponse';
import { PageInfo } from './model/PageInfo';
import { RestoreSecretRequest } from './model/RestoreSecretRequest';
import { RestoreSecretResponse } from './model/RestoreSecretResponse';
import { Secret } from './model/Secret';
import { ShowSecretRequest } from './model/ShowSecretRequest';
import { ShowSecretResponse } from './model/ShowSecretResponse';
import { ShowSecretStageRequest } from './model/ShowSecretStageRequest';
import { ShowSecretStageResponse } from './model/ShowSecretStageResponse';
import { ShowSecretVersionRequest } from './model/ShowSecretVersionRequest';
import { ShowSecretVersionResponse } from './model/ShowSecretVersionResponse';
import { Stage } from './model/Stage';
import { Tag } from './model/Tag';
import { TagItem } from './model/TagItem';
import { UpdateSecretRequest } from './model/UpdateSecretRequest';
import { UpdateSecretRequestBody } from './model/UpdateSecretRequestBody';
import { UpdateSecretResponse } from './model/UpdateSecretResponse';
import { UpdateSecretStageRequest } from './model/UpdateSecretStageRequest';
import { UpdateSecretStageRequestBody } from './model/UpdateSecretStageRequestBody';
import { UpdateSecretStageResponse } from './model/UpdateSecretStageResponse';
import { UploadSecretBlobRequest } from './model/UploadSecretBlobRequest';
import { UploadSecretBlobRequestBody } from './model/UploadSecretBlobRequestBody';
import { UploadSecretBlobResponse } from './model/UploadSecretBlobResponse';
import { Version } from './model/Version';
import { VersionMetadata } from './model/VersionMetadata';

export class CsmsClient {
    public static newBuilder(): ClientBuilder<CsmsClient> {
            return new ClientBuilder<CsmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * - 功能介绍：批量添加或删除凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除凭据标签
     * @param {string} secretId 凭据ID
     * @param {BatchCreateOrDeleteTagsRequestBody} batchCreateOrDeleteTagsRequestBody action
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest): Promise<BatchCreateOrDeleteTagsResponse> {
        const options = ParamCreater().batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建新的凭据，并将凭据值存入凭据的初始版本。
     * 
     * 凭据管理服务将凭据值加密后，存储在凭据对象下的版本中。每个版本可与多个凭据版本状态相关联，凭据版本状态用于标识凭据版本处于的阶段，没有版本状态标记的版本视为已弃用，可用凭据管理服务自动删除。
     * 
     * 初始版本的状态被标记为SYSCURRENT。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据
     * @param {CreateSecretRequestBody} createSecretRequestBody 创建凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecret(createSecretRequest?: CreateSecretRequest): Promise<CreateSecretResponse> {
        const options = ParamCreater().createSecret(createSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：添加凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加凭据标签
     * @param {string} secretId 凭据ID
     * @param {CreateSecretTagRequestBody} createSecretTagRequestBody 创建凭据标签消息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecretTag(createSecretTagRequest?: CreateSecretTagRequest): Promise<CreateSecretTagResponse> {
        const options = ParamCreater().createSecretTag(createSecretTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定的凭据中，创建一个新的凭据版本，用于加密保管新的凭据值。默认情况下，新创建的凭据版本被标记为SYSCURRENT状态，而SYSCURRENT标记的前一个凭据版本被标记为SYSPREVIOUS状态。您可以通过指定VersionStage参数来覆盖默认行为。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据版本
     * @param {string} secretName 凭据名称。
     * @param {CreateSecretVersionRequestBody} createSecretVersionRequestBody 创建凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecretVersion(createSecretVersionRequest?: CreateSecretVersionRequest): Promise<CreateSecretVersionResponse> {
        const options = ParamCreater().createSecretVersion(createSecretVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即删除指定的凭据，且无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立即删除凭据
     * @param {string} secretName 凭据名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecret(deleteSecretRequest?: DeleteSecretRequest): Promise<DeleteSecretResponse> {
        const options = ParamCreater().deleteSecret(deleteSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定延迟删除时间，创建删除凭据的定时任务，可设置7~30天的的延迟删除时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据的定时删除任务
     * @param {string} secretName 凭据名称。
     * @param {DeleteSecretForScheduleRequestBody} deleteSecretForScheduleRequestBody 计划删除凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretForSchedule(deleteSecretForScheduleRequest?: DeleteSecretForScheduleRequest): Promise<DeleteSecretForScheduleResponse> {
        const options = ParamCreater().deleteSecretForSchedule(deleteSecretForScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的凭据版本状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除凭据的版本状态
     * @param {string} secretName 凭据的资源标识符。
     * @param {string} stageName 凭据版本状态的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretStage(deleteSecretStageRequest?: DeleteSecretStageRequest): Promise<DeleteSecretStageResponse> {
        const options = ParamCreater().deleteSecretStage(deleteSecretStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：删除凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除凭据标签
     * @param {string} secretId 凭据ID
     * @param {string} key 标签键的值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretTag(deleteSecretTagRequest?: DeleteSecretTagRequest): Promise<DeleteSecretTagResponse> {
        const options = ParamCreater().deleteSecretTag(deleteSecretTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载指定凭据的备份文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载凭据备份
     * @param {string} secretName 凭据的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadSecretBlob(downloadSecretBlobRequest?: DownloadSecretBlobRequest): Promise<DownloadSecretBlobResponse> {
        const options = ParamCreater().downloadSecretBlob(downloadSecretBlobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询用户在指定项目下的所有凭据标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectSecretsTags(): Promise<ListProjectSecretsTagsResponse> {
        const options = ParamCreater().listProjectSecretsTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询凭据实例。通过标签过滤，筛选用户凭据,返回凭据列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据实例
     * @param {string} resourceInstances 定值为resource_instances。
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody action
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据标签
     * @param {string} secretId 凭据ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecretTags(listSecretTagsRequest?: ListSecretTagsRequest): Promise<ListSecretTagsResponse> {
        const options = ParamCreater().listSecretTags(listSecretTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据下的版本列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据的版本列表
     * @param {string} secretName 凭据名称。
     * @param {string} [marker] 分页参数，取值为上一页数据的最后一条记录的版本号。
     * @param {number} [limit] 每页显示的条目数量。默认值50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecretVersions(listSecretVersionsRequest?: ListSecretVersionsRequest): Promise<ListSecretVersionsResponse> {
        const options = ParamCreater().listSecretVersions(listSecretVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户在本项目下创建的所有凭据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据列表
     * @param {string} [limit] 每页返回的个数。  默认值：50。 
     * @param {string} [marker] 分页查询起始的凭据名称，为空时为查询第一页 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecrets(listSecretsRequest?: ListSecretsRequest): Promise<ListSecretsResponse> {
        const options = ParamCreater().listSecrets(listSecretsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消凭据的定时删除任务，凭据对象恢复可使用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消凭据的定时删除任务
     * @param {string} secretName 凭据名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreSecret(restoreSecretRequest?: RestoreSecretRequest): Promise<RestoreSecretResponse> {
        const options = ParamCreater().restoreSecret(restoreSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据
     * @param {string} secretName 凭据的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecret(showSecretRequest?: ShowSecretRequest): Promise<ShowSecretResponse> {
        const options = ParamCreater().showSecret(showSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据版本状态标记的版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据的版本状态
     * @param {string} secretName 凭据名称。
     * @param {string} stageName 凭据版本状态的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecretStage(showSecretStageRequest?: ShowSecretStageRequest): Promise<ShowSecretStageResponse> {
        const options = ParamCreater().showSecretStage(showSecretStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据版本的信息和版本中的明文凭据值，只能查询ENABLED状态的凭据。
     * 通过/v1/{project_id}/secrets/{secret_name}/versions/latest （即将当前接口URL中的{version_id}赋值为latest）可访问凭据最新版本的凭据值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据的版本与凭据值
     * @param {string} secretName 凭据名称。
     * @param {string} versionId 凭据的版本标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecretVersion(showSecretVersionRequest?: ShowSecretVersionRequest): Promise<ShowSecretVersionResponse> {
        const options = ParamCreater().showSecretVersion(showSecretVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定凭据的元数据信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新凭据
     * @param {string} secretName 凭据名称。
     * @param {UpdateSecretRequestBody} updateSecretRequestBody 创建凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecret(updateSecretRequest?: UpdateSecretRequest): Promise<UpdateSecretResponse> {
        const options = ParamCreater().updateSecret(updateSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新凭据的版本状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新凭据的版本状态
     * @param {string} secretName 凭据名称。
     * @param {string} stageName 凭据版本状态的名称。满足 \&#39;^[a-zA-Z0-9._-]{1,64}$\&#39;
     * @param {UpdateSecretStageRequestBody} updateSecretStageRequestBody 创建凭据版本状态请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecretStage(updateSecretStageRequest?: UpdateSecretStageRequest): Promise<UpdateSecretStageResponse> {
        const options = ParamCreater().updateSecretStage(updateSecretStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过上传凭据备份文件，恢复凭据对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复凭据对象
     * @param {UploadSecretBlobRequestBody} uploadSecretBlobRequestBody 恢复凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadSecretBlob(uploadSecretBlobRequest?: UploadSecretBlobRequest): Promise<UploadSecretBlobResponse> {
        const options = ParamCreater().uploadSecretBlob(uploadSecretBlobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * - 功能介绍：批量添加或删除凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/{secret_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretId;

            if (batchCreateOrDeleteTagsRequest !== null && batchCreateOrDeleteTagsRequest !== undefined) {
                if (batchCreateOrDeleteTagsRequest instanceof BatchCreateOrDeleteTagsRequest) {
                    secretId = batchCreateOrDeleteTagsRequest.secretId;
                    body = batchCreateOrDeleteTagsRequest.body
                } else {
                    secretId = batchCreateOrDeleteTagsRequest['secret_id'];
                    body = batchCreateOrDeleteTagsRequest['body'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling batchCreateOrDeleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建新的凭据，并将凭据值存入凭据的初始版本。
         * 
         * 凭据管理服务将凭据值加密后，存储在凭据对象下的版本中。每个版本可与多个凭据版本状态相关联，凭据版本状态用于标识凭据版本处于的阶段，没有版本状态标记的版本视为已弃用，可用凭据管理服务自动删除。
         * 
         * 初始版本的状态被标记为SYSCURRENT。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecret(createSecretRequest?: CreateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSecretRequest !== null && createSecretRequest !== undefined) {
                if (createSecretRequest instanceof CreateSecretRequest) {
                    body = createSecretRequest.body
                } else {
                    body = createSecretRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：添加凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecretTag(createSecretTagRequest?: CreateSecretTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/{secret_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretId;

            if (createSecretTagRequest !== null && createSecretTagRequest !== undefined) {
                if (createSecretTagRequest instanceof CreateSecretTagRequest) {
                    secretId = createSecretTagRequest.secretId;
                    body = createSecretTagRequest.body
                } else {
                    secretId = createSecretTagRequest['secret_id'];
                    body = createSecretTagRequest['body'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling createSecretTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定的凭据中，创建一个新的凭据版本，用于加密保管新的凭据值。默认情况下，新创建的凭据版本被标记为SYSCURRENT状态，而SYSCURRENT标记的前一个凭据版本被标记为SYSPREVIOUS状态。您可以通过指定VersionStage参数来覆盖默认行为。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecretVersion(createSecretVersionRequest?: CreateSecretVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/versions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;

            if (createSecretVersionRequest !== null && createSecretVersionRequest !== undefined) {
                if (createSecretVersionRequest instanceof CreateSecretVersionRequest) {
                    secretName = createSecretVersionRequest.secretName;
                    body = createSecretVersionRequest.body
                } else {
                    secretName = createSecretVersionRequest['secret_name'];
                    body = createSecretVersionRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling createSecretVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即删除指定的凭据，且无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecret(deleteSecretRequest?: DeleteSecretRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/secrets/{secret_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (deleteSecretRequest !== null && deleteSecretRequest !== undefined) {
                if (deleteSecretRequest instanceof DeleteSecretRequest) {
                    secretName = deleteSecretRequest.secretName;
                } else {
                    secretName = deleteSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling deleteSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定延迟删除时间，创建删除凭据的定时任务，可设置7~30天的的延迟删除时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretForSchedule(deleteSecretForScheduleRequest?: DeleteSecretForScheduleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/scheduled-deleted-tasks/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;

            if (deleteSecretForScheduleRequest !== null && deleteSecretForScheduleRequest !== undefined) {
                if (deleteSecretForScheduleRequest instanceof DeleteSecretForScheduleRequest) {
                    secretName = deleteSecretForScheduleRequest.secretName;
                    body = deleteSecretForScheduleRequest.body
                } else {
                    secretName = deleteSecretForScheduleRequest['secret_name'];
                    body = deleteSecretForScheduleRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling deleteSecretForSchedule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的凭据版本状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretStage(deleteSecretStageRequest?: DeleteSecretStageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/secrets/{secret_name}/stages/{stage_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;
            
            let stageName;

            if (deleteSecretStageRequest !== null && deleteSecretStageRequest !== undefined) {
                if (deleteSecretStageRequest instanceof DeleteSecretStageRequest) {
                    secretName = deleteSecretStageRequest.secretName;
                    stageName = deleteSecretStageRequest.stageName;
                } else {
                    secretName = deleteSecretStageRequest['secret_name'];
                    stageName = deleteSecretStageRequest['stage_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling deleteSecretStage.');
            }
            if (stageName === null || stageName === undefined) {
            throw new RequiredError('stageName','Required parameter stageName was null or undefined when calling deleteSecretStage.');
            }

            options.pathParams = { 'secret_name': secretName,'stage_name': stageName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：删除凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretTag(deleteSecretTagRequest?: DeleteSecretTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/csms/{secret_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretId;
            
            let key;

            if (deleteSecretTagRequest !== null && deleteSecretTagRequest !== undefined) {
                if (deleteSecretTagRequest instanceof DeleteSecretTagRequest) {
                    secretId = deleteSecretTagRequest.secretId;
                    key = deleteSecretTagRequest.key;
                } else {
                    secretId = deleteSecretTagRequest['secret_id'];
                    key = deleteSecretTagRequest['key'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling deleteSecretTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteSecretTag.');
            }

            options.pathParams = { 'secret_id': secretId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载指定凭据的备份文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadSecretBlob(downloadSecretBlobRequest?: DownloadSecretBlobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/backup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (downloadSecretBlobRequest !== null && downloadSecretBlobRequest !== undefined) {
                if (downloadSecretBlobRequest instanceof DownloadSecretBlobRequest) {
                    secretName = downloadSecretBlobRequest.secretName;
                } else {
                    secretName = downloadSecretBlobRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling downloadSecretBlob.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询用户在指定项目下的所有凭据标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectSecretsTags() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询凭据实例。通过标签过滤，筛选用户凭据,返回凭据列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/{resource_instances}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceInstances;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceInstances = listResourceInstancesRequest.resourceInstances;
                    body = listResourceInstancesRequest.body
                } else {
                    resourceInstances = listResourceInstancesRequest['resource_instances'];
                    body = listResourceInstancesRequest['body'];
                }
            }

        
            if (resourceInstances === null || resourceInstances === undefined) {
            throw new RequiredError('resourceInstances','Required parameter resourceInstances was null or undefined when calling listResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_instances': resourceInstances, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecretTags(listSecretTagsRequest?: ListSecretTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/{secret_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretId;

            if (listSecretTagsRequest !== null && listSecretTagsRequest !== undefined) {
                if (listSecretTagsRequest instanceof ListSecretTagsRequest) {
                    secretId = listSecretTagsRequest.secretId;
                } else {
                    secretId = listSecretTagsRequest['secret_id'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling listSecretTags.');
            }

            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据下的版本列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecretVersions(listSecretVersionsRequest?: ListSecretVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let secretName;
            
            let marker;
            
            let limit;

            if (listSecretVersionsRequest !== null && listSecretVersionsRequest !== undefined) {
                if (listSecretVersionsRequest instanceof ListSecretVersionsRequest) {
                    secretName = listSecretVersionsRequest.secretName;
                    marker = listSecretVersionsRequest.marker;
                    limit = listSecretVersionsRequest.limit;
                } else {
                    secretName = listSecretVersionsRequest['secret_name'];
                    marker = listSecretVersionsRequest['marker'];
                    limit = listSecretVersionsRequest['limit'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling listSecretVersions.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前用户在本项目下创建的所有凭据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecrets(listSecretsRequest?: ListSecretsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listSecretsRequest !== null && listSecretsRequest !== undefined) {
                if (listSecretsRequest instanceof ListSecretsRequest) {
                    limit = listSecretsRequest.limit;
                    marker = listSecretsRequest.marker;
                } else {
                    limit = listSecretsRequest['limit'];
                    marker = listSecretsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消凭据的定时删除任务，凭据对象恢复可使用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreSecret(restoreSecretRequest?: RestoreSecretRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/scheduled-deleted-tasks/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (restoreSecretRequest !== null && restoreSecretRequest !== undefined) {
                if (restoreSecretRequest instanceof RestoreSecretRequest) {
                    secretName = restoreSecretRequest.secretName;
                } else {
                    secretName = restoreSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling restoreSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecret(showSecretRequest?: ShowSecretRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (showSecretRequest !== null && showSecretRequest !== undefined) {
                if (showSecretRequest instanceof ShowSecretRequest) {
                    secretName = showSecretRequest.secretName;
                } else {
                    secretName = showSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling showSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据版本状态标记的版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecretStage(showSecretStageRequest?: ShowSecretStageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}/stages/{stage_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;
            
            let stageName;

            if (showSecretStageRequest !== null && showSecretStageRequest !== undefined) {
                if (showSecretStageRequest instanceof ShowSecretStageRequest) {
                    secretName = showSecretStageRequest.secretName;
                    stageName = showSecretStageRequest.stageName;
                } else {
                    secretName = showSecretStageRequest['secret_name'];
                    stageName = showSecretStageRequest['stage_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling showSecretStage.');
            }
            if (stageName === null || stageName === undefined) {
            throw new RequiredError('stageName','Required parameter stageName was null or undefined when calling showSecretStage.');
            }

            options.pathParams = { 'secret_name': secretName,'stage_name': stageName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据版本的信息和版本中的明文凭据值，只能查询ENABLED状态的凭据。
         * 通过/v1/{project_id}/secrets/{secret_name}/versions/latest （即将当前接口URL中的{version_id}赋值为latest）可访问凭据最新版本的凭据值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecretVersion(showSecretVersionRequest?: ShowSecretVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;
            
            let versionId;

            if (showSecretVersionRequest !== null && showSecretVersionRequest !== undefined) {
                if (showSecretVersionRequest instanceof ShowSecretVersionRequest) {
                    secretName = showSecretVersionRequest.secretName;
                    versionId = showSecretVersionRequest.versionId;
                } else {
                    secretName = showSecretVersionRequest['secret_name'];
                    versionId = showSecretVersionRequest['version_id'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling showSecretVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showSecretVersion.');
            }

            options.pathParams = { 'secret_name': secretName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定凭据的元数据信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecret(updateSecretRequest?: UpdateSecretRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/secrets/{secret_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;

            if (updateSecretRequest !== null && updateSecretRequest !== undefined) {
                if (updateSecretRequest instanceof UpdateSecretRequest) {
                    secretName = updateSecretRequest.secretName;
                    body = updateSecretRequest.body
                } else {
                    secretName = updateSecretRequest['secret_name'];
                    body = updateSecretRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling updateSecret.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新凭据的版本状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecretStage(updateSecretStageRequest?: UpdateSecretStageRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/secrets/{secret_name}/stages/{stage_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;
            
            let stageName;

            if (updateSecretStageRequest !== null && updateSecretStageRequest !== undefined) {
                if (updateSecretStageRequest instanceof UpdateSecretStageRequest) {
                    secretName = updateSecretStageRequest.secretName;
                    stageName = updateSecretStageRequest.stageName;
                    body = updateSecretStageRequest.body
                } else {
                    secretName = updateSecretStageRequest['secret_name'];
                    stageName = updateSecretStageRequest['stage_name'];
                    body = updateSecretStageRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling updateSecretStage.');
            }
            if (stageName === null || stageName === undefined) {
            throw new RequiredError('stageName','Required parameter stageName was null or undefined when calling updateSecretStage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName,'stage_name': stageName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过上传凭据备份文件，恢复凭据对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadSecretBlob(uploadSecretBlobRequest?: UploadSecretBlobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/restore",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (uploadSecretBlobRequest !== null && uploadSecretBlobRequest !== undefined) {
                if (uploadSecretBlobRequest instanceof UploadSecretBlobRequest) {
                    body = uploadSecretBlobRequest.body
                } else {
                    body = uploadSecretBlobRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CsmsClient {
    return new CsmsClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}