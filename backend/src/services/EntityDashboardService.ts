import { getDependencies } from "../config/dependencies";

export class EntityDashboardService {

async getMetrics() {

const {
  entityRepository
} = getDependencies();

const entities =
  await entityRepository.findAll();

return {
  totalEntities:
    entities.length,

  verifiedEntities:
    entities.filter(
      e => e.metadata?.verified
    ).length,

  unverifiedEntities:
    entities.filter(
      e => !e.metadata?.verified
    ).length,

  orphanEntities:
    entities.filter(
      e => !e.relationships?.length
    ).length,

  duplicateCandidates: 0,

  entitiesWithoutSources:
    entities.filter(
      e => !e.sources?.length
    ).length,

  entitiesWithoutMedia:
    entities.filter(
      e =>
        !e.media?.coverImage &&
        !e.media?.thumbnailImage
    ).length,

  entitiesWithoutArticles:
    entities.filter(
      e =>
        !(e.metadata as any)
          ?.articleIds?.length
    ).length,

  entitiesWithoutTimelines:
    entities.filter(
      e =>
        !(e.metadata as any)
          ?.timelineIds?.length
    ).length
};

}
}
