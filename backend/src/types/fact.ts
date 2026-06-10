import { Source } from "./source";
import { TraitType } from "./traits";

export enum FactType {

  TEXT = "text",

  NUMBER = "number",

  BOOLEAN = "boolean",

  DATE = "date",

  DATE_RANGE = "date_range",

  PERCENTAGE = "percentage",

  CURRENCY = "currency",

  COORDINATES = "coordinates",

  REFERENCE = "reference",

  LIST = "list"
}

export enum FactConfidence {

  CONFIRMED = "confirmed",

  HIGH = "high",

  MEDIUM = "medium",

  LOW = "low",

  DISPUTED = "disputed",

  LEGENDARY = "legendary"
}

export interface FactValue {

  value: any;

  unit?: string;
}

export interface Fact {

  id: string;

  key: string;

  label: string;

  traitType?: TraitType;

  type: FactType;

  value: FactValue;

  confidence: FactConfidence;

  verified?: boolean;

  isDisputed?: boolean;

  priority?: number;

  description?: string;

  validFrom?: string;

  validTo?: string;

  sources: Source[];

  metadata?: Record<string, any>;
}
