import { AfriseekEntity } from "../../types/entity";
import { ontologyRegistry } from "./OntologyRegistry";

export class RelationshipTargetValidator {

  validate(
    entity: AfriseekEntity,
    targetEntityTypes: Map<string,string>
  ): void {

    const ontology =
      ontologyRegistry.get(
        entity.entityType
      );

    if (!ontology) {
      return;
    }

    for (
      const relationship
      of entity.relationships
    ) {

      const definition =
        ontology.relationships.find(
          item =>
            item.type ===
            relationship.type
        );

      if (!definition) {
        continue;
      }

      const targetType =
        targetEntityTypes.get(
          relationship.targetId
        );

      if (!targetType) {
        continue;
      }

      if (
        definition.targetTypes?.length &&
        !definition.targetTypes.includes(
          targetType
        )
      ) {
        throw new Error(
          `${entity.entityType}.${relationship.type} cannot target '${targetType}'.`
        );
      }
    }
  }
}
