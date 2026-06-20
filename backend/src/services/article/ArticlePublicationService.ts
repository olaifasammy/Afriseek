export class ArticlePublicationService {
  async publish(articleId: string) {
    return { articleId, published: true };
  }

  async unpublish(articleId: string) {
    return { articleId, published: false };
  }
}
