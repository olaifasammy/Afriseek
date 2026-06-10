import { SemanticRule } from "./SemanticRule";

export class SemanticScorer {

  score(
    rule: SemanticRule
  ): number {

    return rule.score;
  }
}
