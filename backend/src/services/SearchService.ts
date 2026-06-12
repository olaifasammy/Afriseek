import { EntityService }
from "./EntityService";

import { ArticleService }
from "./ArticleService";

export class SearchService {

  constructor(
    private entities:
      EntityService,

    private articles:
      ArticleService
  ) {}

  async search(
    query: string
  ) {

    const q =
      query.toLowerCase();

    const entities =
      (await this.entities.getAll())
      .filter(
        e =>
          e.name
            .toLowerCase()
            .includes(q)
      );

    const articles =
      (await this.articles.getAll())
      .filter(
        a =>
          a.title
            .toLowerCase()
            .includes(q)
      );

    return {
      entities,
      articles
    };
  }
}
