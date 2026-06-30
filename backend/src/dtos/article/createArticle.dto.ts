export interface CreateArticleDto {
  title: string;
  slug: string;
  articleType: string;
  summary: string;
  excerpt: string;
  authorId: string;
  tags?: string[];
  categories?: string[];
}
