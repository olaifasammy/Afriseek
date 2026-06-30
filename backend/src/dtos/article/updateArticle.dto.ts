export interface UpdateArticleDto {
  title?: string;
  summary?: string;
  excerpt?: string;
  content?: string;
  status?: string;
  tags?: string[];
  categories?: string[];
}
