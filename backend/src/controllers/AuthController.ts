import { Request, Response } from "express";
import { AuthService } from "../modules/auth/AuthService";

export class AuthController {

  constructor(
    private auth: AuthService
  ) {}

  login = async (
    req: Request,
    res: Response
  ) => {

    const {
      email,
      password
    } = req.body;

    const user =
      await this.auth.login(
        email,
        password
      );

    if (!user) {

      return res.status(401).json({
        success: false,
        message:
          "Invalid credentials"
      });
    }

    return res.json({
      success: true,
      data: user
    });
  };
}
