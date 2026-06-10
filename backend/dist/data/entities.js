"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
const EntityType_1 = require("../types/enums/EntityType");
const relationship_1 = require("../types/relationship");
const RelationshipType_1 = require("../types/enums/RelationshipType");
exports.entities = [
    {
        id: "africa",
        slug: "africa",
        name: "Africa",
        entityType: EntityType_1.EntityType.CONTINENT,
        summary: "Second largest continent.",
        traits: [],
        facts: [],
        relationships: [],
        sources: [],
        metadata: {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            verified: true
        }
    },
    {
        id: "nigeria",
        slug: "nigeria",
        name: "Nigeria",
        entityType: EntityType_1.EntityType.COUNTRY,
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
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            verified: true
        }
    },
    {
        id: "yoruba",
        slug: "yoruba",
        name: "Yoruba",
        entityType: EntityType_1.EntityType.ETHNIC_GROUP,
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
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            verified: true
        }
    }
];
