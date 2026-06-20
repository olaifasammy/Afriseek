import { Request, Response } from "express";
import { EntityIntegrityAuditService } from "../../services/entity/EntityIntegrityAuditService";

export class StudioEntityIntegrityController {
  private service = new EntityIntegrityAuditService();

  getReport = async (_req: Request, res: Response) => {
    res.json({
      success: true,
      data: await this.service.scan()
    });
  };
}
