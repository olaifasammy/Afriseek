import { AfriseekEntity } from "../../types/entity";

export class RelevanceEngine {

  score(
    entity: AfriseekEntity
  ): number {

    let score = 0;

    score +=
      entity.relationships.length * 2;

    score +=
      entity.facts.length;

    if (
      entity.metadata.featured
    ) {
      score += 25;
    }

    return score;
  }
}
