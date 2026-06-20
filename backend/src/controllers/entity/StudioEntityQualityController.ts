import { Request, Response } from "express";
import { EntityQualityService } from "../../services/entity/EntityQualityService";

export class StudioEntityQualityController {
  private service = new EntityQualityService();

  getReport = async (_req: Request, res: Response) => {
    res.json({
      success: true,
      data: await this.service.getReport()
    });
  };
}
