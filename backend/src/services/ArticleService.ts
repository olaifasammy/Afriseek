import { Article }
from "../types/article";

import { ArticleRepository }
from "../repositories/ArticleRepository";

export class ArticleService {

  constructor(
    private repository:
      ArticleRepository
  ) {}

  async getAll() {

    return this.repository.findAll();
  }

  async getBySlug(
    slug: string
  ) {

    return this.repository.findBySlug(
      slug
    );
  }

  async create(
    article: Article
  ) {

    await this.repository.create(
      article
    );
  }

  async update(
    article: Article
  ) {

    await this.repository.update(
      article
    );
  }
}
