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

  published: boolean;

  versions: ArticleVersion[];

  metadata: {

    createdAt: string;

    updatedAt: string;
  };
}
