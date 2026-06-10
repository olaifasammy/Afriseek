import { SearchResult } from "../../types/search";

export interface SearchEngine {

  search(
    query: string
  ): Promise<SearchResult[]>;
}
