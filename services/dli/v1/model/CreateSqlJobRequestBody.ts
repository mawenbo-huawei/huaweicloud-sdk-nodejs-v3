import { Tag } from './Tag';


export class CreateSqlJobRequestBody {
    public sql?: string;
    private 'engine_type'?: string;
    public currentdb?: string;
    private 'queue_name'?: string;
    public conf?: Array<string>;
    public tags?: Array<Tag>;
    public constructor(sql?: string) { 
        this['sql'] = sql;
    }
    public withSql(sql: string): CreateSqlJobRequestBody {
        this['sql'] = sql;
        return this;
    }
    public withEngineType(engineType: string): CreateSqlJobRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withCurrentdb(currentdb: string): CreateSqlJobRequestBody {
        this['currentdb'] = currentdb;
        return this;
    }
    public withQueueName(queueName: string): CreateSqlJobRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withConf(conf: Array<string>): CreateSqlJobRequestBody {
        this['conf'] = conf;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateSqlJobRequestBody {
        this['tags'] = tags;
        return this;
    }
}