import { Request, Response } from "express";
import { GraphIntegrityService } from "../services/GraphIntegrityService";

export class StudioGraphIntegrityController {

  private service =
    new GraphIntegrityService();

  getReport = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data:
        await this.service.run()
    });
  };
}
