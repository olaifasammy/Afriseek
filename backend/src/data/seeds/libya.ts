import { AfriseekEntity } from "../../types/entity";
import { EntityType } from "../../types/enums/EntityType";
import { EntityImportance } from "../../types/importance";
import { RelationshipType } from "../../types/enums/RelationshipType";
import { RelationshipStrength } from "../../types/relationship";

const now = new Date().toISOString();

export const libyaEntities: AfriseekEntity[] = [

  {
    id: "libya",
    slug: "libya",
    name: "Libya",
    entityType: EntityType.COUNTRY,
    importance: EntityImportance.NATIONAL,
    summary: "Country in North Africa.",
    traits: [],
    facts: [],
    relationships: [
      {
        type: RelationshipType.LOCATED_IN,
        targetId: "africa",
        strength: RelationshipStrength.CORE
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
    entityType: EntityType.CITY,
    importance: EntityImportance.REGIONAL,
    summary: "Major city and port in Libya.",
    traits: [],
    facts: [],
    relationships: [
      {
        type: RelationshipType.LOCATED_IN,
        targetId: "libya",
        strength: RelationshipStrength.CORE
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
    entityType: EntityType.CITY,
    importance: EntityImportance.REGIONAL,
    summary: "Capital city of Libya.",
    traits: [],
    facts: [],
    relationships: [
      {
        type: RelationshipType.LOCATED_IN,
        targetId: "libya",
        strength: RelationshipStrength.CORE
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
    entityType: EntityType.ETHNIC_GROUP,
    importance: EntityImportance.REGIONAL,
    summary: "Indigenous peoples of North Africa.",
    traits: [],
    facts: [],
    relationships: [
      {
        type: RelationshipType.LOCATED_IN,
        targetId: "libya",
        strength: RelationshipStrength.STRONG
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
