import { EntityRepository } from "../../../core/repositories/EntityRepository";
import { AfriseekEntity } from "../../../types/entity";
import { entities } from "../../../data/entities";
import { GraphNormalizer } from "../../../core/graph/GraphNormalizer";

export class SeedEntityRepository
implements EntityRepository {

  private normalized =
    new GraphNormalizer()
      .normalize(
        structuredClone(
          entities
        )
      );

  async findById(
    id: string
  ): Promise<AfriseekEntity | null> {

    return (
      this.normalized.find(
        entity => entity.id === id
      ) ?? null
    );
  }

  async findBySlug(
    slug: string
  ): Promise<AfriseekEntity | null> {

    return (
      this.normalized.find(
        entity => entity.slug === slug
      ) ?? null
    );
  }

  async findAll(): Promise<AfriseekEntity[]> {
    return this.normalized;
  }

  async create(
    entity: AfriseekEntity
  ): Promise<void> {}

  async update(
    entity: AfriseekEntity
  ): Promise<void> {}

  async delete(
    id: string
  ): Promise<void> {}
}
