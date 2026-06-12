import { ArticleService }
from "../services/ArticleService";

import { InMemoryArticleRepository }
from "../repositories/InMemoryArticleRepository";

const repository =
  new InMemoryArticleRepository();

const service =
  new ArticleService(
    repository
  );

export function
createArticleService() {

  return service;
}
