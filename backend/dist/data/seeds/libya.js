"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libyaEntities = void 0;
const EntityType_1 = require("../../types/enums/EntityType");
const importance_1 = require("../../types/importance");
const RelationshipType_1 = require("../../types/enums/RelationshipType");
const relationship_1 = require("../../types/relationship");
const now = new Date().toISOString();
exports.libyaEntities = [
    {
        id: "libya",
        slug: "libya",
        name: "Libya",
        entityType: EntityType_1.EntityType.COUNTRY,
        importance: importance_1.EntityImportance.NATIONAL,
        summary: "Country in North Africa.",
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
        id: "misrata",
        slug: "misrata",
        name: "Misrata",
        entityType: EntityType_1.EntityType.CITY,
        importance: importance_1.EntityImportance.REGIONAL,
        summary: "Major city and port in Libya.",
        traits: [],
        facts: [],
        relationships: [
            {
                type: RelationshipType_1.RelationshipType.LOCATED_IN,
                targetId: "libya",
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
        id: "tripoli",
        slug: "tripoli",
        name: "Tripoli",
        entityType: EntityType_1.EntityType.CITY,
        importance: importance_1.EntityImportance.REGIONAL,
        summary: "Capital city of Libya.",
        traits: [],
        facts: [],
        relationships: [
            {
                type: RelationshipType_1.RelationshipType.LOCATED_IN,
                targetId: "libya",
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
        id: "amazigh",
        slug: "amazigh",
        name: "Amazigh",
        entityType: EntityType_1.EntityType.ETHNIC_GROUP,
        importance: importance_1.EntityImportance.REGIONAL,
        summary: "Indigenous peoples of North Africa.",
        traits: [],
        facts: [],
        relationships: [
            {
                type: RelationshipType_1.RelationshipType.LOCATED_IN,
                targetId: "libya",
                strength: relationship_1.RelationshipStrength.STRONG
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
