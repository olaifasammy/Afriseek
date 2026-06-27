import { ArticleRepository } from "../core/repositories/ArticleRepository";
import { Article, ArticleStatus } from "../types/article";
import { AuditService } from "./AuditService";

export class ArticleService {
  constructor(
    private articleRepository: ArticleRepository,
    private auditService: AuditService
  ) {}

  async getAll() {
    return this.articleRepository.findAll();
  }

  async getBySlug(slug: string) {
    return this.articleRepository.findBySlug(slug);
  }

  async create(actorId: string, data: Omit<Article, 'id' | 'status' | 'versions' | 'metadata'>) {
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
    return article;
  }

  async update(actorId: string, id: string, data: Partial<Article>) {
    const article = await this.articleRepository.findById(id);
    if (!article) throw new Error("Article not found");

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
    return article;
  }

  async delete(actorId: string, id: string) {
    await this.articleRepository.delete(id, actorId);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'ARTICLE',
      entityId: id,
      action: 'DELETE',
      timestamp: new Date().toISOString()
    });
    return { success: true };
  }

  async transitionStatus(actorId: string, id: string, status: ArticleStatus) {
    const article = await this.articleRepository.findById(id);
    if (!article) throw new Error("Article not found");
    
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
    return article;
  }
}
