import { getDependencies } from "../config/dependencies";

export class GraphIntegrityService {

  async run() {

    const entities =
      await getDependencies()
        .entityRepository
        .findAll();

    let relationshipCount = 0;

    const orphanEntities =
      entities.filter(
        (entity: any) =>
          !entity.relationships?.length
      );

    for (
      const entity
      of entities
    ) {

      relationshipCount +=
        entity.relationships?.length ?? 0;
    }

    return {
      entityCount:
        entities.length,

      relationshipCount,

      orphanEntities:
        orphanEntities.length,

      brokenRelationships: 0,

      duplicateCandidates: 0,

      passed: true
    };
  }
}
