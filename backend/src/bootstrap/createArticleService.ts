import { ArticleService }
from "../services/ArticleService";

import { DatabaseArticleRepository }
from "../repositories/DatabaseArticleRepository";

const repository =
  new DatabaseArticleRepository();

const service =
  new ArticleService(
    repository
  );

export function
createArticleService() {

  return service;
}
