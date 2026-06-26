import { env } from "../config/env";
import { UserRepository } from "../core/repositories/UserRepository";
import { SupabaseUserRepository } from "../infrastructure/repositories/supabase/UserRepository";
import { SeedUserRepository } from "../repositories/SeedUserRepository";

export function createUserRepository(): UserRepository {
  if (env.USE_SUPABASE === "true") {
    return new SupabaseUserRepository();
  }

  return new SeedUserRepository();
}
