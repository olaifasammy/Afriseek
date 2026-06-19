export interface OntologyDefinitionRecord {
  id: string;

  entityType: string;

  label: string;

  parentType?: string;

  domain: string;

  description?: string;

  metadata: any[];

  relationships: any[];

  sections: any[];

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
