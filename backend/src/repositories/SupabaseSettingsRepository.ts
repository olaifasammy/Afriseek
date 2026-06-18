import { getDatabase } from "../config/supabase";
import { Settings } from "../types/settings";
import { SettingsRepository } from "./SettingsRepository";

type SettingsRow = {
  site_name: string;
  maintenance_mode: boolean;
  allow_registration: boolean;
  ai_enabled: boolean;
  indexing_enabled: boolean;
  updated_at: string;
};

export class SupabaseSettingsRepository implements SettingsRepository {
  private getClient() {
    return getDatabase();
  }

  async get(): Promise<Settings> {
    const { data, error } = await (this.getClient() as any)
      .from("settings")
      .select("*")
      .eq("id", "global")
      .single();

    if (error || !data) {
      throw error || new Error("Settings not found");
    }

    const row = data as SettingsRow;

    return {
      siteName: row.site_name,
      maintenanceMode: row.maintenance_mode,
      allowRegistration: row.allow_registration,
      aiEnabled: row.ai_enabled,
      indexingEnabled: row.indexing_enabled,
      updatedAt: row.updated_at
    };
  }

  async update(settings: Settings): Promise<void> {
    const { error } = await (this.getClient() as any)
      .from("settings")
      .update({
        site_name: settings.siteName,
        maintenance_mode: settings.maintenanceMode,
        allow_registration: settings.allowRegistration,
        ai_enabled: settings.aiEnabled,
        indexing_enabled: settings.indexingEnabled,
        updated_at: new Date().toISOString()
      })
      .eq("id", "global");

    if (error) {
      throw error;
    }
  }
}
