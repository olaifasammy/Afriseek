"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipScorer = void 0;
const relationship_1 = require("../../types/relationship");
class RelationshipScorer {
    score(relationship) {
        switch (relationship.strength) {
            case relationship_1.RelationshipStrength.CORE:
                return 100;
            case relationship_1.RelationshipStrength.STRONG:
                return 75;
            case relationship_1.RelationshipStrength.MODERATE:
                return 50;
            case relationship_1.RelationshipStrength.WEAK:
                return 25;
            default:
                return 10;
        }
    }
}
exports.RelationshipScorer = RelationshipScorer;
