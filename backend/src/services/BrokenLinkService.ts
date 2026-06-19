import { getDependencies } from "../config/dependencies";

export class BrokenLinkService {

  async getAll() {

    const entities =
      await getDependencies()
        .entityRepository
        .findAll();

    const ids =
      new Set(
        entities.map(
          entity => entity.id
        )
      );

    const broken = [];

    for (
      const entity
      of entities
    ) {

      for (
        const relationship
        of (
          entity.relationships ?? []
        )
      ) {

        if (
          !ids.has(
            relationship.targetId
          )
        ) {

          broken.push({
            sourceId:
              entity.id,
            sourceType:
              entity.entityType,
            relationshipType:
              relationship.type,
            missingTargetId:
              relationship.targetId
          });
        }
      }
    }

    return broken;
  }
}
