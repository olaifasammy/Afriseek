import { getDatabase } from "../../../config/supabase";
import { Article } from "../../../types/article";
import { ArticleRepository } from "../../../core/repositories/ArticleRepository";

export class SupabaseArticleRepository
implements ArticleRepository {

  async findAll(): Promise<Article[]> {

    const { data }: any =
      await getDatabase()
        .from("articles")
        .select("*");

    return Promise.all(
      (data ?? []).map(
        (row: any) =>
          this.findBySlug(row.slug)
      )
    ).then(
      rows =>
        rows.filter(Boolean) as Article[]
    );
  }

  async findBySlug(
    slug: string
  ): Promise<Article | null> {

    const { data }: any =
      await getDatabase()
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!data) {
      return null;
    }

    const { data: versions }: any =
      await getDatabase()
        .from("article_versions")
        .select("*")
        .eq("article_id", data.id)
        .order(
          "version",
          { ascending: true }
        );

    const { data: entities }: any =
      await getDatabase()
        .from("article_entities")
        .select("*")
        .eq("article_id", data.id);

    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      summary: data.summary,
      published: data.published,
      entityIds:
        (entities ?? []).map(
          (e: any) => e.entity_id
        ),
      versions:
        (versions ?? []).map(
          (v: any) => ({
            version: v.version,
            content: v.content,
            editorId: v.editor_id,
            createdAt: v.created_at
          })
        ),
      metadata: {
        createdAt: data.created_at,
        updatedAt: data.created_at
      }
    };
  }

  async create(
    article: Article
  ): Promise<void> {

    await (getDatabase()
      .from("articles") as any)
      .insert({
        id: article.id,
        slug: article.slug,
        title: article.title,
        summary: article.summary,
        published: article.published,
        created_at:
          article.metadata.createdAt
      });

    if (article.entityIds.length) {

      await (getDatabase()
        .from("article_entities") as any)
        .insert(
          article.entityIds.map(
            entityId => ({
              article_id: article.id,
              entity_id: entityId
            })
          )
        );
    }

    if (article.versions.length) {

      await (getDatabase()
        .from("article_versions") as any)
        .insert(
          article.versions.map(
            version => ({
              article_id: article.id,
              version: version.version,
              content: version.content,
              editor_id: version.editorId,
              created_at: version.createdAt
            })
          )
        );
    }
  }

  async update(
    article: Article
  ): Promise<void> {

    await (getDatabase()
      .from("articles") as any)
      .update({
        title: article.title,
        summary: article.summary,
        published: article.published
      })
      .eq("id", article.id);

    const latest =
      article.versions[
        article.versions.length - 1
      ];

    if (latest) {

      await (getDatabase()
        .from("article_versions") as any)
        .insert({
          article_id: article.id,
          version: latest.version,
          content: latest.content,
          editor_id: latest.editorId,
          created_at: latest.createdAt
        });
    }
  }
}
