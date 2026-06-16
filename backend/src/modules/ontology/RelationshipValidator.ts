import { ontologyRegistry }
from "./OntologyRegistry";

import { OntologyValidationError }
from "./errors/OntologyValidationError";

export class RelationshipValidator {

  validate(): void {

    const ontologies =
      ontologyRegistry.getAll();

    for (
      const ontology
      of ontologies
    ) {

      for (
        const relationship
        of ontology.relationships
      ) {

        for (
          const targetType
          of (
            relationship.targetTypes
            ?? []
          )
        ) {

          const exists =
            ontologyRegistry.has(
              targetType
            );

          if (!exists) {

            throw new OntologyValidationError(
              `Unknown relationship target '${targetType}' in '${ontology.entityType}'`
            );

          }
        }
      }
    }
  }
}

export const relationshipValidator =
  new RelationshipValidator();
