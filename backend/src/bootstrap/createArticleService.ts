import { ArticleService } from "../services/ArticleService";
import { PostgreSQLArticleRepository } from "../infrastructure/repositories/postgres/PostgreSQLArticleRepository";
import { createAuditService } from "./createAuditService";

export function createArticleService() {
  const repository = new PostgreSQLArticleRepository();
  const auditService = createAuditService();
  return new ArticleService(repository, auditService);
}
