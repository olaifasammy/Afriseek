import { RelationshipType } from "../types/enums/RelationshipType";

export interface RelationshipDefinition {

  type: RelationshipType;

  description: string;
}

export const RelationshipDefinitions:
  RelationshipDefinition[] = [];
