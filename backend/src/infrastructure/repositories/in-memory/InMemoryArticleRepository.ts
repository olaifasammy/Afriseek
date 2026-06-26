import { ArticleRepository } from "../../../core/repositories/ArticleRepository";
import { Article } from "../../../types/article";

export class InMemoryArticleRepository
implements ArticleRepository {

  private articles:
    Article[] = [];

  async findAll() {

    return this.articles;
  }

  async findBySlug(
    slug: string
  ) {

    return (
      this.articles.find(
        a => a.slug === slug
      ) || null
    );
  }

  async create(
    article: Article
  ) {

    this.articles.push(
      article
    );
  }

  async update(
    article: Article
  ) {

    const index =
      this.articles.findIndex(
        a => a.id === article.id
      );

    if (index >= 0) {

      this.articles[index] =
        article;
    }
  }

  async delete(id: string): Promise<void> {
    this.articles = this.articles.filter(a => a.id !== id);
  }
}
