import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";

export class OntologyValidator {

  validate(
    definition: OntologyDefinition,
    existing: OntologyDefinition[]
  ): void {

    this.validateEntityType(
      definition
    );

    this.validateMetadata(
      definition
    );

    this.validateRelationships(
      definition
    );

    this.validateSections(
      definition
    );

    this.validateDuplicateEntityType(
      definition,
      existing
    );
  }

  private validateEntityType(
    definition: OntologyDefinition
  ): void {

    if (!definition.entityType?.trim()) {
      throw new Error(
        "Ontology entityType is required."
      );
    }

    if (!definition.label?.trim()) {
      throw new Error(
        `${definition.entityType}: label is required.`
      );
    }

    if (!definition.domain?.trim()) {
      throw new Error(
        `${definition.entityType}: domain is required.`
      );
    }
  }

  private validateMetadata(
    definition: OntologyDefinition
  ): void {

    const keys =
      new Set<string>();

    for (
      const metadata
      of definition.metadata
    ) {

      if (!metadata.key) {
        throw new Error(
          `${definition.entityType}: metadata key missing.`
        );
      }

      if (keys.has(metadata.key)) {
        throw new Error(
          `${definition.entityType}: duplicate metadata '${metadata.key}'.`
        );
      }

      keys.add(
        metadata.key
      );
    }
  }

  private validateRelationships(
    definition: OntologyDefinition
  ): void {

    const keys =
      new Set<string>();

    for (
      const relationship
      of definition.relationships
    ) {

      if (!relationship.type) {
        throw new Error(
          `${definition.entityType}: relationship type missing.`
        );
      }

      const key =
        relationship.type;

      if (keys.has(key)) {
        throw new Error(
          `${definition.entityType}: duplicate relationship '${key}'.`
        );
      }

      keys.add(key);
    }
  }

  private validateSections(
    definition: OntologyDefinition
  ): void {

    const keys =
      new Set<string>();

    const orders =
      new Set<number>();

    for (
      const section
      of definition.sections
    ) {

      if (!section.key) {
        throw new Error(
          `${definition.entityType}: section key missing.`
        );
      }

      if (keys.has(section.key)) {
        throw new Error(
          `${definition.entityType}: duplicate section '${section.key}'.`
        );
      }

      if (
        section.order !== undefined
      ) {

        if (
          orders.has(
            section.order
          )
        ) {
          throw new Error(
            `${definition.entityType}: duplicate section order '${section.order}'.`
          );
        }

        orders.add(
          section.order
        );
      }

      keys.add(
        section.key
      );
    }
  }

  private validateDuplicateEntityType(
    definition: OntologyDefinition,
    existing: OntologyDefinition[]
  ): void {

    const duplicate =
      existing.find(
        ontology =>
          ontology.entityType ===
          definition.entityType
      );

    if (duplicate) {
      throw new Error(
        `Duplicate ontology entityType '${definition.entityType}'.`
      );
    }
  }
}
