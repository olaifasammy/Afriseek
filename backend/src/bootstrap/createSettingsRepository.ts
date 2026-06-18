import { SettingsRepository } from "../repositories/SettingsRepository";
import { SeedSettingsRepository } from "../repositories/SeedSettingsRepository";

let repository:
  SettingsRepository | null = null;

export function createSettingsRepository(): SettingsRepository {

  if (!repository) {

    repository =
      new SeedSettingsRepository();
  }

  return repository;
}
