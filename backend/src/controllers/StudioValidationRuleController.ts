import { Request, Response } from "express";

import { getDependencies } from "../config/dependencies";
import { ValidationRuleService } from "../services/ValidationRuleService";

export class StudioValidationRuleController {

  private service =
    new ValidationRuleService(
      getDependencies()
        .validationRuleRepository
    );

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.service.getAll()
    });
  };
}
