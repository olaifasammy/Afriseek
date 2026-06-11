"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationEngine = void 0;
const relationship_1 = require("../../types/relationship");
class ExplanationEngine {
    explain(entity, score) {
        const breakdown = [];
        // Importance reasoning
        if (entity.importance) {
            breakdown.push(`Importance: ${entity.importance}`);
        }
        // Relationship reasoning
        for (const r of entity.relationships) {
            if (r.strength === relationship_1.RelationshipStrength.CORE) {
                breakdown.push(`CORE relationship → ${r.targetId}`);
            }
            if (r.strength === relationship_1.RelationshipStrength.STRONG) {
                breakdown.push(`STRONG relationship → ${r.targetId}`);
            }
        }
        // Structural reasoning
        breakdown.push(`Relationships: ${entity.relationships.length}`);
        // Relevance hint
        if (entity.facts?.length) {
            breakdown.push(`Facts: ${entity.facts.length}`);
        }
        return {
            entityId: entity.id,
            score,
            breakdown
        };
    }
}
exports.ExplanationEngine = ExplanationEngine;
