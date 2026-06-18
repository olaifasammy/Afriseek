import { Settings } from "../types/settings";

export interface SettingsRepository {

  get(): Promise<Settings>;

  update(
    settings: Settings
  ): Promise<void>;
}
