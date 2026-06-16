import { MetadataValueType } from "../../modules/ontology/OntologyTypes";

export interface MetadataDefinition {
  key: string;

  label: string;

  type: MetadataValueType;

  required: boolean;

  multiple?: boolean;

  searchable?: boolean;

  filterable?: boolean;

  sortable?: boolean;

  localized?: boolean;

  description?: string;

  defaultValue?: unknown;

  min?: number;

  max?: number;

  allowedValues?: string[];
}
