import { AfriseekEntity } from "../types/entity";
import { EntityRepository } from "../repositories/EntityRepository";

export class EntityService {

  constructor(
    private repository: EntityRepository
  ) {}

  async getById(
    id: string
  ): Promise<AfriseekEntity | null> {

    return this.repository.findById(id);
  }

  async getBySlug(
    slug: string
  ): Promise<AfriseekEntity | null> {

    return this.repository.findBySlug(slug);
  }

  async getAll(): Promise<AfriseekEntity[]> {

    return this.repository.findAll();
  }

  async create(
    entity: AfriseekEntity
  ): Promise<void> {

    await this.repository.create(entity);
  }

  async update(
    entity: AfriseekEntity
  ): Promise<void> {

    await this.repository.update(entity);
  }

  async delete(
    id: string
  ): Promise<void> {

    await this.repository.delete(id);
  }
}
