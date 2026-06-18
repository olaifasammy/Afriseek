export interface ValidationRuleRecord {
  id: string;

  sourceType: string;

  relationshipType: string;

  targetType: string;

  required: boolean;

  multiple: boolean;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
