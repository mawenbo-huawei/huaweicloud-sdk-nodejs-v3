import { CorpBasicInfoDTO } from './CorpBasicInfoDTO';
import { QueryDeviceInfoResultDTO } from './QueryDeviceInfoResultDTO';
import { UserFunctionDTO } from './UserFunctionDTO';
import { UserVmrDTO } from './UserVmrDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserResponse extends SdkResponse {
    public id?: string;
    public userAccount?: string;
    public name?: string;
    public englishName?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public sipNum?: string;
    public vmrList?: Array<UserVmrDTO>;
    public deptCode?: string;
    public deptName?: string;
    public deptNamePath?: string;
    public userType?: number;
    public adminType?: number;
    public signature?: string;
    public title?: string;
    public desc?: string;
    public corp?: CorpBasicInfoDTO;
    private 'function'?: UserFunctionDTO | undefined;
    public devType?: QueryDeviceInfoResultDTO;
    public status?: number;
    public sortLevel?: number;
    public hidePhone?: boolean;
    public visionAccount?: string;
    public thirdAccount?: string;
    public license?: number;
    public activeTime?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateUserResponse {
        this['id'] = id;
        return this;
    }
    public withUserAccount(userAccount: string): UpdateUserResponse {
        this['userAccount'] = userAccount;
        return this;
    }
    public withName(name: string): UpdateUserResponse {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): UpdateUserResponse {
        this['englishName'] = englishName;
        return this;
    }
    public withPhone(phone: string): UpdateUserResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): UpdateUserResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): UpdateUserResponse {
        this['email'] = email;
        return this;
    }
    public withSipNum(sipNum: string): UpdateUserResponse {
        this['sipNum'] = sipNum;
        return this;
    }
    public withVmrList(vmrList: Array<UserVmrDTO>): UpdateUserResponse {
        this['vmrList'] = vmrList;
        return this;
    }
    public withDeptCode(deptCode: string): UpdateUserResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): UpdateUserResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): UpdateUserResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withUserType(userType: number): UpdateUserResponse {
        this['userType'] = userType;
        return this;
    }
    public withAdminType(adminType: number): UpdateUserResponse {
        this['adminType'] = adminType;
        return this;
    }
    public withSignature(signature: string): UpdateUserResponse {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): UpdateUserResponse {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): UpdateUserResponse {
        this['desc'] = desc;
        return this;
    }
    public withCorp(corp: CorpBasicInfoDTO): UpdateUserResponse {
        this['corp'] = corp;
        return this;
    }
    public withFunction(_function: UserFunctionDTO): UpdateUserResponse {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: UserFunctionDTO | undefined) {
        this['function'] = _function;
    }
    public get _function() {
        return this['function'];
    }
    public withDevType(devType: QueryDeviceInfoResultDTO): UpdateUserResponse {
        this['devType'] = devType;
        return this;
    }
    public withStatus(status: number): UpdateUserResponse {
        this['status'] = status;
        return this;
    }
    public withSortLevel(sortLevel: number): UpdateUserResponse {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): UpdateUserResponse {
        this['hidePhone'] = hidePhone;
        return this;
    }
    public withVisionAccount(visionAccount: string): UpdateUserResponse {
        this['visionAccount'] = visionAccount;
        return this;
    }
    public withThirdAccount(thirdAccount: string): UpdateUserResponse {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withLicense(license: number): UpdateUserResponse {
        this['license'] = license;
        return this;
    }
    public withActiveTime(activeTime: number): UpdateUserResponse {
        this['activeTime'] = activeTime;
        return this;
    }
}