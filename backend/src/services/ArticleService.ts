import { ArticleRepository } from "../core/repositories/ArticleRepository";
import { Article, ArticleStatus } from "../types/article";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class ArticleService {
  constructor(
    private articleRepository: ArticleRepository,
    private auditService: AuditService
  ) {}

  async getAll() {
    logger.info("Fetching all articles");
    return this.articleRepository.findAll();
  }

  async getBySlug(slug: string) {
    logger.info({ slug }, "Fetching article by slug");
    return this.articleRepository.findBySlug(slug);
  }

  async create(actorId: string, data: Omit<Article, 'id' | 'status' | 'versions' | 'metadata'>) {
    logger.info({ actorId, title: data.title }, "Creating article");
    const article: Article = {
      id: `art_${Date.now()}`,
      slug: data.slug,
      title: data.title,
      summary: data.summary,
      entityIds: data.entityIds,
      status: ArticleStatus.DRAFT,
      versions: [],
      metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    };
    await this.articleRepository.create(article);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: article.id,
      action: 'CREATE',
      timestamp: new Date().toISOString(),
      metadata: { new_value: article }
    });
    logger.info({ articleId: article.id }, "Article created successfully");
    return article;
  }

  async update(actorId: string, id: string, data: Partial<Article>) {
    logger.info({ actorId, articleId: id }, "Updating article");
    const article = await this.articleRepository.findById(id);
    if (!article) {
        logger.error({ articleId: id }, "Article not found for update");
        throw new Error("Article not found");
    }

    const oldArticle = { ...article };
    
    // Create new version
    article.versions.push({
      version: article.versions.length + 1,
      content: JSON.stringify(article.summary), // Simplified for now
      editorId: actorId,
      createdAt: new Date().toISOString()
    });

    Object.assign(article, data, {
      metadata: { ...article.metadata, updatedAt: new Date().toISOString() }
    });

    await this.articleRepository.update(article);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: article.id,
      action: 'UPDATE',
      timestamp: new Date().toISOString(),
      metadata: { old_value: oldArticle, new_value: article }
    });
    logger.info({ articleId: id }, "Article updated successfully");
    return article;
  }

  async delete(actorId: string, id: string) {
    logger.info({ actorId, articleId: id }, "Deleting article");
    await this.articleRepository.delete(id, actorId);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: id,
      action: 'DELETE',
      timestamp: new Date().toISOString()
    });
    logger.info({ articleId: id }, "Article deleted successfully");
    return { success: true };
  }

  async transitionStatus(actorId: string, id: string, status: ArticleStatus) {
    logger.info({ actorId, articleId: id, status }, "Transitioning article status");
    const article = await this.articleRepository.findById(id);
    if (!article) {
        logger.error({ articleId: id }, "Article not found for status transition");
        throw new Error("Article not found");
    }
    
    const oldStatus = article.status;
    article.status = status;
    article.metadata.updatedAt = new Date().toISOString();
    
    await this.articleRepository.update(article);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: article.id,
      action: 'STATUS_CHANGE',
      timestamp: new Date().toISOString(),
      metadata: { old_value: { status: oldStatus }, new_value: { status: status } }
    });
    logger.info({ articleId: id, status }, "Article status updated successfully");
    return article;
  }
}
