import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import { UserService } from "../services/UserService";
import { SecretKeyService } from "../modules/security/SecretKeyService";

export class SecretKeyController {
  private users: UserService;
  private secrets: SecretKeyService;

  constructor() {
    const { userRepository } = getDependencies();
    this.users = new UserService(userRepository);
    this.secrets = new SecretKeyService();
  }

  verify = async (req: Request, res: Response) => {
    const { userId, secretKey } = req.body;

    const user = await this.users.getById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        verified: false,
      });
    }

    const valid = this.secrets.verify(secretKey, user.secretKeyHash || "");

    if (!valid) {
      return res.status(401).json({
        success: false,
        verified: false,
      });
    }

    user.secretKeyVerified = true;

    await this.users.update(user);

    return res.json({
      success: true,
      verified: true,
    });
  };
}
