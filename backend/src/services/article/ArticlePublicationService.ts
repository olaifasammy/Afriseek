import { ArticleRepository } from "../../core/repositories/ArticleRepository";
import { AuditService } from "../AuditService";
import { ArticleStatus } from "../../types/article";
import { logger } from "../../config/logger";

export class ArticlePublicationService {
  constructor(
    private articleRepository: ArticleRepository,
    private auditService: AuditService
  ) {}

  async publish(actorId: string, articleId: string) {
    logger.info({ actorId, articleId }, "Publishing article");
    const article = await this.articleRepository.findById(articleId);
    if (!article) throw new Error("Article not found");

    const oldStatus = article.status;
    article.status = ArticleStatus.PUBLISHED;
    article.metadata.updatedAt = new Date().toISOString();

    await this.articleRepository.update(article);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: articleId,
      action: 'PUBLISH',
      timestamp: new Date().toISOString(),
      metadata: { old_value: { status: oldStatus }, new_value: { status: ArticleStatus.PUBLISHED } }
    });
    
    logger.info({ articleId }, "Article published successfully");
    return article;
  }

  async unpublish(actorId: string, articleId: string) {
    logger.info({ actorId, articleId }, "Unpublishing article");
    const article = await this.articleRepository.findById(articleId);
    if (!article) throw new Error("Article not found");

    const oldStatus = article.status;
    article.status = ArticleStatus.DRAFT;
    article.metadata.updatedAt = new Date().toISOString();

    await this.articleRepository.update(article);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: articleId,
      action: 'UNPUBLISH',
      timestamp: new Date().toISOString(),
      metadata: { old_value: { status: oldStatus }, new_value: { status: ArticleStatus.DRAFT } }
    });
    
    logger.info({ articleId }, "Article unpublished successfully");
    return article;
  }
}
