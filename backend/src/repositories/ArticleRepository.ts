import { Article }
from "../types/article";

export interface ArticleRepository {

  findAll():
    Promise<Article[]>;

  findBySlug(
    slug: string
  ):
    Promise<Article | null>;

  create(
    article: Article
  ):
    Promise<void>;

  update(
    article: Article
  ):
    Promise<void>;
}
