import { query } from "../../../config/database";
import { Article, ArticleStatus } from "../../../types/article";
import { ArticleRepository } from "../../../core/repositories/ArticleRepository";

export class PostgreSQLArticleRepository implements ArticleRepository {

  async findAll(): Promise<Article[]> {
    const { rows } = await query("SELECT id FROM articles");
    return Promise.all(rows.map(row => this.findById(row.id))).then(rows => rows.filter(Boolean) as Article[]);
  }

  async findBySlug(slug: string): Promise<Article | null> {
    const { rows: [article] } = await query("SELECT id FROM articles WHERE slug = $1", [slug]);
    if (!article) return null;
    return this.findById(article.id);
  }

  async findById(id: string): Promise<Article | null> {
    const { rows: [data] } = await query("SELECT * FROM articles WHERE id = $1", [id]);
    if (!data) return null;

    const { rows: versions } = await query("SELECT * FROM article_versions WHERE article_id = $1 ORDER BY version ASC", [id]);
    const { rows: entities } = await query("SELECT entity_id FROM article_entities WHERE article_id = $1", [id]);

    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      summary: data.summary,
      status: data.status,
      entityIds: entities.map((e: any) => e.entity_id),
      versions: versions.map((v: any) => ({
        version: v.version,
        content: v.content,
        editorId: v.editor_id,
        createdAt: v.created_at
      })),
      metadata: {
        createdAt: data.created_at,
        updatedAt: data.created_at
      }
    };
  }

  async findByStatus(status: ArticleStatus): Promise<Article[]> {
    const { rows } = await query("SELECT id FROM articles WHERE status = $1", [status]);
    return Promise.all(rows.map(row => this.findById(row.id))).then(rows => rows.filter(Boolean) as Article[]);
  }

  async findByEntityId(entityId: string): Promise<Article[]> {
    const { rows } = await query("SELECT article_id FROM article_entities WHERE entity_id = $1", [entityId]);
    return Promise.all(rows.map(row => this.findById(row.article_id))).then(rows => rows.filter(Boolean) as Article[]);
  }

  async create(article: Article): Promise<void> {
    await query(`
      INSERT INTO articles (id, slug, title, summary, status, created_at)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [article.id, article.slug, article.title, article.summary, article.status, article.metadata.createdAt]);

    if (article.entityIds.length) {
      for (const entityId of article.entityIds) {
        await query("INSERT INTO article_entities (article_id, entity_id) VALUES ($1, $2)", [article.id, entityId]);
      }
    }
  }

  async update(article: Article): Promise<void> {
    await query(`
      UPDATE articles 
      SET title = $1, summary = $2, status = $3
      WHERE id = $4
    `, [article.title, article.summary, article.status, article.id]);

    const latest = article.versions[article.versions.length - 1];
    if (latest) {
      await query(`
        INSERT INTO article_versions (article_id, version, content, editor_id, created_at)
        VALUES ($1, $2, $3, $4, $5)
      `, [article.id, latest.version, latest.content, latest.editorId, latest.createdAt]);
    }
  }

  async delete(id: string, _actorId: string): Promise<void> {
    await query("UPDATE articles SET deleted_at = NOW() WHERE id = $1", [id]);
  }
}
