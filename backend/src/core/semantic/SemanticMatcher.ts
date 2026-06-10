import { SemanticRule } from "./SemanticRule";

export class SemanticMatcher {

  match(
    sourceType: string,
    relationshipType: string,
    targetType: string,
    rules: SemanticRule[]
  ): SemanticRule | undefined {

    return rules.find(rule =>

      rule.sourceType === sourceType &&

      rule.relationshipType === relationshipType &&

      rule.targetType === targetType
    );
  }
}
