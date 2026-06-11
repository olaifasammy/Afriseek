"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipScorer = void 0;
const relationship_1 = require("../../types/relationship");
class RelationshipScorer {
    score(relationship) {
        const base = (() => {
            switch (relationship.strength) {
                case relationship_1.RelationshipStrength.CORE:
                    return 80;
                case relationship_1.RelationshipStrength.STRONG:
                    return 60;
                case relationship_1.RelationshipStrength.MODERATE:
                    return 40;
                case relationship_1.RelationshipStrength.WEAK:
                    return 20;
                default:
                    return 10;
            }
        })();
        const weight = relationship.weight ?? 1;
        return base * weight;
    }
}
exports.RelationshipScorer = RelationshipScorer;
