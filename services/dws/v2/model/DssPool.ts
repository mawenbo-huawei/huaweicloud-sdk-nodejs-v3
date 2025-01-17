

export class DssPool {
    public id: string;
    public name: string;
    public type: string;
    private 'project_id': string | undefined;
    private 'availability_zone': string | undefined;
    public capacity: number;
    public status: string;
    private 'created_at': string | undefined;
    public constructor(id?: any, name?: any, type?: any, projectId?: any, availabilityZone?: any, capacity?: any, status?: any, createdAt?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['project_id'] = projectId;
        this['availability_zone'] = availabilityZone;
        this['capacity'] = capacity;
        this['status'] = status;
        this['created_at'] = createdAt;
    }
    public withId(id: string): DssPool {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DssPool {
        this['name'] = name;
        return this;
    }
    public withType(type: string): DssPool {
        this['type'] = type;
        return this;
    }
    public withProjectId(projectId: string): DssPool {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withAvailabilityZone(availabilityZone: string): DssPool {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withCapacity(capacity: number): DssPool {
        this['capacity'] = capacity;
        return this;
    }
    public withStatus(status: string): DssPool {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): DssPool {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
}