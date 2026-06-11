import { AfriseekEntity } from "../../types/entity";
import { EntityImportance } from "../../types/importance";
import {
  Relationship,
  RelationshipStrength
} from "../../types/relationship";

interface DiscoveryResult {
  entity: AfriseekEntity;
  score: number;
  explanation: {
    breakdown: string[];
  };
}

export class DiscoveryEngine {

  private scoreImportance(
    importance?: EntityImportance
  ): number {

    switch (importance) {

      case EntityImportance.GLOBAL:
        return 300;

      case EntityImportance.CONTINENTAL:
        return 200;

      case EntityImportance.NATIONAL:
        return 120;

      case EntityImportance.REGIONAL:
        return 80;

      case EntityImportance.LOCAL:
        return 40;

      default:
        return 10;
    }
  }

  private scoreRelationship(
    relationship: Relationship
  ): number {

    const base =
      relationship.strength === RelationshipStrength.CORE ? 80 :
      relationship.strength === RelationshipStrength.STRONG ? 60 :
      relationship.strength === RelationshipStrength.MODERATE ? 40 :
      relationship.strength === RelationshipStrength.WEAK ? 20 :
      10;

    return base * (relationship.weight ?? 1);
  }

  private scoreRelevance(
    entity: AfriseekEntity
  ): number {

    let score = 0;

    score += entity.relationships.length * 2;
    score += entity.facts.length;

    if (entity.metadata.featured) {
      score += 25;
    }

    return score;
  }

  private explain(
    entity: AfriseekEntity,
    score: number
  ) {

    const breakdown: string[] = [];

    if (entity.importance) {
      breakdown.push(
        `Importance: ${entity.importance}`
      );
    }

    for (const r of entity.relationships) {

      if (r.strength === RelationshipStrength.CORE) {
        breakdown.push(
          `CORE relationship → ${r.targetId}`
        );
      }

      if (r.strength === RelationshipStrength.STRONG) {
        breakdown.push(
          `STRONG relationship → ${r.targetId}`
        );
      }
    }

    breakdown.push(
      `Relationships: ${entity.relationships.length}`
    );

    if (entity.facts?.length) {
      breakdown.push(
        `Facts: ${entity.facts.length}`
      );
    }

    return {
      entityId: entity.id,
      score,
      breakdown
    };
  }

  discover(
    root: AfriseekEntity,
    candidates: AfriseekEntity[]
  ): DiscoveryResult[] {

    return candidates
      .map(entity => {

        let score = 0;

        score += this.scoreRelevance(entity);
        score += this.scoreImportance(
          entity.importance
        );

        for (const r of entity.relationships) {
          score += this.scoreRelationship(r);
        }

        return {
          entity,
          score,
          explanation:
            this.explain(entity, score)
        };
      })
      .sort(
        (a, b) => b.score - a.score
      );
  }
}
