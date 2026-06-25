import { UserRepository } from "../core/repositories/UserRepository";
import { SupabaseUserRepository } from "../infrastructure/repositories/supabase/UserRepository";
import { SeedUserRepository } from "../repositories/SeedUserRepository";

export function createUserRepository(): UserRepository {
  if (process.env.USE_SUPABASE === "true") {
    console.log("AUTH_REPO=SUPABASE");
    return new SupabaseUserRepository();
  }

  console.log("AUTH_REPO=SEED");
  return new SeedUserRepository();
}
