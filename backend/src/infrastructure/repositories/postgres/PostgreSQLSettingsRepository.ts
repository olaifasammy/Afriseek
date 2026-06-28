import { query } from "../../../config/database";
import { SettingsRepository } from "../../../core/repositories/SettingsRepository";
import { Settings } from "../../../types/settings";

export class PostgreSQLSettingsRepository implements SettingsRepository {
  async get(): Promise<Settings> {
    const { rows: [data] } = await query("SELECT * FROM settings LIMIT 1");
    return data || { maintenanceMode: false };
  }

  async update(settings: Settings): Promise<void> {
    await query("UPDATE settings SET maintenance_mode = $1", [settings.maintenanceMode]);
  }
}
