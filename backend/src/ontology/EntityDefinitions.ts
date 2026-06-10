import { EntityType } from "../types/enums/EntityType";

export interface EntityDefinition {

  type: EntityType;

  name: string;

  description: string;
}

export const EntityDefinitions: EntityDefinition[] = [];
