import { KnowledgeGraph }
from "../KnowledgeGraph";

import { AfriseekEntity }
from "../../../types/entity";

export class InMemoryKnowledgeGraph
  implements KnowledgeGraph {

  private reverseIndex =
    new Map<
      string,
      string[]
    >();

  constructor(
    private entities:
      Map<string, AfriseekEntity>
  ) {

    this.buildReverseIndex();
  }

  private buildReverseIndex() {

    for (
      const entity
      of this.entities.values()
    ) {

      for (
        const relationship
        of entity.relationships
      ) {

        const existing =
          this.reverseIndex.get(
            relationship.targetId
          ) ?? [];

        existing.push(
          entity.id
        );

        this.reverseIndex.set(
          relationship.targetId,
          existing
        );
      }
    }
  }

  async getEntity(
    id: string
  ): Promise<AfriseekEntity | null> {

    return (
      this.entities.get(id)
      ?? null
    );
  }

  async search(
    query: string
  ): Promise<AfriseekEntity[]> {

    const normalized =
      query.toLowerCase();

    return Array.from(
      this.entities.values()
    ).filter(
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
      this.entities.get(entityId);

    if (!entity) {
      return [];
    }

    return entity.relationships
      .map(
        relation =>
          this.entities.get(
            relation.targetId
          )
      )
      .filter(
        (
          entity
        ): entity is AfriseekEntity =>
          entity !== undefined
      );
  }

  async getIncomingNeighbors(
    entityId: string
  ): Promise<AfriseekEntity[]> {

    const incomingIds =
      this.reverseIndex.get(
        entityId
      ) ?? [];

    return incomingIds
      .map(
        id =>
          this.entities.get(id)
      )
      .filter(
        (
          entity
        ): entity is AfriseekEntity =>
          entity !== undefined
      );
  }

  async getRelated(
    entityId: string,
    depth: number = 2
  ): Promise<AfriseekEntity[]> {

    const visited =
      new Set<string>();

    const results:
      AfriseekEntity[] = [];

    const traverse = (
      currentId: string,
      currentDepth: number
    ) => {

      if (
        currentDepth > depth
      ) {
        return;
      }

      if (
        visited.has(currentId)
      ) {
        return;
      }

      visited.add(
        currentId
      );

      const entity =
        this.entities.get(
          currentId
        );

      if (!entity) {
        return;
      }

      results.push(
        entity
      );

      for (
        const relationship
        of entity.relationships
      ) {

        traverse(
          relationship.targetId,
          currentDepth + 1
        );
      }

      const incoming =
        this.reverseIndex.get(
          currentId
        ) ?? [];

      for (
        const sourceId
        of incoming
      ) {

        traverse(
          sourceId,
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
