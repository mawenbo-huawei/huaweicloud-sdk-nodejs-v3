import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class VpcepRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://vpcep.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://vpcep.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://vpcep.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://vpcep.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://vpcep.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://vpcep.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://vpcep.ap-southeast-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://vpcep.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://vpcep.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://vpcep.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://vpcep.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://vpcep.ap-southeast-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://vpcep.cn-north-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://vpcep.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://vpcep.cn-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://vpcep.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://vpcep.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://vpcep.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":VpcepRegion.CN_NORTH_4,
        "cn-north-1":VpcepRegion.CN_NORTH_1,
        "cn-east-2":VpcepRegion.CN_EAST_2,
        "cn-east-3":VpcepRegion.CN_EAST_3,
        "cn-south-1":VpcepRegion.CN_SOUTH_1,
        "cn-southwest-2":VpcepRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":VpcepRegion.AP_SOUTHEAST_1,
        "la-south-2":VpcepRegion.LA_SOUTH_2,
        "na-mexico-1":VpcepRegion.NA_MEXICO_1,
        "cn-north-9":VpcepRegion.CN_NORTH_9,
        "ap-southeast-3":VpcepRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":VpcepRegion.AP_SOUTHEAST_2,
        "cn-north-2":VpcepRegion.CN_NORTH_2,
        "af-south-1":VpcepRegion.AF_SOUTH_1,
        "cn-south-2":VpcepRegion.CN_SOUTH_2,
        "sa-brazil-1":VpcepRegion.SA_BRAZIL_1,
        "la-north-2":VpcepRegion.LA_NORTH_2,
        "tr-west-1":VpcepRegion.TR_WEST_1
    };
  
    public static valueOf(regionId: string) {
        if (!regionId) {  
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
