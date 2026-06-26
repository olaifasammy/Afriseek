import { ArticleRepository } from "../core/repositories/ArticleRepository";
import { Article } from "../types/article";

export class ArticleService {
  constructor(private articleRepository: ArticleRepository) {}

  async getAll() {
    return this.articleRepository.findAll();
  }

  async getBySlug(slug: string) {
    return this.articleRepository.findBySlug(slug);
  }

  async create(entityId: string, data: any) {
    const article: Article = { 
        id: `art_${Date.now()}`, 
        entityIds: [entityId], 
        published: false,
        versions: [],
        metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        ...data 
    };
    await this.articleRepository.create(article);
    return article;
  }

  async getByEntity(entityId: string) {
    const all = await this.articleRepository.findAll();
    return all.filter(a => a.entityIds.includes(entityId));
  }

  async update(article: Article) {
    await this.articleRepository.update(article);
    return article;
  }

  async delete(id: string) {
    await this.articleRepository.delete(id);
    return { success: true };
  }

  async approve(id: string) {
    const article = await this.articleRepository.findBySlug(id);
    if (!article) throw new Error("Article not found");
    article.published = true;
    await this.articleRepository.update(article);
    return article;
  }
}
