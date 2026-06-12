import type { NarrativeResult } from "../../core/intelligence/NarrativeEngine";
export interface GraphRelatedItem {
  name: string;
  type: string;
  score: number;
  reasoning: string[];
}

export interface GraphResponse {
  entity: {
    id: string;
    name: string;
    type: string;
  };
  narrative?: NarrativeResult; // FIX: Added capability to pass narrative upstream to the client
  related: GraphRelatedItem[];
}