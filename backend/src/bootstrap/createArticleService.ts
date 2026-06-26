import { ArticleService } from "../services/ArticleService";
import { SupabaseArticleRepository } from "../infrastructure/repositories/supabase/SupabaseArticleRepository";

export function createArticleService() {
  const repository = new SupabaseArticleRepository();
  return new ArticleService(repository);
}
