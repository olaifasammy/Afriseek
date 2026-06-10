"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemanticRules = void 0;
exports.SemanticRules = [
    {
        name: "ethnic-language",
        sourceType: "ethnic_group",
        relationshipType: "speaks",
        targetType: "language",
        score: 100
    },
    {
        name: "city-ruler",
        sourceType: "city",
        relationshipType: "ruled_by",
        targetType: "person",
        score: 95
    },
    {
        name: "kingdom-dynasty",
        sourceType: "kingdom",
        relationshipType: "ruled_by",
        targetType: "dynasty",
        score: 100
    }
];
