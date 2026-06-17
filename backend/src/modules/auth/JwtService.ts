import jwt from "jsonwebtoken";
import { AUTH_CONFIG } from "../../config/auth";

export interface JwtPayload {
  userId: string;
  role: string;
}

export class JwtService {
  generateToken(
    payload: JwtPayload
  ): string {
    return jwt.sign(
      payload,
      AUTH_CONFIG.jwtSecret,
      {
        expiresIn:
          AUTH_CONFIG.accessTokenExpiresIn
      }
    );
  }

  verifyToken(
    token: string
  ): JwtPayload | null {
    try {
      return jwt.verify(
        token,
        AUTH_CONFIG.jwtSecret
      ) as JwtPayload;
    } catch {
      return null;
    }
  }
}
