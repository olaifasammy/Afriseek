import { EntityRepository } from "../core/repositories/EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { EntityValidator } from "../modules/entity/EntityValidator";
import { VersioningService } from "./VersioningService";
import { EntityDuplicateDetectionService } from "./entity/EntityDuplicateDetectionService";
import { getDependencies } from "../config/dependencies";

export class EntityService {
  private validator = new EntityValidator();
  private duplicateDetector: EntityDuplicateDetectionService;

  constructor(
    private repository: EntityRepository
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
    return this.repository.create(
      entity
    );
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

    return this.repository.update(
      updatedEntity
    );
  }

  async delete(
    id: string
  ) {
    return this.repository.delete(
      id
    );
  }
}
