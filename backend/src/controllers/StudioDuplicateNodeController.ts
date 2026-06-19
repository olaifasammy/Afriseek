import { Request, Response } from "express";
import { DuplicateNodeService } from "../services/DuplicateNodeService";

export class StudioDuplicateNodeController {

  private service =
    new DuplicateNodeService();

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
