import { KnowledgeGraph } from "../KnowledgeGraph";
import { AfriseekEntity } from "../../../types/entity";
import { EntityRepository } from "../../repositories/EntityRepository";
import { GraphIndex } from "../GraphIndex";
import { GeoContextEngine } from "../../intelligence/GeoContextEngine";
import { CulturalGraphBiasEngine } from "../../intelligence/CulturalGraphBiasEngine";

export class RepositoryKnowledgeGraph implements KnowledgeGraph {
  private index?: GraphIndex;

  constructor(
    private readonly repository: EntityRepository,
    private readonly geo: GeoContextEngine,
    private readonly cultural: CulturalGraphBiasEngine
  ) {}

  /**
   * Lazily loads the graph into memory.
   */
  private async getIndex(): Promise<GraphIndex> {
    if (!this.index) {
      const entities = await this.repository.findAll();
      this.index = new GraphIndex(entities);
    }

    return this.index;
  }

  async getEntity(
    id: string
  ): Promise<AfriseekEntity | null> {

    const index = await this.getIndex();

    return index.getEntity(id);
  }

  /**
   * Search entities.
   * Uses repository-level search if implemented,
   * otherwise falls back to in-memory filtering.
   */
  async search(
    query: string
  ): Promise<AfriseekEntity[]> {

    const normalized =
      query.toLowerCase();

    const repository =
      this.repository as EntityRepository & {
        searchByName?: (
          query: string
        ) => Promise<AfriseekEntity[]>;
      };

    if (repository.searchByName) {
      return repository.searchByName(
        normalized
      );
    }

    const entities =
      await this.repository.findAll();

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
      await this.getEntity(entityId);

    if (!entity) {
      return [];
    }

    const index =
      await this.getIndex();

    const neighbors =
      entity.relationships
        .map(
          relationship =>
            index.getEntity(
              relationship.targetId
            )
        )
        .filter(
          (
            entity
          ): entity is AfriseekEntity =>
            entity !== null
        );

    return this.cultural.sortNeighbors(
      entity,
      neighbors
    );
  }

  async getIncomingNeighbors(
    entityId: string
  ): Promise<AfriseekEntity[]> {

    const index =
      await this.getIndex();

    return index.getIncoming(
      entityId
    );
  }

  /**
   * Traverses the graph while applying
   * cultural gating and locality ranking.
   */
  async getRelated(
    entityId: string,
    depth: number = 2,
    relationshipTypes?: string[]
  ): Promise<AfriseekEntity[]> {

    const index =
      await this.getIndex();

    const root =
      index.getEntity(entityId);

    if (!root) {
      return [];
    }

    const visited =
      new Set<string>();

    const results:
      AfriseekEntity[] = [];

    const traverse = (
      id: string,
      currentDepth: number
    ) => {

      if (currentDepth > depth) {
        return;
      }

      if (visited.has(id)) {
        return;
      }

      const entity =
        index.getEntity(id);

      if (!entity) {
        return;
      }

      visited.add(id);
      results.push(entity);

      // Outgoing relationships
      for (
        const relationship
        of entity.relationships
      ) {

        if (
          relationshipTypes?.length &&
          !relationshipTypes.includes(
            relationship.type
          )
        ) {
          continue;
        }

        const target =
          index.getEntity(
            relationship.targetId
          );

        if (!target) {
          continue;
        }

        if (
          !this.cultural.allowTraversal(
            entity,
            target
          )
        ) {
          continue;
        }

        traverse(
          relationship.targetId,
          currentDepth + 1
        );
      }

      // Incoming relationships
      const incoming =
        index.getIncoming(id);

      for (
        const incomingEntity
        of incoming
      ) {

        if (
          !this.cultural.allowTraversal(
            entity,
            incomingEntity
          )
        ) {
          continue;
        }

        traverse(
          incomingEntity.id,
          currentDepth + 1
        );
      }
    };

    traverse(entityId, 0);

    return results
      .filter(
        entity =>
          entity.id !== entityId
      )
      .sort((a, b) => {

        const scoreA =
          this.geo.scoreLocalBias(
            root,
            a
          ) +
          this.cultural.score(a);

        const scoreB =
          this.geo.scoreLocalBias(
            root,
            b
          ) +
          this.cultural.score(b);

        return scoreB - scoreA;
      });
  }
}