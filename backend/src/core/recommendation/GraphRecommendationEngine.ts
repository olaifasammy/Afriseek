import { AfriseekEntity } from "../../types/entity";
import { KnowledgeGraph } from "../graph/KnowledgeGraph";

export interface RecommendationResult {
  entity: AfriseekEntity;
  score: number;
  reasons: string[];
}

export class GraphRecommendationEngine {

  constructor(
    private graph: KnowledgeGraph
  ) {}

  async recommend(
    entityId: string,
    limit: number = 10
  ): Promise<RecommendationResult[]> {

    const root =
      await this.graph.getEntity(
        entityId
      );

    if (!root) {
      return [];
    }

    const related =
      await this.graph.getRelated(
        entityId,
        3
      );

    return related

      .filter(
        entity =>
          entity.id !== root.id
      )

      .map(entity => {

        let score = 0;

        const reasons: string[] = [];

        const rootTargets =
          root.relationships.map(
            r => r.targetId
          );

        const entityTargets =
          entity.relationships.map(
            r => r.targetId
          );

        const sharedTargets =
          entityTargets.filter(
            id =>
              rootTargets.includes(id)
          );

        if (
          entity.entityType ===
          root.entityType
        ) {

          score += 30;

          reasons.push(
            "Same entity type"
          );
        }

        if (
          sharedTargets.length
        ) {

          score +=
            sharedTargets.length * 100;

          reasons.push(
            `${sharedTargets.length} shared parent`
          );
        }

        const directlyConnected =

          root.relationships.some(
            r =>
              r.targetId === entity.id
          )

          ||

          entity.relationships.some(
            r =>
              r.targetId === root.id
          );

        if (
          directlyConnected
        ) {

          score += 500;

          reasons.push(
            "Direct connection"
          );
        }

        score +=
          entity.relationships.length;

        return {
          entity,
          score,
          reasons
        };
      })

      .sort(
        (a, b) =>
          b.score - a.score
      )

      .slice(
        0,
        limit
      );
  }
}
