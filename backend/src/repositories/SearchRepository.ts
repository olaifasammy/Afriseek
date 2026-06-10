import { SearchResult } from "../types/search";

export interface SearchRepository {

  search(
    query: string
  ): Promise<SearchResult[]>;
}
