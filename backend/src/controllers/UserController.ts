import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

  constructor(
    private userService: UserService
  ) {}

  getAllUsers = async (
    _req: Request,
    res: Response
  ) => {

    const users =
      await this.userService.getAll();

    return res.json({
      success: true,
      data: users
    });
  };
}
