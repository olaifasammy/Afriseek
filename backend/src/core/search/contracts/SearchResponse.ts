import { SearchResult } from "../../../types/search";

export interface SearchResponse {

  query: string;

  total: number;

  results: SearchResult[];
}
