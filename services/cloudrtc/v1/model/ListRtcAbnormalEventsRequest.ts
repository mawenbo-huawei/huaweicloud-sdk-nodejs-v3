

export class ListRtcAbnormalEventsRequest {
    public app: string;
    private 'room_id'?: string | undefined;
    public uid?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor(app?: any) { 
        this['app'] = app;
    }
    public withApp(app: string): ListRtcAbnormalEventsRequest {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): ListRtcAbnormalEventsRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withUid(uid: string): ListRtcAbnormalEventsRequest {
        this['uid'] = uid;
        return this;
    }
    public withStartTime(startTime: string): ListRtcAbnormalEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcAbnormalEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ListRtcAbnormalEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRtcAbnormalEventsRequest {
        this['offset'] = offset;
        return this;
    }
}