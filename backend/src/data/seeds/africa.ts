import { AfriseekEntity } from "../../types/entity";
import { EntityType } from "../../types/enums/EntityType";
import { EntityImportance } from "../../types/importance";
import { RelationshipStrength } from "../../types/relationship";
import { RelationshipType } from "../../types/enums/RelationshipType";

const now = new Date().toISOString();

export const africaEntities: AfriseekEntity[] = [
  {
    id: "africa",
    slug: "africa",
    name: "Africa",
    entityType: EntityType.CONTINENT,
    importance: EntityImportance.GLOBAL,
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
    entityType: EntityType.COUNTRY,
    importance: EntityImportance.NATIONAL,
    summary: "Country in West Africa.",
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
    id: "yoruba",
    slug: "yoruba",
    name: "Yoruba",
    entityType: EntityType.ETHNIC_GROUP,
    importance: EntityImportance.REGIONAL,
    summary: "Major ethnic group in West Africa.",
    traits: [],
    facts: [],
    relationships: [
      {
        type: RelationshipType.LOCATED_IN,
        targetId: "nigeria",
        strength: RelationshipStrength.CORE
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
