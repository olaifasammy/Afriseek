import { EntityRepository } from "../core/repositories/EntityRepository";
import { AfriseekEntity } from "../types/entity";

export class EntityService {

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
    return this.repository.create(
      entity
    );
  }

  async update(
    entity: AfriseekEntity
  ) {
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
