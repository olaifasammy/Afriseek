import { Request, Response } from "express";
import { OntologyAuditService } from "../services/OntologyAuditService";

export class StudioOntologyAuditController {

  private service =
    new OntologyAuditService();

  getAudit = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.service.runAudit()
    });
  };
}
