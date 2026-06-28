import { EntityService } from "../services/EntityService";
import { createEntityRepository } from "./createEntityRepository";
import { createSearchIndexer } from "./createSearchIndexer";
import { createAnalyticsService } from "./createAnalyticsService";

export function createEntityService(): EntityService {
  return new EntityService(
    createEntityRepository(),
    createSearchIndexer(),
    createAnalyticsService()
  );
}
