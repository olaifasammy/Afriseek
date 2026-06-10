import { TraitType } from "../types/traits";

export interface TraitDefinition {

  type: TraitType;

  description: string;
}

export const TraitDefinitions:
  TraitDefinition[] = [];
