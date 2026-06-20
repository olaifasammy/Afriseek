import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";

export class StudioUserController {
  getUsers = async (_req: Request, res: Response) => {
    const { userRepository } = getDependencies();
    const users = await userRepository.findAll();

    return res.json({
      success: true,
      data: users.map(({ passwordHash, ...u }: any) => u)
    });
  };

  getUser = async (req: Request, res: Response) => {
    const { userRepository } = getDependencies();
    const user = await userRepository.findById(String(req.params.id));

    return res.json({
      success: true,
      data: user
    });
  };

  createUser = async (_req: Request, res: Response) => {
    return res.json({ success: true });
  };

  updateUser = async (_req: Request, res: Response) => {
    return res.json({ success: true });
  };

  deleteUser = async (_req: Request, res: Response) => {
    return res.json({ success: true });
  };

  suspendUser = async (_req: Request, res: Response) => {
    return res.json({ success: true });
  };

  activateUser = async (_req: Request, res: Response) => {
    return res.json({ success: true });
  };
}
