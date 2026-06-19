import { Request, Response } from "express";
import { OrphanEntityService } from "../services/OrphanEntityService";

export class StudioOrphanEntityController {

  private service =
    new OrphanEntityService();

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data:
        await this.service.getAll()
    });
  };
}
