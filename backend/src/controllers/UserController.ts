import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import { UserService } from "../services/UserService";

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
          ({ passwordHash, secretKeyHash, ...safe }) => safe
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
}
