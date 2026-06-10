import { EntityType } from "./enums/EntityType";

import { Trait } from "./trait";

import { Fact } from "./fact";

import { Source } from "./source";

import { Relationship } from "./relationship";

export interface Alias {

  name: string;

  language?: string;

  type?: string;
}

export interface EntityMetadata {

  createdAt: string;

  updatedAt: string;

  verified: boolean;

  featured?: boolean;

  popularityScore?: number;
}

export interface AfriseekEntity {

  id: string;

  slug: string;

  name: string;

  entityType: EntityType;

  summary: string;

  aliases?: Alias[];

  endonyms?: string[];

  exonyms?: string[];

  traits: Trait[];

  facts: Fact[];

  relationships: Relationship[];

  sources: Source[];

  metadata: EntityMetadata;
}
