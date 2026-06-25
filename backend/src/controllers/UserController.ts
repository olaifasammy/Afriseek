import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { getDependencies } from "../config/dependencies";
import { UserService } from "../services/UserService";
import { UserRole } from "../types/role";

export class UserController {

  getAllUsers = asyncHandler(async (_req: Request, res: Response, next: NextFunction) => {
    const { userRepository } = getDependencies();

    const userService = new UserService(userRepository);

    const users = await userService.getAll();

    const safeUsers = users.map(({ passwordHash, ...safe }) => safe);

    return res.json({
      success: true,
      data: safeUsers
    });
  });

  getUserById = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { userRepository } = getDependencies();
    const userService = new UserService(userRepository);
    const user = await userService.getById(String(req.params.id));

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const { passwordHash, ...safeUser } = user;
    return res.json({ success: true, data: safeUser });
  });

  updateRole = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { role } = req.body;
    const { userRepository } = getDependencies();
    const userService = new UserService(userRepository);

    const user = await userService.getById(String(req.params.id));

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.role = role as UserRole;
    await userService.update(user);
    return res.json({ success: true });
  });

  updateActive = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { active } = req.body;
    const { userRepository } = getDependencies();
    const userService = new UserService(userRepository);

    const user = await userService.getById(String(req.params.id));

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.active = Boolean(active);
    await userService.update(user);
    return res.json({ success: true });
  });

  deleteUser = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { userRepository } = getDependencies();
    const userService = new UserService(userRepository);

    await userService.delete(String(req.params.id));
    return res.json({ success: true });
  });
}
