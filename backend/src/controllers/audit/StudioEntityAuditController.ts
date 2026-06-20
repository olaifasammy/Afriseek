import { Request, Response } from "express";
import { EntityAuditService } from "../../services/audit/EntityAuditService";

export class StudioEntityAuditController {

  private service =
    new EntityAuditService();

  getAudit = async (
    req: Request,
    res: Response
  ) => {

    const data =
      await this.service.getAudit(
        String(req.params.entityId)
      );

    res.json({
      success: true,
      data
    });
  };

  getHistory = async (
    req: Request,
    res: Response
  ) => {

    const data =
      await this.service.getAudit(
        String(req.params.entityId)
      );

    res.json({
      success: true,
      data: data.history
    });
  };

  getVersions = async (
    req: Request,
    res: Response
  ) => {

    const data =
      await this.service.getAudit(
        String(req.params.entityId)
      );

    res.json({
      success: true,
      data: data.versions
    });
  };
}
