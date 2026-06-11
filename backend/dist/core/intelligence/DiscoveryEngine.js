"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryEngine = void 0;
const importance_1 = require("../../types/importance");
const relationship_1 = require("../../types/relationship");
class DiscoveryEngine {
    scoreImportance(importance) {
        switch (importance) {
            case importance_1.EntityImportance.GLOBAL:
                return 300;
            case importance_1.EntityImportance.CONTINENTAL:
                return 200;
            case importance_1.EntityImportance.NATIONAL:
                return 120;
            case importance_1.EntityImportance.REGIONAL:
                return 80;
            case importance_1.EntityImportance.LOCAL:
                return 40;
            default:
                return 10;
        }
    }
    scoreRelationship(relationship) {
        const base = relationship.strength === relationship_1.RelationshipStrength.CORE ? 80 :
            relationship.strength === relationship_1.RelationshipStrength.STRONG ? 60 :
                relationship.strength === relationship_1.RelationshipStrength.MODERATE ? 40 :
                    relationship.strength === relationship_1.RelationshipStrength.WEAK ? 20 :
                        10;
        return base * (relationship.weight ?? 1);
    }
    scoreRelevance(entity) {
        let score = 0;
        score += entity.relationships.length * 2;
        score += entity.facts.length;
        if (entity.metadata.featured) {
            score += 25;
        }
        return score;
    }
    explain(entity, score) {
        const breakdown = [];
        if (entity.importance) {
            breakdown.push(`Importance: ${entity.importance}`);
        }
        for (const r of entity.relationships) {
            if (r.strength === relationship_1.RelationshipStrength.CORE) {
                breakdown.push(`CORE relationship → ${r.targetId}`);
            }
            if (r.strength === relationship_1.RelationshipStrength.STRONG) {
                breakdown.push(`STRONG relationship → ${r.targetId}`);
            }
        }
        breakdown.push(`Relationships: ${entity.relationships.length}`);
        if (entity.facts?.length) {
            breakdown.push(`Facts: ${entity.facts.length}`);
        }
        return {
            entityId: entity.id,
            score,
            breakdown
        };
    }
    discover(root, candidates) {
        return candidates
            .map(entity => {
            let score = 0;
            score += this.scoreRelevance(entity);
            score += this.scoreImportance(entity.importance);
            for (const r of entity.relationships) {
                score += this.scoreRelationship(r);
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
exports.DiscoveryEngine = DiscoveryEngine;
