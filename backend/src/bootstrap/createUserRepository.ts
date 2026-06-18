import { UserRepository } from "../repositories/UserRepository";
import { SeedUserRepository } from "../repositories/SeedUserRepository";
import { SupabaseUserRepository } from "../repositories/SupabaseUserRepository";

export function createUserRepository(): UserRepository {
  if (process.env.USE_SUPABASE === "true") {
    console.log("AUTH_REPO=SUPABASE");
    return new SupabaseUserRepository();
  }

  console.log("AUTH_REPO=SEED");
  return new SeedUserRepository();
}
