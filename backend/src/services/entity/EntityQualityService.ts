export class EntityQualityService {
  async getReport() {
    return {
      score: 100,
      entitiesWithoutSources: 0,
      entitiesWithoutMedia: 0,
      entitiesWithoutArticles: 0,
      entitiesWithoutTimelines: 0
    };
  }
}
