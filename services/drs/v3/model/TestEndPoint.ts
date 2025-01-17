import { KafkaSecurity } from './KafkaSecurity';


export class TestEndPoint {
    public id: string;
    private 'net_type': TestEndPointNetTypeEnum | undefined;
    private 'db_type': TestEndPointDbTypeEnum | undefined;
    public ip: string;
    private 'db_port'?: number | undefined;
    private 'inst_id'?: string | undefined;
    private 'db_user': string | undefined;
    private 'db_password': string | undefined;
    private 'ssl_link'?: boolean | undefined;
    private 'ssl_cert_key'?: string | undefined;
    private 'ssl_cert_name'?: string | undefined;
    private 'ssl_cert_check_sum'?: string | undefined;
    private 'ssl_cert_password'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'end_point_type': TestEndPointEndPointTypeEnum | undefined;
    public region?: string;
    private 'project_id'?: string | undefined;
    private 'db_name'?: string | undefined;
    private 'kafka_security_config'?: KafkaSecurity | undefined;
    public constructor(id?: any, netType?: any, dbType?: any, ip?: any, dbUser?: any, dbPassword?: any, endPointType?: any) { 
        this['id'] = id;
        this['net_type'] = netType;
        this['db_type'] = dbType;
        this['ip'] = ip;
        this['db_user'] = dbUser;
        this['db_password'] = dbPassword;
        this['end_point_type'] = endPointType;
    }
    public withId(id: string): TestEndPoint {
        this['id'] = id;
        return this;
    }
    public withNetType(netType: TestEndPointNetTypeEnum): TestEndPoint {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: TestEndPointNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withDbType(dbType: TestEndPointDbTypeEnum): TestEndPoint {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: TestEndPointDbTypeEnum | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType() {
        return this['db_type'];
    }
    public withIp(ip: string): TestEndPoint {
        this['ip'] = ip;
        return this;
    }
    public withDbPort(dbPort: number): TestEndPoint {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort() {
        return this['db_port'];
    }
    public withInstId(instId: string): TestEndPoint {
        this['inst_id'] = instId;
        return this;
    }
    public set instId(instId: string | undefined) {
        this['inst_id'] = instId;
    }
    public get instId() {
        return this['inst_id'];
    }
    public withDbUser(dbUser: string): TestEndPoint {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser() {
        return this['db_user'];
    }
    public withDbPassword(dbPassword: string): TestEndPoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword() {
        return this['db_password'];
    }
    public withSslLink(sslLink: boolean): TestEndPoint {
        this['ssl_link'] = sslLink;
        return this;
    }
    public set sslLink(sslLink: boolean | undefined) {
        this['ssl_link'] = sslLink;
    }
    public get sslLink() {
        return this['ssl_link'];
    }
    public withSslCertKey(sslCertKey: string): TestEndPoint {
        this['ssl_cert_key'] = sslCertKey;
        return this;
    }
    public set sslCertKey(sslCertKey: string | undefined) {
        this['ssl_cert_key'] = sslCertKey;
    }
    public get sslCertKey() {
        return this['ssl_cert_key'];
    }
    public withSslCertName(sslCertName: string): TestEndPoint {
        this['ssl_cert_name'] = sslCertName;
        return this;
    }
    public set sslCertName(sslCertName: string | undefined) {
        this['ssl_cert_name'] = sslCertName;
    }
    public get sslCertName() {
        return this['ssl_cert_name'];
    }
    public withSslCertCheckSum(sslCertCheckSum: string): TestEndPoint {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
        return this;
    }
    public set sslCertCheckSum(sslCertCheckSum: string | undefined) {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
    }
    public get sslCertCheckSum() {
        return this['ssl_cert_check_sum'];
    }
    public withSslCertPassword(sslCertPassword: string): TestEndPoint {
        this['ssl_cert_password'] = sslCertPassword;
        return this;
    }
    public set sslCertPassword(sslCertPassword: string | undefined) {
        this['ssl_cert_password'] = sslCertPassword;
    }
    public get sslCertPassword() {
        return this['ssl_cert_password'];
    }
    public withVpcId(vpcId: string): TestEndPoint {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): TestEndPoint {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withEndPointType(endPointType: TestEndPointEndPointTypeEnum): TestEndPoint {
        this['end_point_type'] = endPointType;
        return this;
    }
    public set endPointType(endPointType: TestEndPointEndPointTypeEnum | undefined) {
        this['end_point_type'] = endPointType;
    }
    public get endPointType() {
        return this['end_point_type'];
    }
    public withRegion(region: string): TestEndPoint {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): TestEndPoint {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withDbName(dbName: string): TestEndPoint {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withKafkaSecurityConfig(kafkaSecurityConfig: KafkaSecurity): TestEndPoint {
        this['kafka_security_config'] = kafkaSecurityConfig;
        return this;
    }
    public set kafkaSecurityConfig(kafkaSecurityConfig: KafkaSecurity | undefined) {
        this['kafka_security_config'] = kafkaSecurityConfig;
    }
    public get kafkaSecurityConfig() {
        return this['kafka_security_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TestEndPointNetTypeEnum {
    VPN = 'vpn',
    VPC = 'vpc',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum TestEndPointDbTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    GAUSSDBV5 = 'gaussdbv5',
    POSTGRESQL = 'postgresql',
    KAFKA = 'kafka',
    GAUSSDBV5HA = 'gaussdbv5ha'
}
/**
    * @export
    * @enum {string}
    */
export enum TestEndPointEndPointTypeEnum {
    SO = 'so',
    TA = 'ta'
}
