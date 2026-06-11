import { KnowledgeGraph }
from "../KnowledgeGraph";

import { AfriseekEntity }
from "../../../types/entity";

import { EntityRepository }
from "../../../repositories/EntityRepository";

export class RepositoryKnowledgeGraph
implements KnowledgeGraph {

  constructor(
    private repository: EntityRepository
  ) {}

  async getEntity(
    id: string
  ): Promise<AfriseekEntity | null> {

    return this.repository.findById(
      id
    );
  }

  async search(
    query: string
  ): Promise<AfriseekEntity[]> {

    const entities =
      await this.repository.findAll();

    const normalized =
      query.toLowerCase();

    return entities.filter(
      entity =>
        entity.name
          .toLowerCase()
          .includes(normalized)
    );
  }

  async getNeighbors(
    entityId: string
  ): Promise<AfriseekEntity[]> {

    const entity =
      await this.repository.findById(
        entityId
      );

    if (!entity) {
      return [];
    }

    const all =
      await this.repository.findAll();

    const map =
      new Map(
        all.map(
          e => [e.id, e]
        )
      );

    return entity.relationships
      .map(
        r => map.get(
          r.targetId
        )
      )
      .filter(
        (
          e
        ): e is AfriseekEntity =>
          e !== undefined
      );
  }

  async getIncomingNeighbors(
    entityId: string
  ): Promise<AfriseekEntity[]> {

    const all =
      await this.repository.findAll();

    return all.filter(
      entity =>
        entity.relationships.some(
          relationship =>
            relationship.targetId ===
            entityId
        )
    );
  }

  async getRelated(
    entityId: string,
    depth: number = 2
  ): Promise<AfriseekEntity[]> {

    const all =
      await this.repository.findAll();

    const map =
      new Map(
        all.map(
          e => [e.id, e]
        )
      );

    const visited =
      new Set<string>();

    const results:
      AfriseekEntity[] = [];

    const traverse = (
      id: string,
      currentDepth: number
    ) => {

      if (
        currentDepth > depth
      ) {
        return;
      }

      if (
        visited.has(id)
      ) {
        return;
      }

      visited.add(id);

      const entity =
        map.get(id);

      if (!entity) {
        return;
      }

      results.push(entity);

      for (
        const relation
        of entity.relationships
      ) {

        traverse(
          relation.targetId,
          currentDepth + 1
        );
      }
    };

    traverse(
      entityId,
      0
    );

    return results;
  }
}
