import { EntityRepository } from "../core/repositories/EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { EntityValidator } from "../modules/entity/EntityValidator";
import { VersioningService } from "./VersioningService";
import { EntityDuplicateDetectionService } from "./entity/EntityDuplicateDetectionService";
import { getDependencies } from "../config/dependencies";
import { SearchIndexer } from "./SearchIndexer";
import { AnalyticsService } from "./AnalyticsService";
import { logger } from "../config/logger";

export class EntityService {
  private validator = new EntityValidator();
  private duplicateDetector: EntityDuplicateDetectionService;

  constructor(
    private repository: EntityRepository,
    private searchIndexer: SearchIndexer,
    private analyticsService: AnalyticsService
  ) {
    this.duplicateDetector = new EntityDuplicateDetectionService(repository);
  }

  private get versioningService(): VersioningService {
    return getDependencies().versioningService;
  }

  async getAll() {
    logger.info("Fetching all entities");
    return this.repository.findAll();
  }

  async getBySlug(
    slug: string
  ) {
    logger.info({ slug }, "Fetching entity by slug");
    return this.repository.findBySlug(
      slug
    );
  }

  async getById(
    id: string
  ) {
    logger.info({ id }, "Fetching entity by id");
    return this.repository.findById(
      id
    );
  }

  async create(
    entity: AfriseekEntity
  ) {
    logger.info({ entityId: entity.id, name: entity.name }, "Creating entity");
    this.validator.validate(entity);
    const duplicates = await this.duplicateDetector.findDuplicates(entity);
    if (duplicates.length > 0) {
        logger.warn({ entityId: entity.id }, "Duplicate entity detected");
        throw new Error("Duplicate entity detected");
    }
    const created = await this.repository.create(
      entity
    );
    await this.searchIndexer.indexEntity(entity);
    await this.analyticsService.processEvent('ENTITY_CREATED', { entityId: entity.id });
    logger.info({ entityId: entity.id }, "Entity created successfully");
    return created;
  }

  async update(
    entity: AfriseekEntity
  ) {
    logger.info({ entityId: entity.id }, "Updating entity");
    this.validator.validate(entity);
    const existing = await this.repository.findById(entity.id);
    if (!existing) {
        logger.error({ entityId: entity.id }, "Entity not found for update");
        throw new Error("Entity not found");
    }
    
    await this.versioningService.createVersion(entity.id, existing, existing.version);
    
    const updatedEntity = {
        ...entity,
        version: existing.version + 1
    };

    const updated = await this.repository.update(
      updatedEntity
    );
    await this.searchIndexer.indexEntity(updatedEntity);
    await this.analyticsService.processEvent('ENTITY_UPDATED', { entityId: entity.id });
    logger.info({ entityId: entity.id }, "Entity updated successfully");
    return updated;
  }

  async delete(
    id: string
  ) {
    logger.info({ entityId: id }, "Deleting entity");
    const result = await this.repository.delete(
      id
    );
    await this.searchIndexer.deleteEntity(id);
    await this.analyticsService.processEvent('ENTITY_DELETED', { entityId: id });
    logger.info({ entityId: id }, "Entity deleted successfully");
    return result;
  }
}
