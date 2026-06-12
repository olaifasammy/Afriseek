import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import { UserService } from "../services/UserService";

export class UserController {
  private userService: UserService;

  constructor() {
    const { userRepository } = getDependencies();
    this.userService = new UserService(userRepository);
  }

  getAllUsers = async (_req: Request, res: Response) => {
    try {
      const users = await this.userService.getAll();
      
      // Strip sensitive hash data before returning to client
      const safeUsers = users.map(({ passwordHash, secretKeyHash, ...safe }) => safe);
      
      return res.json({
        success: true,
        data: safeUsers,
      });
    } catch (error) {
      console.error("❌ Get All Users Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
}
