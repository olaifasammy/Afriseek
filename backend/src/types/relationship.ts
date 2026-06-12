import { RelationshipType }
from "./enums/RelationshipType";

export enum RelationshipStrength {

  WEAK = "weak",

  MODERATE = "moderate",

  STRONG = "strong",

  CORE = "core"
}

export { RelationshipType };

export interface Relationship {

  type: RelationshipType;

  targetId: string;

  strength: RelationshipStrength;

  weight?: number;

  description?: string;
}
