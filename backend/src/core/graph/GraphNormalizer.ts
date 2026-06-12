import { AfriseekEntity } from "../../types/entity";
import { Relationship } from "../../types/relationship";
import { inverseRelationships } from "../ontology/inverseRelationships";

export class GraphNormalizer {

  normalize(
    entities: AfriseekEntity[]
  ): AfriseekEntity[] {

    const map =
      new Map(
        entities.map(
          entity => [entity.id, entity]
        )
      );

    for (const entity of entities) {

      for (const relationship of entity.relationships) {

        const inverseType =
          inverseRelationships[
            relationship.type
          ];

        if (!inverseType) {
          continue;
        }

        const target =
          map.get(
            relationship.targetId
          );

        if (!target) {
          continue;
        }

        const exists =
          target.relationships.some(
            r =>
              r.targetId === entity.id &&
              r.type === inverseType
          );

        if (exists) {
          continue;
        }

        const inverse: Relationship = {
          type: inverseType,
          targetId: entity.id,
          strength: relationship.strength,
          weight: relationship.weight,
          description: relationship.description
        };

        target.relationships.push(
          inverse
        );
      }
    }

    return entities;
  }
}
