import { RelationshipType } from "./enums/RelationshipType";

export enum RelationshipStrength {

  CORE = "core",

  STRONG = "strong",

  MODERATE = "moderate",

  WEAK = "weak"
}

export interface Relationship {

  type: RelationshipType;

  targetId: string;

  strength?: RelationshipStrength;

  weight?: number;

  description?: string;
}
