import { EntityRepository } from "../core/repositories/EntityRepository";
import { SeedEntityRepository } from "../infrastructure/repositories/seed/EntityRepository";
import { SupabaseEntityRepository } from "../infrastructure/repositories/supabase/EntityRepository";

export function createEntityRepository(): EntityRepository {
  if (process.env.USE_SUPABASE === "true") {
    return new SupabaseEntityRepository();
  }

  return new SeedEntityRepository();
}
