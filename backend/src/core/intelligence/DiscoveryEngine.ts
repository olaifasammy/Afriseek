import { AfriseekEntity } from "../../types/entity";
import { EntityImportance } from "../../types/importance";
import {
  Relationship,
  RelationshipStrength
} from "../../types/relationship";
import { RelationshipType } from "../../types/enums/RelationshipType";

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

  // =========================
  // UPDATED RELATIONSHIP SCORING (IMPORTANT FIX)
  // =========================
  private scoreRelationship(
    relationship: Relationship
  ): number {

    const base =
      relationship.strength === RelationshipStrength.CORE ? 120 :
      relationship.strength === RelationshipStrength.STRONG ? 80 :
      relationship.strength === RelationshipStrength.MODERATE ? 40 :
      relationship.strength === RelationshipStrength.WEAK ? 20 :
      10;

    // NEW: Geographic + cultural boost
    const contextualBoost =
      relationship.type === RelationshipType.LOCATED_IN ? 70 :
      relationship.type === RelationshipType.PART_OF ? 60 :
      relationship.type === RelationshipType.BELONGS_TO_ETHNIC_GROUP ? 50 :
      relationship.type === RelationshipType.ASSOCIATED_WITH ? 20 :
      0;

    return (base + contextualBoost) * (relationship.weight ?? 1);
  }

  private scoreRelevance(
    entity: AfriseekEntity
  ): number {

    let score = 0;

    score += entity.relationships.length * 3;
    score += entity.facts.length * 2;

    if (entity.metadata.featured) {
      score += 25;
    }

    return score;
  }

  // =========================
  // STRONGER LOCALITY BIAS (CORE FIX)
  // =========================
  private scoreLocality(
    root: AfriseekEntity,
    entity: AfriseekEntity
  ): number {

    let score = 0;

    const rootTargets =
      new Set(root.relationships.map(r => r.targetId));

    for (const relationship of entity.relationships) {

      // direct connection boost (same cluster)
      if (rootTargets.has(relationship.targetId)) {
        score += 200;
      }

      // geographic chain reinforcement
      if (
        relationship.type === RelationshipType.LOCATED_IN ||
        relationship.type === RelationshipType.PART_OF
      ) {
        score += 100;
      }
    }

    return score;
  }

  // =========================
  // CULTURAL BOOST (NEW BUT SAFE)
  // =========================
  private scoreCultural(entity: AfriseekEntity): number {

    let score = 0;

    for (const r of entity.relationships) {
      if (
        r.type === RelationshipType.BELONGS_TO_ETHNIC_GROUP ||
        r.type === RelationshipType.PRACTICES ||
        r.type === RelationshipType.WORSHIPS
      ) {
        score += 40;
      }
    }

    return score;
  }

  private explain(entity: AfriseekEntity, score: number) {

    return {
      entityId: entity.id,
      score,
      breakdown: [
        `Importance: ${entity.importance ?? "unknown"}`,
        `Relationships: ${entity.relationships.length}`,
        `Facts: ${entity.facts.length}`
      ]
    };
  }

  discover(
    root: AfriseekEntity,
    candidates: AfriseekEntity[]
  ): DiscoveryResult[] {

    return candidates
      .filter(e => e.id !== root.id)
      .map(entity => {

        let score = 0;

        score += this.scoreImportance(entity.importance);
        score += this.scoreRelevance(entity);
        score += this.scoreLocality(root, entity);
        score += this.scoreCultural(entity);

        for (const rel of entity.relationships) {
          score += this.scoreRelationship(rel);
        }

        return {
          entity,
          score,
          explanation: this.explain(entity, score)
        };
      })
      .sort((a, b) => b.score - a.score);
  }
}