import { Request, Response } from "express";
import { BrokenLinkService } from "../services/BrokenLinkService";

export class StudioBrokenLinkController {

  private service =
    new BrokenLinkService();

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
