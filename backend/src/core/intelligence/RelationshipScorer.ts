import {
  Relationship,
  RelationshipStrength
} from "../../types/relationship";

export class RelationshipScorer {

  score(
    relationship: Relationship
  ): number {

    switch (
      relationship.strength
    ) {

      case RelationshipStrength.CORE:
        return 100;

      case RelationshipStrength.STRONG:
        return 75;

      case RelationshipStrength.MODERATE:
        return 50;

      case RelationshipStrength.WEAK:
        return 25;

      default:
        return 10;
    }
  }
}
