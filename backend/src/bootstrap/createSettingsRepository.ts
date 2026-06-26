import { env } from "../config/env";
import { SettingsRepository } from "../core/repositories/SettingsRepository";
import { SeedSettingsRepository } from "../infrastructure/repositories/seed/SeedSettingsRepository";
import { SupabaseSettingsRepository } from "../infrastructure/repositories/supabase/SupabaseSettingsRepository";

let repository: SettingsRepository | null = null;

export function createSettingsRepository(): SettingsRepository {

  if (!repository) {

    repository =
      env.USE_SUPABASE === "true"
        ? new SupabaseSettingsRepository()
        : new SeedSettingsRepository();
  }

  return repository;
}
