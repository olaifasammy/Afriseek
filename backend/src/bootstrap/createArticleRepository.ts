import { PostgreSQLArticleRepository } from "../infrastructure/repositories/postgres/PostgreSQLArticleRepository";

export function createArticleRepository() {
  return new PostgreSQLArticleRepository();
}
