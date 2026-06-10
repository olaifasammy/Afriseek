"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemanticMatcher = void 0;
class SemanticMatcher {
    match(sourceType, relationshipType, targetType, rules) {
        return rules.find(rule => rule.sourceType === sourceType &&
            rule.relationshipType === relationshipType &&
            rule.targetType === targetType);
    }
}
exports.SemanticMatcher = SemanticMatcher;
