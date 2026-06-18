import { Settings } from "../types/settings";
import { SettingsRepository } from "./SettingsRepository";

export class SeedSettingsRepository
implements SettingsRepository {

  private settings: Settings = {

    siteName: "Afriseek",

    maintenanceMode: false,

    allowRegistration: true,

    aiEnabled: false,

    indexingEnabled: false,

    updatedAt:
      new Date().toISOString()
  };

  async get(): Promise<Settings> {

    return this.settings;
  }

  async update(
    settings: Settings
  ): Promise<void> {

    this.settings = settings;
  }
}
