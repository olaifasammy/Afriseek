import { SettingsRepository } from "../repositories/SettingsRepository";
import { SeedSettingsRepository } from "../repositories/SeedSettingsRepository";
import { SupabaseSettingsRepository } from "../repositories/SupabaseSettingsRepository";

let repository:
  SettingsRepository | null = null;

export function createSettingsRepository(): SettingsRepository {

  if (!repository) {

    if (process.env.USE_SUPABASE === "true") {

      repository =
        new SupabaseSettingsRepository();

    } else {

      repository =
        new SeedSettingsRepository();
    }
  }

  return repository;
}
