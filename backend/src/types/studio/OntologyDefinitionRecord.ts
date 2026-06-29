export interface OntologyDefinitionRecord {
  id: string;

  entityType: string;

  label: string;

  parentType?: string;

  domain: string;

  description?: string;

  active: boolean;
  
  status?: 'PENDING' | 'APPROVED';

  version: number;

  createdAt: string;

  updatedAt: string;
}
