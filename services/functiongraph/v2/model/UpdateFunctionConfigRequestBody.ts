import { CustomImage } from './CustomImage';
import { FuncLogConfig } from './FuncLogConfig';
import { FuncVpc } from './FuncVpc';
import { MountConfig } from './MountConfig';
import { NetworkControlConfig } from './NetworkControlConfig';
import { StrategyConfig } from './StrategyConfig';


export class UpdateFunctionConfigRequestBody {
    private 'func_name': string | undefined;
    public runtime: UpdateFunctionConfigRequestBodyRuntimeEnum;
    public timeout: number;
    public handler: string;
    private 'memory_size': number | undefined;
    private 'gpu_memory'?: number | undefined;
    private 'user_data'?: string | undefined;
    private 'encrypted_user_data'?: string | undefined;
    public xrole?: string;
    private 'app_xrole'?: string | undefined;
    public description?: string;
    private 'func_vpc'?: FuncVpc | undefined;
    private 'mount_config'?: MountConfig | undefined;
    private 'strategy_config'?: StrategyConfig | undefined;
    private 'custom_image'?: CustomImage | undefined;
    private 'extend_config'?: string | undefined;
    private 'initializer_handler'?: string | undefined;
    private 'initializer_timeout'?: number | undefined;
    private 'ephemeral_storage'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'log_config'?: FuncLogConfig | undefined;
    private 'network_controller'?: NetworkControlConfig | undefined;
    private 'is_stateful_function'?: boolean | undefined;
    private 'enable_dynamic_memory'?: boolean | undefined;
    private 'enable_auth_in_header'?: boolean | undefined;
    private 'domain_names'?: string | undefined;
    private 'restore_hook_handler'?: string | undefined;
    private 'restore_hook_timeout'?: number | undefined;
    public constructor(funcName?: any, runtime?: any, timeout?: any, handler?: any, memorySize?: any) { 
        this['func_name'] = funcName;
        this['runtime'] = runtime;
        this['timeout'] = timeout;
        this['handler'] = handler;
        this['memory_size'] = memorySize;
    }
    public withFuncName(funcName: string): UpdateFunctionConfigRequestBody {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withRuntime(runtime: UpdateFunctionConfigRequestBodyRuntimeEnum): UpdateFunctionConfigRequestBody {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): UpdateFunctionConfigRequestBody {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): UpdateFunctionConfigRequestBody {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): UpdateFunctionConfigRequestBody {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize() {
        return this['memory_size'];
    }
    public withGpuMemory(gpuMemory: number): UpdateFunctionConfigRequestBody {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: number | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory() {
        return this['gpu_memory'];
    }
    public withUserData(userData: string): UpdateFunctionConfigRequestBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): UpdateFunctionConfigRequestBody {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData() {
        return this['encrypted_user_data'];
    }
    public withXrole(xrole: string): UpdateFunctionConfigRequestBody {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): UpdateFunctionConfigRequestBody {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole() {
        return this['app_xrole'];
    }
    public withDescription(description: string): UpdateFunctionConfigRequestBody {
        this['description'] = description;
        return this;
    }
    public withFuncVpc(funcVpc: FuncVpc): UpdateFunctionConfigRequestBody {
        this['func_vpc'] = funcVpc;
        return this;
    }
    public set funcVpc(funcVpc: FuncVpc | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc() {
        return this['func_vpc'];
    }
    public withMountConfig(mountConfig: MountConfig): UpdateFunctionConfigRequestBody {
        this['mount_config'] = mountConfig;
        return this;
    }
    public set mountConfig(mountConfig: MountConfig | undefined) {
        this['mount_config'] = mountConfig;
    }
    public get mountConfig() {
        return this['mount_config'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): UpdateFunctionConfigRequestBody {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig() {
        return this['strategy_config'];
    }
    public withCustomImage(customImage: CustomImage): UpdateFunctionConfigRequestBody {
        this['custom_image'] = customImage;
        return this;
    }
    public set customImage(customImage: CustomImage | undefined) {
        this['custom_image'] = customImage;
    }
    public get customImage() {
        return this['custom_image'];
    }
    public withExtendConfig(extendConfig: string): UpdateFunctionConfigRequestBody {
        this['extend_config'] = extendConfig;
        return this;
    }
    public set extendConfig(extendConfig: string | undefined) {
        this['extend_config'] = extendConfig;
    }
    public get extendConfig() {
        return this['extend_config'];
    }
    public withInitializerHandler(initializerHandler: string): UpdateFunctionConfigRequestBody {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler() {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): UpdateFunctionConfigRequestBody {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout() {
        return this['initializer_timeout'];
    }
    public withEphemeralStorage(ephemeralStorage: number): UpdateFunctionConfigRequestBody {
        this['ephemeral_storage'] = ephemeralStorage;
        return this;
    }
    public set ephemeralStorage(ephemeralStorage: number | undefined) {
        this['ephemeral_storage'] = ephemeralStorage;
    }
    public get ephemeralStorage() {
        return this['ephemeral_storage'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateFunctionConfigRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withLogConfig(logConfig: FuncLogConfig): UpdateFunctionConfigRequestBody {
        this['log_config'] = logConfig;
        return this;
    }
    public set logConfig(logConfig: FuncLogConfig | undefined) {
        this['log_config'] = logConfig;
    }
    public get logConfig() {
        return this['log_config'];
    }
    public withNetworkController(networkController: NetworkControlConfig): UpdateFunctionConfigRequestBody {
        this['network_controller'] = networkController;
        return this;
    }
    public set networkController(networkController: NetworkControlConfig | undefined) {
        this['network_controller'] = networkController;
    }
    public get networkController() {
        return this['network_controller'];
    }
    public withIsStatefulFunction(isStatefulFunction: boolean): UpdateFunctionConfigRequestBody {
        this['is_stateful_function'] = isStatefulFunction;
        return this;
    }
    public set isStatefulFunction(isStatefulFunction: boolean | undefined) {
        this['is_stateful_function'] = isStatefulFunction;
    }
    public get isStatefulFunction() {
        return this['is_stateful_function'];
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): UpdateFunctionConfigRequestBody {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory() {
        return this['enable_dynamic_memory'];
    }
    public withEnableAuthInHeader(enableAuthInHeader: boolean): UpdateFunctionConfigRequestBody {
        this['enable_auth_in_header'] = enableAuthInHeader;
        return this;
    }
    public set enableAuthInHeader(enableAuthInHeader: boolean | undefined) {
        this['enable_auth_in_header'] = enableAuthInHeader;
    }
    public get enableAuthInHeader() {
        return this['enable_auth_in_header'];
    }
    public withDomainNames(domainNames: string): UpdateFunctionConfigRequestBody {
        this['domain_names'] = domainNames;
        return this;
    }
    public set domainNames(domainNames: string | undefined) {
        this['domain_names'] = domainNames;
    }
    public get domainNames() {
        return this['domain_names'];
    }
    public withRestoreHookHandler(restoreHookHandler: string): UpdateFunctionConfigRequestBody {
        this['restore_hook_handler'] = restoreHookHandler;
        return this;
    }
    public set restoreHookHandler(restoreHookHandler: string | undefined) {
        this['restore_hook_handler'] = restoreHookHandler;
    }
    public get restoreHookHandler() {
        return this['restore_hook_handler'];
    }
    public withRestoreHookTimeout(restoreHookTimeout: number): UpdateFunctionConfigRequestBody {
        this['restore_hook_timeout'] = restoreHookTimeout;
        return this;
    }
    public set restoreHookTimeout(restoreHookTimeout: number | undefined) {
        this['restore_hook_timeout'] = restoreHookTimeout;
    }
    public get restoreHookTimeout() {
        return this['restore_hook_timeout'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFunctionConfigRequestBodyRuntimeEnum {
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP7_3 = 'PHP7.3',
    PYTHON3_9 = 'Python3.9',
    CUSTOM = 'Custom',
    HTTP = 'http'
}
