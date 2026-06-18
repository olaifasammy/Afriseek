import { EntityTypeRecord } from "../../types/studio/EntityTypeRecord";
import { loadOntologyDefinitions } from "../../ontology/registry/loadOntologyDefinitions";

export function seedEntityTypes():
  EntityTypeRecord[] {

  const now =
    new Date().toISOString();

  return loadOntologyDefinitions()
    .map(
      ontology => ({
        id:
          ontology.entityType,

        key:
          ontology.entityType,

        label:
          ontology.label,

        description:
          ontology.description,

        parentType:
          ontology.parentType,

        domain:
          ontology.domain,

        active: true,

        createdAt: now,

        updatedAt: now
      })
    );
}
