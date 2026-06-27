export enum ArticleStatus {
  DRAFT = 'DRAFT',
  REVIEW = 'REVIEW',
  APPROVED = 'APPROVED',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export interface ArticleVersion {

  version: number;

  content: string;

  editorId: string;

  createdAt: string;
}

export interface Article {

  id: string;

  slug: string;

  title: string;

  summary: string;

  entityIds: string[];

  status: ArticleStatus;

  versions: ArticleVersion[];

  metadata: {

    createdAt: string;

    updatedAt: string;
    deletedAt?: string;
  };
}
