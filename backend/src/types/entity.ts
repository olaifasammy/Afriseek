import { EntityType } from "./enums/EntityType";
import { EntityImportance } from "./importance";

import { Trait } from "./trait";

import { Fact } from "./fact";

import { Source } from "./source";

import { Relationship } from "./relationship";
import { EntityMetadataField } from "./entityMetadata";

export interface Alias {

  name: string;

  language?: string;

  type?: string;
}

export interface EntityMetadata {

  createdAt: string;

  updatedAt: string;

  deletedAt?: string;

  verified: boolean;
  
  featured?: boolean;

  popularityScore?: number;

  articleIds?: string[];

  timelineIds?: string[];
}

export interface EntityMedia {

  coverImage?: string;

  thumbnailImage?: string;

  gallery?: string[];
}

export interface AfriseekEntity {

  id: string;

  version: number;

  slug: string;

  name: string;

  entityType: EntityType;

  importance?: EntityImportance;

  summary: string;

  aliases?: Alias[];

  endonyms?: string[];

  exonyms?: string[];

  traits: Trait[];

  facts: Fact[];

  relationships: Relationship[];

  sources: Source[];

  metadataFields?: EntityMetadataField[];

  media?: EntityMedia;

  metadata: EntityMetadata;
}