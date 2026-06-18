export interface EntityTypeRecord {
  id: string;

  key: string;

  label: string;

  description?: string;

  parentType?: string;

  domain: string;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
