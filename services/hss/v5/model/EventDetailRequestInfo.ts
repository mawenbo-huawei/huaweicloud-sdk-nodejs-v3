

export class EventDetailRequestInfo {
    private 'agent_id'?: string;
    private 'process_pid'?: number;
    private 'file_hash'?: string;
    private 'file_path'?: string;
    private 'file_attr'?: string;
    public keyword?: string;
    public hash?: string;
    private 'private_ip'?: string;
    private 'login_ip'?: string;
    private 'login_user_name'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): EventDetailRequestInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withProcessPid(processPid: number): EventDetailRequestInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withFileHash(fileHash: string): EventDetailRequestInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFilePath(filePath: string): EventDetailRequestInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileAttr(fileAttr: string): EventDetailRequestInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
    public withKeyword(keyword: string): EventDetailRequestInfo {
        this['keyword'] = keyword;
        return this;
    }
    public withHash(hash: string): EventDetailRequestInfo {
        this['hash'] = hash;
        return this;
    }
    public withPrivateIp(privateIp: string): EventDetailRequestInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withLoginIp(loginIp: string): EventDetailRequestInfo {
        this['login_ip'] = loginIp;
        return this;
    }
    public set loginIp(loginIp: string  | undefined) {
        this['login_ip'] = loginIp;
    }
    public get loginIp(): string | undefined {
        return this['login_ip'];
    }
    public withLoginUserName(loginUserName: string): EventDetailRequestInfo {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withContainerId(containerId: string): EventDetailRequestInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): EventDetailRequestInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
}