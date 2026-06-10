import { RelationshipType } from "./enums/RelationshipType";

export interface Relationship {

  type: RelationshipType;

  targetId: string;

  weight?: number;

  description?: string;

  startDate?: string;

  endDate?: string;

  verified?: boolean;

  sourceIds?: string[];

  metadata?: Record<string, any>;
}
