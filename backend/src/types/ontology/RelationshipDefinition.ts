export type Cardinality = 'one-to-one' | 'one-to-many' | 'many-to-one' | 'many-to-many';

export interface RelationshipDefinition {
  type: string;

  targetTypes: string[];

  required?: boolean;

  multiple?: boolean;

  cardinality: Cardinality;

  inverseType?: string;

  description?: string;
}
