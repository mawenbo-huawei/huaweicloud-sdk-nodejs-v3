
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlarmSubResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public enable?: string;
    private 'alarm_level'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'name_space'?: string | undefined;
    private 'notification_target'?: string | undefined;
    private 'notification_target_name'?: string | undefined;
    private 'notification_target_type'?: string | undefined;
    public language?: string;
    private 'time_zone'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAlarmSubResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateAlarmSubResponse {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: string): CreateAlarmSubResponse {
        this['enable'] = enable;
        return this;
    }
    public withAlarmLevel(alarmLevel: string): CreateAlarmSubResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel() {
        return this['alarm_level'];
    }
    public withProjectId(projectId: string): CreateAlarmSubResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withNameSpace(nameSpace: string): CreateAlarmSubResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
        return this['name_space'];
    }
    public withNotificationTarget(notificationTarget: string): CreateAlarmSubResponse {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): CreateAlarmSubResponse {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): CreateAlarmSubResponse {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
    public withLanguage(language: string): CreateAlarmSubResponse {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): CreateAlarmSubResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone() {
        return this['time_zone'];
    }
}