import { TraitType } from "./traits";

export interface Trait {

  type: TraitType;

  title: string;

  description?: string;

  facts?: string[];

  metadata?: Record<string, any>;
}
