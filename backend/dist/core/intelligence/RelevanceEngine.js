"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelevanceEngine = void 0;
class RelevanceEngine {
    score(entity) {
        let score = 0;
        score +=
            entity.relationships.length * 2;
        score +=
            entity.facts.length;
        if (entity.metadata.featured) {
            score += 25;
        }
        return score;
    }
}
exports.RelevanceEngine = RelevanceEngine;
