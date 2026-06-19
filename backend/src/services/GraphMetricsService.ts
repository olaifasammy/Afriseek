import { getDependencies } from "../config/dependencies";

export class GraphMetricsService {

  async getMetrics() {

    const entities =
      await getDependencies()
        .entityRepository
        .findAll();

    const relationshipCount =
      entities.reduce(
        (total, entity) =>
          total +
          (
            entity.relationships
              ?.length ?? 0
          ),
        0
      );

    const entityTypes =
      new Set(
        entities.map(
          entity =>
            entity.entityType
        )
      );

    const averageRelationships =
      entities.length === 0
        ? 0
        : Number(
            (
              relationshipCount /
              entities.length
            ).toFixed(2)
          );

    return {
      entityCount:
        entities.length,

      relationshipCount,

      entityTypeCount:
        entityTypes.size,

      averageRelationships,

      isolatedEntities:
        entities.filter(
          entity =>
            (
              entity.relationships
                ?.length ?? 0
            ) === 0
        ).length
    };
  }
}
