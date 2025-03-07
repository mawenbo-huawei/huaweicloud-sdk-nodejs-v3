import { BackupStrategy } from './BackupStrategy';
import { ChargeInfo } from './ChargeInfo';
import { Datastore } from './Datastore';
import { Ha } from './Ha';
import { RestorePoint } from './RestorePoint';
import { ServerlessInfo } from './ServerlessInfo';
import { TagWithKeyValue } from './TagWithKeyValue';
import { Volume } from './Volume';


export class CreateRestoreInstanceRequestBody {
    public name?: string;
    public datastore?: Datastore;
    public ha?: Ha;
    private 'configuration_id'?: string;
    public port?: string;
    public password?: string;
    private 'backup_strategy'?: BackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'disk_encryption_id'?: string;
    private 'flavor_ref'?: string;
    public volume?: Volume;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'data_vip'?: string;
    private 'security_group_id'?: string;
    private 'charge_info'?: ChargeInfo;
    private 'time_zone'?: string;
    private 'dsspool_id'?: string;
    private 'restore_point'?: RestorePoint;
    public collation?: string;
    public tags?: Array<TagWithKeyValue>;
    private 'serverless_info'?: ServerlessInfo;
    private 'dry_run'?: boolean;
    private 'is_auto_upgrade'?: boolean;
    public constructor(name?: string, flavorRef?: string, volume?: Volume, availabilityZone?: string) { 
        this['name'] = name;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['availability_zone'] = availabilityZone;
    }
    public withName(name: string): CreateRestoreInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: Datastore): CreateRestoreInstanceRequestBody {
        this['datastore'] = datastore;
        return this;
    }
    public withHa(ha: Ha): CreateRestoreInstanceRequestBody {
        this['ha'] = ha;
        return this;
    }
    public withConfigurationId(configurationId: string): CreateRestoreInstanceRequestBody {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPort(port: string): CreateRestoreInstanceRequestBody {
        this['port'] = port;
        return this;
    }
    public withPassword(password: string): CreateRestoreInstanceRequestBody {
        this['password'] = password;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategy): CreateRestoreInstanceRequestBody {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateRestoreInstanceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): CreateRestoreInstanceRequestBody {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withFlavorRef(flavorRef: string): CreateRestoreInstanceRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: Volume): CreateRestoreInstanceRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withRegion(region: string): CreateRestoreInstanceRequestBody {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateRestoreInstanceRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): CreateRestoreInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateRestoreInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDataVip(dataVip: string): CreateRestoreInstanceRequestBody {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateRestoreInstanceRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withChargeInfo(chargeInfo: ChargeInfo): CreateRestoreInstanceRequestBody {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withTimeZone(timeZone: string): CreateRestoreInstanceRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withDsspoolId(dsspoolId: string): CreateRestoreInstanceRequestBody {
        this['dsspool_id'] = dsspoolId;
        return this;
    }
    public set dsspoolId(dsspoolId: string  | undefined) {
        this['dsspool_id'] = dsspoolId;
    }
    public get dsspoolId(): string | undefined {
        return this['dsspool_id'];
    }
    public withRestorePoint(restorePoint: RestorePoint): CreateRestoreInstanceRequestBody {
        this['restore_point'] = restorePoint;
        return this;
    }
    public set restorePoint(restorePoint: RestorePoint  | undefined) {
        this['restore_point'] = restorePoint;
    }
    public get restorePoint(): RestorePoint | undefined {
        return this['restore_point'];
    }
    public withCollation(collation: string): CreateRestoreInstanceRequestBody {
        this['collation'] = collation;
        return this;
    }
    public withTags(tags: Array<TagWithKeyValue>): CreateRestoreInstanceRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withServerlessInfo(serverlessInfo: ServerlessInfo): CreateRestoreInstanceRequestBody {
        this['serverless_info'] = serverlessInfo;
        return this;
    }
    public set serverlessInfo(serverlessInfo: ServerlessInfo  | undefined) {
        this['serverless_info'] = serverlessInfo;
    }
    public get serverlessInfo(): ServerlessInfo | undefined {
        return this['serverless_info'];
    }
    public withDryRun(dryRun: boolean): CreateRestoreInstanceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withIsAutoUpgrade(isAutoUpgrade: boolean): CreateRestoreInstanceRequestBody {
        this['is_auto_upgrade'] = isAutoUpgrade;
        return this;
    }
    public set isAutoUpgrade(isAutoUpgrade: boolean  | undefined) {
        this['is_auto_upgrade'] = isAutoUpgrade;
    }
    public get isAutoUpgrade(): boolean | undefined {
        return this['is_auto_upgrade'];
    }
}