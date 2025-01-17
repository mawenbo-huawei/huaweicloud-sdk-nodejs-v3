

export class UpdateEnterpriseRouter {
    public name?: string;
    public description?: string;
    private 'enable_default_propagation'?: boolean | undefined;
    private 'enable_default_association'?: boolean | undefined;
    private 'default_propagation_route_table_id'?: string | undefined;
    private 'default_association_route_table_id'?: string | undefined;
    private 'auto_accept_shared_attachments'?: boolean | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateEnterpriseRouter {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateEnterpriseRouter {
        this['description'] = description;
        return this;
    }
    public withEnableDefaultPropagation(enableDefaultPropagation: boolean): UpdateEnterpriseRouter {
        this['enable_default_propagation'] = enableDefaultPropagation;
        return this;
    }
    public set enableDefaultPropagation(enableDefaultPropagation: boolean | undefined) {
        this['enable_default_propagation'] = enableDefaultPropagation;
    }
    public get enableDefaultPropagation() {
        return this['enable_default_propagation'];
    }
    public withEnableDefaultAssociation(enableDefaultAssociation: boolean): UpdateEnterpriseRouter {
        this['enable_default_association'] = enableDefaultAssociation;
        return this;
    }
    public set enableDefaultAssociation(enableDefaultAssociation: boolean | undefined) {
        this['enable_default_association'] = enableDefaultAssociation;
    }
    public get enableDefaultAssociation() {
        return this['enable_default_association'];
    }
    public withDefaultPropagationRouteTableId(defaultPropagationRouteTableId: string): UpdateEnterpriseRouter {
        this['default_propagation_route_table_id'] = defaultPropagationRouteTableId;
        return this;
    }
    public set defaultPropagationRouteTableId(defaultPropagationRouteTableId: string | undefined) {
        this['default_propagation_route_table_id'] = defaultPropagationRouteTableId;
    }
    public get defaultPropagationRouteTableId() {
        return this['default_propagation_route_table_id'];
    }
    public withDefaultAssociationRouteTableId(defaultAssociationRouteTableId: string): UpdateEnterpriseRouter {
        this['default_association_route_table_id'] = defaultAssociationRouteTableId;
        return this;
    }
    public set defaultAssociationRouteTableId(defaultAssociationRouteTableId: string | undefined) {
        this['default_association_route_table_id'] = defaultAssociationRouteTableId;
    }
    public get defaultAssociationRouteTableId() {
        return this['default_association_route_table_id'];
    }
    public withAutoAcceptSharedAttachments(autoAcceptSharedAttachments: boolean): UpdateEnterpriseRouter {
        this['auto_accept_shared_attachments'] = autoAcceptSharedAttachments;
        return this;
    }
    public set autoAcceptSharedAttachments(autoAcceptSharedAttachments: boolean | undefined) {
        this['auto_accept_shared_attachments'] = autoAcceptSharedAttachments;
    }
    public get autoAcceptSharedAttachments() {
        return this['auto_accept_shared_attachments'];
    }
}