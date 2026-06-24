import { Request, Response } from "express";
import { EntityDashboardService } from "../services/EntityDashboardService";

export class StudioEntityDashboardController {

private service =
new EntityDashboardService();

getDashboard = async (
_req: Request,
res: Response
) => {

return res.json({
  success: true,
  data:
    await this.service
      .getMetrics()
});

};
}
