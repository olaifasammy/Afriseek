export class QueryProcessor {

  normalize(
    query: string
  ): string {

    return query
      .trim()
      .toLowerCase();
  }
}
