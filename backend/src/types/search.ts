import { AfriseekEntity } from "./entity";

export interface SearchResult {
  entity: AfriseekEntity;
  score: number;
  snippet?: string;
}
