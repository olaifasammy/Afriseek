import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import { UserService } from "../services/UserService";
import { SecretKeyService } from "../modules/security/SecretKeyService";

export class SecretKeyController {

  verify = async (
    req: Request,
    res: Response
  ) => {

    const { userRepository } =
      getDependencies();

    const users =
      new UserService(userRepository);

    const secrets =
      new SecretKeyService();

    const {
      userId,
      secretKey
    } = req.body;

    const user =
      await users.getById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        verified: false
      });
    }

    const valid =
      secrets.verify(
        secretKey,
        user.secretKeyHash || ""
      );

    if (!valid) {
      return res.status(401).json({
        success: false,
        verified: false
      });
    }

    user.secretKeyVerified = true;

    await users.update(user);

    return res.json({
      success: true,
      verified: true
    });
  };
}
