import { env } from "../config/env";
import { EntityRepository } from "../core/repositories/EntityRepository";
import { SupabaseEntityRepository } from "../infrastructure/repositories/supabase/EntityRepository";
import { SeedEntityRepository } from "../infrastructure/repositories/seed/EntityRepository";

export function createEntityRepository(): EntityRepository {
  if (env.USE_SUPABASE === "true") {
    return new SupabaseEntityRepository();
  }

  return new SeedEntityRepository();
}

