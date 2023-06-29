import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CodeArtsDeployRegion {
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://codearts-deploy.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://codearts-deploy.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://codearts-deploy.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://codearts-deploy.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://codearts-deploy.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://codearts-deploy.cn-north-4.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://codearts-deploy.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://codearts-deploy.la-north-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "ap-southeast-3":CodeArtsDeployRegion.AP_SOUTHEAST_3,
        "cn-south-1":CodeArtsDeployRegion.CN_SOUTH_1,
        "cn-east-3":CodeArtsDeployRegion.CN_EAST_3,
        "cn-east-2":CodeArtsDeployRegion.CN_EAST_2,
        "cn-north-1":CodeArtsDeployRegion.CN_NORTH_1,
        "cn-north-4":CodeArtsDeployRegion.CN_NORTH_4,
        "sa-brazil-1":CodeArtsDeployRegion.SA_BRAZIL_1,
        "la-north-2":CodeArtsDeployRegion.LA_NORTH_2
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
