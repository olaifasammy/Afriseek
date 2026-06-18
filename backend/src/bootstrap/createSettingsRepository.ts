import { SettingsRepository } from "../repositories/SettingsRepository";
import { SeedSettingsRepository } from "../repositories/SeedSettingsRepository";
import { SupabaseSettingsRepository } from "../repositories/SupabaseSettingsRepository";

let repository: SettingsRepository | null = null;

export function createSettingsRepository(): SettingsRepository {

  if (!repository) {

    repository =
      process.env.USE_SUPABASE === "true"
        ? new SupabaseSettingsRepository()
        : new SeedSettingsRepository();
  }

  return repository;
}
