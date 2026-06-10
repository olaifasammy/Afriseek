import { AfriseekEntity } from "../types/entity";
import { EntityType } from "../types/enums/EntityType";
import {
  RelationshipStrength
} from "../types/relationship";
import { RelationshipType }
from "../types/enums/RelationshipType";

export const entities:
  AfriseekEntity[] = [

  {
    id: "africa",

    slug: "africa",

    name: "Africa",

    entityType: EntityType.CONTINENT,

    summary:
      "Second largest continent.",

    traits: [],

    facts: [],

    relationships: [],

    sources: [],

    metadata: {
      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      verified: true
    }
  },

  {
    id: "nigeria",

    slug: "nigeria",

    name: "Nigeria",

    entityType: EntityType.COUNTRY,

    summary:
      "Country in West Africa.",

    traits: [],

    facts: [],

    relationships: [
      {
        type:
          RelationshipType.LOCATED_IN,

        targetId: "africa",

        strength:
          RelationshipStrength.CORE
      }
    ],

    sources: [],

    metadata: {
      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      verified: true
    }
  },

  {
    id: "yoruba",

    slug: "yoruba",

    name: "Yoruba",

    entityType: EntityType.ETHNIC_GROUP,

    summary:
      "Major ethnic group in West Africa.",

    traits: [],

    facts: [],

    relationships: [
      {
        type:
          RelationshipType.LOCATED_IN,

        targetId: "nigeria",

        strength:
          RelationshipStrength.CORE
      }
    ],

    sources: [],

    metadata: {
      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      verified: true
    }
  }
];
