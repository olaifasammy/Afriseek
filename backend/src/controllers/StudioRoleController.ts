import { Request, Response } from "express";
import { UserRole } from "../types/role";

export class StudioRoleController {
  getRoles = async (_req: Request, res: Response) => {
    return res.json({
      success: true,
      data: Object.values(UserRole)
    });
  };
}
