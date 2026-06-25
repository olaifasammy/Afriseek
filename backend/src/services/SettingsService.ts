import { Settings } from "../types/settings";
import { SettingsRepository } from "../core/repositories/SettingsRepository";

export class SettingsService {

  constructor(
    private repository:
      SettingsRepository
  ) {}

  async get() {

    return this.repository.get();
  }

  async update(
    settings: Settings
  ) {

    return this.repository.update(
      settings
    );
  }
}
