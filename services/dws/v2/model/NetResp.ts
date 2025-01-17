

export class NetResp {
    private 'virtual_cluster_id'?: number | undefined;
    public ctime?: number;
    private 'host_id'?: number | undefined;
    private 'host_name'?: string | undefined;
    private 'instance_name'?: string | undefined;
    public up?: boolean;
    public speed?: number;
    private 'recv_packets'?: number | undefined;
    private 'send_packets'?: number | undefined;
    private 'recv_drop'?: number | undefined;
    private 'recv_rate'?: number | undefined;
    private 'send_rate'?: number | undefined;
    private 'io_rate'?: number | undefined;
    private 'interface_name'?: string | undefined;
    public constructor() { 
    }
    public withVirtualClusterId(virtualClusterId: number): NetResp {
        this['virtual_cluster_id'] = virtualClusterId;
        return this;
    }
    public set virtualClusterId(virtualClusterId: number | undefined) {
        this['virtual_cluster_id'] = virtualClusterId;
    }
    public get virtualClusterId() {
        return this['virtual_cluster_id'];
    }
    public withCtime(ctime: number): NetResp {
        this['ctime'] = ctime;
        return this;
    }
    public withHostId(hostId: number): NetResp {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: number | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
    public withHostName(hostName: string): NetResp {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withInstanceName(instanceName: string): NetResp {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName() {
        return this['instance_name'];
    }
    public withUp(up: boolean): NetResp {
        this['up'] = up;
        return this;
    }
    public withSpeed(speed: number): NetResp {
        this['speed'] = speed;
        return this;
    }
    public withRecvPackets(recvPackets: number): NetResp {
        this['recv_packets'] = recvPackets;
        return this;
    }
    public set recvPackets(recvPackets: number | undefined) {
        this['recv_packets'] = recvPackets;
    }
    public get recvPackets() {
        return this['recv_packets'];
    }
    public withSendPackets(sendPackets: number): NetResp {
        this['send_packets'] = sendPackets;
        return this;
    }
    public set sendPackets(sendPackets: number | undefined) {
        this['send_packets'] = sendPackets;
    }
    public get sendPackets() {
        return this['send_packets'];
    }
    public withRecvDrop(recvDrop: number): NetResp {
        this['recv_drop'] = recvDrop;
        return this;
    }
    public set recvDrop(recvDrop: number | undefined) {
        this['recv_drop'] = recvDrop;
    }
    public get recvDrop() {
        return this['recv_drop'];
    }
    public withRecvRate(recvRate: number): NetResp {
        this['recv_rate'] = recvRate;
        return this;
    }
    public set recvRate(recvRate: number | undefined) {
        this['recv_rate'] = recvRate;
    }
    public get recvRate() {
        return this['recv_rate'];
    }
    public withSendRate(sendRate: number): NetResp {
        this['send_rate'] = sendRate;
        return this;
    }
    public set sendRate(sendRate: number | undefined) {
        this['send_rate'] = sendRate;
    }
    public get sendRate() {
        return this['send_rate'];
    }
    public withIoRate(ioRate: number): NetResp {
        this['io_rate'] = ioRate;
        return this;
    }
    public set ioRate(ioRate: number | undefined) {
        this['io_rate'] = ioRate;
    }
    public get ioRate() {
        return this['io_rate'];
    }
    public withInterfaceName(interfaceName: string): NetResp {
        this['interface_name'] = interfaceName;
        return this;
    }
    public set interfaceName(interfaceName: string | undefined) {
        this['interface_name'] = interfaceName;
    }
    public get interfaceName() {
        return this['interface_name'];
    }
}