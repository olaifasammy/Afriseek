"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.africaEntities = void 0;
const EntityType_1 = require("../../types/enums/EntityType");
const importance_1 = require("../../types/importance");
const relationship_1 = require("../../types/relationship");
const RelationshipType_1 = require("../../types/enums/RelationshipType");
const now = new Date().toISOString();
exports.africaEntities = [
    {
        id: "africa",
        slug: "africa",
        name: "Africa",
        entityType: EntityType_1.EntityType.CONTINENT,
        importance: importance_1.EntityImportance.GLOBAL,
        summary: "Second largest continent.",
        traits: [],
        facts: [],
        relationships: [],
        sources: [],
        metadata: {
            createdAt: now,
            updatedAt: now,
            verified: true
        }
    },
    {
        id: "nigeria",
        slug: "nigeria",
        name: "Nigeria",
        entityType: EntityType_1.EntityType.COUNTRY,
        importance: importance_1.EntityImportance.NATIONAL,
        summary: "Country in West Africa.",
        traits: [],
        facts: [],
        relationships: [
            {
                type: RelationshipType_1.RelationshipType.LOCATED_IN,
                targetId: "africa",
                strength: relationship_1.RelationshipStrength.CORE
            }
        ],
        sources: [],
        metadata: {
            createdAt: now,
            updatedAt: now,
            verified: true
        }
    },
    {
        id: "yoruba",
        slug: "yoruba",
        name: "Yoruba",
        entityType: EntityType_1.EntityType.ETHNIC_GROUP,
        importance: importance_1.EntityImportance.REGIONAL,
        summary: "Major ethnic group in West Africa.",
        traits: [],
        facts: [],
        relationships: [
            {
                type: RelationshipType_1.RelationshipType.LOCATED_IN,
                targetId: "nigeria",
                strength: relationship_1.RelationshipStrength.CORE
            }
        ],
        sources: [],
        metadata: {
            createdAt: now,
            updatedAt: now,
            verified: true
        }
    }
];
