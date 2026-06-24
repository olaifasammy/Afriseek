import { Request, Response } from "express";

import { EntityHistoryService }
from "../../../services/EntityHistoryService";

export class StudioEntityHistoryController {

  private service =
    new EntityHistoryService();

  getHistory = async (
    req: Request,
    res: Response
  ) => {

    const entityId =
      String(req.params.entityId);

    return res.json({
      success: true,
      data:
        await this.service.getHistory(
          entityId
        )
    });
  };
}
