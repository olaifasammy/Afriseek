import { getDependencies } from "../config/dependencies";

export class GraphIntegrityService {
  async run() {
    const entities =
      await getDependencies()
        .entityRepository
        .findAll();

    const entityIds = new Set(
      entities.map(entity => entity.id)
    );

    let relationshipCount = 0;
    let brokenRelationships = 0;

    const orphanEntities = entities.filter(
      entity => !entity.relationships?.length
    );

    for (const entity of entities) {
      for (const relationship of entity.relationships ?? []) {
        relationshipCount++;

        if (!entityIds.has(relationship.targetId)) {
          brokenRelationships++;
        }
      }
    }

    return {
      entityCount: entities.length,
      relationshipCount,
      orphanEntities: orphanEntities.length,
      brokenRelationships,
      duplicateCandidates: 0,
      passed: brokenRelationships === 0
    };
  }
}
