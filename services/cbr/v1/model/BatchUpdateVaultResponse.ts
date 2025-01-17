
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateVaultResponse extends SdkResponse {
    private 'updated_vaults_id'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withUpdatedVaultsId(updatedVaultsId: Array<string>): BatchUpdateVaultResponse {
        this['updated_vaults_id'] = updatedVaultsId;
        return this;
    }
    public set updatedVaultsId(updatedVaultsId: Array<string> | undefined) {
        this['updated_vaults_id'] = updatedVaultsId;
    }
    public get updatedVaultsId() {
        return this['updated_vaults_id'];
    }
}