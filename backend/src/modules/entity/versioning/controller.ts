import { Request, Response } from "express";

import { EntityVersioningService }
from "../../../services/EntityVersioningService";

export class StudioEntityVersioningController {

  private service =
    new EntityVersioningService();

  getVersions = async (
    req: Request,
    res: Response
  ) => {

    const entityId =
      String(req.params.entityId);

    return res.json({
      success: true,
      data:
        await this.service.getVersions(
          entityId
        )
    });
  };
}
