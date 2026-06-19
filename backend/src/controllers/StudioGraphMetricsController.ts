import { Request, Response } from "express";
import { GraphMetricsService } from "../services/GraphMetricsService";

export class StudioGraphMetricsController {

  private service =
    new GraphMetricsService();

  getMetrics = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data:
        await this.service.getMetrics()
    });
  };
}
