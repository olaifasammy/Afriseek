export interface RelationshipDefinition {
  type: string;

  targetTypes: string[];

  required?: boolean;

  multiple?: boolean;

  inverseType?: string;

  description?: string;
}
