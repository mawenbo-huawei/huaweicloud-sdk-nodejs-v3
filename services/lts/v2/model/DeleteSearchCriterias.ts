

export class DeleteSearchCriterias {
    private 'eps_id'?: string | undefined;
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withEpsId(epsId: string): DeleteSearchCriterias {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId() {
        return this['eps_id'];
    }
    public withId(id: string): DeleteSearchCriterias {
        this['id'] = id;
        return this;
    }
}