import { AfriseekEntity } from "../../types/entity";
import { ontologyRegistry } from "./OntologyRegistry";
import { MetadataTypeValidator } from "./MetadataTypeValidator";

export class EntityOntologyValidator {

  private metadataValidator =
    new MetadataTypeValidator();

  validate(
    entity: AfriseekEntity
  ): void {

    const ontology =
      ontologyRegistry.get(
        entity.entityType
      );

    if (!ontology) {
      throw new Error(
        `Ontology not found for '${entity.entityType}'.`
      );
    }

    const metadata =
      entity.metadataFields ?? [];

    for (
      const definition
      of ontology.metadata
    ) {

      const field =
        metadata.find(
          item =>
            item.key ===
            definition.key
        );

      if (
        definition.required &&
        !field
      ) {
        throw new Error(
          `${entity.entityType}: required metadata '${definition.key}' missing.`
        );
      }

      if (
        field
      ) {
        this.metadataValidator.validate(
          field,
          definition.type
        );
      }
    }

    for (
      const relationship
      of ontology.relationships
    ) {

      if (
        !relationship.required
      ) {
        continue;
      }

      const exists =
        entity.relationships.some(
          item =>
            item.type ===
            relationship.type
        );

      if (!exists) {
        throw new Error(
          `${entity.entityType}: required relationship '${relationship.type}' missing.`
        );
      }
    }
  }
}
