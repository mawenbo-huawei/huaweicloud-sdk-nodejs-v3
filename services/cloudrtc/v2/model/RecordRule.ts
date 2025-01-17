import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';


export class RecordRule {
    private 'rule_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'obs_addr'?: RecordObsFileAddr | undefined;
    private 'record_formats'?: Array<RecordRuleRecordFormatsEnum> | undefined;
    private 'hls_config'?: HLSRecordConfig | undefined;
    private 'mp4_config'?: MP4RecordConfig | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RecordRule {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withAppId(appId: string): RecordRule {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): RecordRule {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr() {
        return this['obs_addr'];
    }
    public withRecordFormats(recordFormats: Array<RecordRuleRecordFormatsEnum>): RecordRule {
        this['record_formats'] = recordFormats;
        return this;
    }
    public set recordFormats(recordFormats: Array<RecordRuleRecordFormatsEnum> | undefined) {
        this['record_formats'] = recordFormats;
    }
    public get recordFormats() {
        return this['record_formats'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): RecordRule {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig() {
        return this['hls_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): RecordRule {
        this['mp4_config'] = mp4Config;
        return this;
    }
    public set mp4Config(mp4Config: MP4RecordConfig | undefined) {
        this['mp4_config'] = mp4Config;
    }
    public get mp4Config() {
        return this['mp4_config'];
    }
    public withCreateTime(createTime: string): RecordRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RecordRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordRuleRecordFormatsEnum {
    HLS = 'HLS',
    MP4 = 'MP4'
}
