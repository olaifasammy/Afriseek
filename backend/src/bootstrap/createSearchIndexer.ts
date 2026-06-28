import { SearchIndexer } from "../services/SearchIndexer";

export function createSearchIndexer(): SearchIndexer {
  return new SearchIndexer();
}
