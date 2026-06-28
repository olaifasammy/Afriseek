import { SettingsRepository } from "../core/repositories/SettingsRepository";
import { PostgreSQLSettingsRepository } from "../infrastructure/repositories/postgres/PostgreSQLSettingsRepository";

export function createSettingsRepository(): SettingsRepository {
  return new PostgreSQLSettingsRepository();
}
