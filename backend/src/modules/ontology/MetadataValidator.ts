import { ontologyRegistry }
from "./OntologyRegistry";

import { OntologyValidationError }
from "./errors/OntologyValidationError";

export class MetadataValidator {

  validate(): void {

    const ontologies =
      ontologyRegistry.getAll();

    for (
      const ontology
      of ontologies
    ) {

      const keys =
        new Set<string>();

      for (
        const field
        of ontology.metadata
      ) {

        if (
          keys.has(field.key)
        ) {

          throw new OntologyValidationError(
            `Duplicate metadata key '${field.key}' in '${ontology.entityType}'`
          );

        }

        keys.add(
          field.key
        );
      }
    }
  }
}

export const metadataValidator =
  new MetadataValidator();
