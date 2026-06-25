import { ArticleService }
from "../services/ArticleService";

import { SupabaseArticleRepository } from "../infrastructure/repositories/supabase/SupabaseArticleRepository";

const repository =
  new SupabaseArticleRepository();

const service =
  new ArticleService(
    repository
  );

export function
createArticleService() {

  return service;
}
