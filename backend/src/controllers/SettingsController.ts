import { Request, Response } from "express";
import { createSettingsRepository } from "../bootstrap/createSettingsRepository";
import { SettingsService } from "../services/SettingsService";

export class SettingsController {

  private settings =
    new SettingsService(
      createSettingsRepository()
    );

  getSettings = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.settings.get()
    });
  };

  updateSettings = async (
    req: Request,
    res: Response
  ) => {

    const current =
      await this.settings.get();

    const updated = {

      ...current,

      ...req.body,

      updatedAt:
        new Date().toISOString()
    };

    await this.settings.update(
      updated
    );

    return res.json({
      success: true,
      data: updated
    });
  };
}
