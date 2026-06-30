import { EventEmitter } from 'events';

class ArticleEventEmitter extends EventEmitter {
  static ARTICLE_CREATED = 'ARTICLE_CREATED';
  static ARTICLE_UPDATED = 'ARTICLE_UPDATED';
  static ARTICLE_PUBLISHED = 'ARTICLE_PUBLISHED';
  static ARTICLE_ARCHIVED = 'ARTICLE_ARCHIVED';

  emitCreated(article: any) {
    this.emit(ArticleEventEmitter.ARTICLE_CREATED, article);
  }

  emitUpdated(article: any) {
    this.emit(ArticleEventEmitter.ARTICLE_UPDATED, article);
  }

  emitPublished(id: string) {
    this.emit(ArticleEventEmitter.ARTICLE_PUBLISHED, id);
  }

  emitArchived(id: string) {
    this.emit(ArticleEventEmitter.ARTICLE_ARCHIVED, id);
  }
}

export const articleEventEmitter = new ArticleEventEmitter();
