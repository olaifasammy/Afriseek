import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import { UserService } from "../services/UserService";
import { UserRole } from "../types/role";

export class UserController {

  getAllUsers = async (_req: Request, res: Response) => {
    try {

      const { userRepository } = getDependencies();

      const userService =
        new UserService(userRepository);

      const users =
        await userService.getAll();

      const safeUsers =
        users.map(
          ({ passwordHash, ...safe }) => safe
        );

      return res.json({
        success: true,
        data: safeUsers
      });

    } catch (error) {

      console.error(
        "❌ Get All Users Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  getUserById = async (
    req: Request,
    res: Response
  ) => {

    const { userRepository } =
      getDependencies();

    const userService =
      new UserService(userRepository);

    const user =
      await userService.getById(
        String(req.params.id)
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const { passwordHash, ...safeUser } =
      user;

    return res.json({
      success: true,
      data: safeUser
    });
  };

  updateRole = async (
    req: Request,
    res: Response
  ) => {

    const { role } = req.body;

    const { userRepository } =
      getDependencies();

    const userService =
      new UserService(userRepository);

    const user =
      await userService.getById(
        String(req.params.id)
      );

    if (!user) {
      return res.status(404).json({
        success: false
      });
    }

    user.role =
      role as UserRole;

    await userService.update(
      user
    );

    return res.json({
      success: true
    });
  };

  updateActive = async (
    req: Request,
    res: Response
  ) => {

    const { active } = req.body;

    const { userRepository } =
      getDependencies();

    const userService =
      new UserService(userRepository);

    const user =
      await userService.getById(
        String(req.params.id)
      );

    if (!user) {
      return res.status(404).json({
        success: false
      });
    }

    user.active =
      Boolean(active);

    await userService.update(
      user
    );

    return res.json({
      success: true
    });
  };

  deleteUser = async (
    req: Request,
    res: Response
  ) => {

    const { userRepository } =
      getDependencies();

    const userService =
      new UserService(userRepository);

    await userService.delete(
      String(req.params.id)
    );

    return res.json({
      success: true
    });
  };
}
