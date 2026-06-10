import { AfriseekEntity } from "../../types/entity";
import { Relationship } from "../../types/entity";

export interface TraversalResult {
  entityId: string;
  depth: number;
  path: string[];
}

export class GraphTraversal {

  constructor(
    private entities: Map<string, AfriseekEntity>
  ) {}

  getDirectConnections(
    entityId: string
  ): string[] {

    const entity =
      this.entities.get(entityId);

    if (!entity) {
      return [];
    }

    return entity.relationships.map(
      relation => relation.targetId
    );
  }

  traverse(
    startId: string,
    maxDepth: number = 2
  ): TraversalResult[] {

    const results: TraversalResult[] = [];

    const visited = new Set<string>();

    const queue = [
      {
        entityId: startId,
        depth: 0,
        path: [startId]
      }
    ];

    while (queue.length > 0) {

      const current = queue.shift();

      if (!current) {
        continue;
      }

      if (
        current.depth > maxDepth
      ) {
        continue;
      }

      if (
        visited.has(current.entityId)
      ) {
        continue;
      }

      visited.add(current.entityId);

      results.push(current);

      const entity =
        this.entities.get(
          current.entityId
        );

      if (!entity) {
        continue;
      }

      for (
        const relation
        of entity.relationships
      ) {

        queue.push({
          entityId: relation.targetId,
          depth: current.depth + 1,
          path: [
            ...current.path,
            relation.targetId
          ]
        });
      }
    }

    return results;
  }
}
