import { Request, Response } from "express";

export class StudioPermissionController {
  getPermissions = async (_req: Request, res: Response) => {
    return res.json({
      success: true,
      data: []
    });
  };

  assignPermissions = async (_req: Request, res: Response) => {
    return res.json({
      success: true
    });
  };
}
