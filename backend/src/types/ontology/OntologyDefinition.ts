import { MetadataDefinition } from "./MetadataDefinition";
import { RelationshipDefinition } from "./RelationshipDefinition";
import { SectionDefinition } from "./SectionDefinition";

export interface OntologyDefinition {
  entityType: string;

  label: string;

  parentType?: string;

  domain: string;

  description?: string;

  metadata: MetadataDefinition[];

  relationships: RelationshipDefinition[];

  sections: SectionDefinition[];
}
