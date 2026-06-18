import { getDatabase } from "../config/supabase";
import { Settings } from "../types/settings";
import { SettingsRepository } from "./SettingsRepository";

export class SupabaseSettingsRepository
implements SettingsRepository {

  private getClient() {
    return getDatabase();
  }

  async get(): Promise<Settings> {

    const { data, error } =
      await (this.getClient() as any)
        .from("settings")
        .select("*")
        .eq("id", "global")
        .single();

    if (error || !data) {
      throw error || new Error("Settings not found");
    }

    return {
      siteName: data.site_name,
      maintenanceMode: data.maintenance_mode,
      allowRegistration: data.allow_registration,
      aiEnabled: data.ai_enabled,
      indexingEnabled: data.indexing_enabled,
      updatedAt: data.updated_at
    };
  }

  async update(
    settings: Settings
  ): Promise<void> {

    const { error } =
      await (this.getClient() as any)
        .from("settings")
        .update({
          site_name: settings.siteName,
          maintenance_mode: settings.maintenanceMode,
          allow_registration: settings.allowRegistration,
          ai_enabled: settings.aiEnabled,
          indexing_enabled: settings.indexingEnabled,
          updated_at: settings.updatedAt
        })
        .eq("id", "global");

    if (error) {
      throw error;
    }
  }
}
