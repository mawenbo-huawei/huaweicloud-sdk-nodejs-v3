import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class MrsRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://mrs.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://mrs.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://mrs.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://mrs.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://mrs.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://mrs.cn-east-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://mrs.ap-southeast-1.myhuaweicloud.cn"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://mrs.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://mrs.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://mrs.af-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://mrs.ru-northwest-2.myhuaweicloud.cn"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://mrs.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://mrs.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://mrs.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://mrs.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://mrs.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://mrs.cn-southwest-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":MrsRegion.CN_NORTH_1,
        "cn-north-2":MrsRegion.CN_NORTH_2,
        "cn-north-4":MrsRegion.CN_NORTH_4,
        "cn-south-1":MrsRegion.CN_SOUTH_1,
        "cn-east-2":MrsRegion.CN_EAST_2,
        "cn-east-3":MrsRegion.CN_EAST_3,
        "ap-southeast-1":MrsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":MrsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":MrsRegion.AP_SOUTHEAST_3,
        "af-south-1":MrsRegion.AF_SOUTH_1,
        "ru-northwest-2":MrsRegion.RU_NORTHWEST_2,
        "sa-brazil-1":MrsRegion.SA_BRAZIL_1,
        "la-south-2":MrsRegion.LA_SOUTH_2,
        "la-north-2":MrsRegion.LA_NORTH_2,
        "na-mexico-1":MrsRegion.NA_MEXICO_1,
        "cn-north-9":MrsRegion.CN_NORTH_9,
        "cn-southwest-2":MrsRegion.CN_SOUTHWEST_2
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
