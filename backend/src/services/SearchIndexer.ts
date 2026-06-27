import { Article } from "../types/article";
import { Entity } from "../types/entity";

export class SearchIndexer {
  // In a production environment, this would interface with OpenSearch/Elasticsearch
  private index: { entities: Map<string, Entity>, articles: Map<string, Article> } = {
    entities: new Map(),
    articles: new Map()
  };

  async indexEntity(entity: Entity) {
    this.index.entities.set(entity.id, entity);
    console.log(`Indexed Entity: ${entity.name}`);
  }

  async indexArticle(article: Article) {
    this.index.articles.set(article.id, article);
    console.log(`Indexed Article: ${article.title}`);
  }

  async deleteEntity(id: string) {
    this.index.entities.delete(id);
    console.log(`Removed Entity from index: ${id}`);
  }

  async deleteArticle(id: string) {
    this.index.articles.delete(id);
    console.log(`Removed Article from index: ${id}`);
  }

  async search(query: string) {
    const q = query.toLowerCase();
    const entities = Array.from(this.index.entities.values()).filter(e => e.name.toLowerCase().includes(q));
    const articles = Array.from(this.index.articles.values()).filter(a => a.title.toLowerCase().includes(q));
    return { entities, articles };
  }
}
