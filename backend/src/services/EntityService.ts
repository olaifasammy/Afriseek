import { EntityRepository } from "../core/repositories/EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { EntityValidator } from "../modules/entity/EntityValidator";
import { VersioningService } from "./VersioningService";
import { EntityDuplicateDetectionService } from "./entity/EntityDuplicateDetectionService";
import { getDependencies } from "../config/dependencies";
import { SearchIndexer } from "./SearchIndexer";
import { AnalyticsService } from "./AnalyticsService";

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
    return this.repository.findAll();
  }

  async getBySlug(
    slug: string
  ) {
    return this.repository.findBySlug(
      slug
    );
  }

  async getById(
    id: string
  ) {
    return this.repository.findById(
      id
    );
  }

  async create(
    entity: AfriseekEntity
  ) {
    this.validator.validate(entity);
    const duplicates = await this.duplicateDetector.findDuplicates(entity);
    if (duplicates.length > 0) {
        throw new Error("Duplicate entity detected");
    }
    const created = await this.repository.create(
      entity
    );
    await this.searchIndexer.indexEntity(entity);
    await this.analyticsService.processEvent('ENTITY_CREATED', { entityId: entity.id });
    return created;
  }

  async update(
    entity: AfriseekEntity
  ) {
    this.validator.validate(entity);
    const existing = await this.repository.findById(entity.id);
    if (!existing) {
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
    return updated;
  }

  async delete(
    id: string
  ) {
    const result = await this.repository.delete(
      id
    );
    await this.searchIndexer.deleteEntity(id);
    await this.analyticsService.processEvent('ENTITY_DELETED', { entityId: id });
    return result;
  }
}
