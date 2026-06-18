export interface RelationshipTypeRecord {
  id: string;

  type: string;

  label: string;

  inverseType?: string;

  description?: string;

  multiple: boolean;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
