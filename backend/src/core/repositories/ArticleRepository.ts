import { Article, ArticleStatus } from "../../types/article";

export interface ArticleRepository {
  findAll(): Promise<Article[]>;
  findBySlug(slug: string): Promise<Article | null>;
  findById(id: string): Promise<Article | null>;
  create(article: Article): Promise<void>;
  update(article: Article): Promise<void>;
  delete(id: string, actorId: string): Promise<void>;
  findByStatus(status: ArticleStatus): Promise<Article[]>;
}
