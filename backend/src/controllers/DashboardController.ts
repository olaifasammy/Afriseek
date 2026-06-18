import { Request, Response } from "express";
import { DashboardService } from "../services/DashboardService";

export class DashboardController {

  private dashboard =
    new DashboardService();

  getStats = async (
    _req: Request,
    res: Response
  ) => {

    const data =
      await this.dashboard.getStats();

    return res.json({
      success: true,
      data
    });
  };
}
