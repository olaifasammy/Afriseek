import { EntityRepository } from "./EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { entities } from "../data/entities";

export class SeedEntityRepository
  implements EntityRepository {

  async findById(
    id: string
  ): Promise<AfriseekEntity | null> {

    return (
      entities.find(
        e => e.id === id
      ) ?? null
    );
  }

  async findBySlug(
    slug: string
  ): Promise<AfriseekEntity | null> {

    return (
      entities.find(
        e => e.slug === slug
      ) ?? null
    );
  }

  async findAll(): Promise<AfriseekEntity[]> {
    return entities;
  }

  async create(): Promise<void> {}

  async update(): Promise<void> {}

  async delete(): Promise<void> {}
}
