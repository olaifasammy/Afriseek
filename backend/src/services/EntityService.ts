import { EntityRepository } from "../core/repositories/EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { EntityValidator } from "../modules/entity/EntityValidator";

export class EntityService {
  private validator = new EntityValidator();

  constructor(
    private repository: EntityRepository
  ) {}

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
    return this.repository.create(
      entity
    );
  }

  async update(
    entity: AfriseekEntity
  ) {
    this.validator.validate(entity);
    return this.repository.update(
      entity
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
