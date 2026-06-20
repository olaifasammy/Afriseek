import { Request, Response } from "express";

export class StudioInvitationController {
  getInvitations = async (_req: Request, res: Response) => {
    return res.json({
      success: true,
      data: []
    });
  };

  createInvitation = async (_req: Request, res: Response) => {
    return res.json({
      success: true
    });
  };
}
