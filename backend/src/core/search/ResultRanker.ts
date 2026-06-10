import { SearchResult } from "../../types/search";

export class ResultRanker {

  rank(
    results: SearchResult[]
  ): SearchResult[] {

    return results.sort(
      (a, b) => b.score - a.score
    );
  }
}
