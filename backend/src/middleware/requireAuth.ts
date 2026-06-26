import { Response, NextFunction } from "express";
import { JwtService } from "../modules/auth/JwtService";
import { AuthenticatedRequest } from "../types/auth";

const jwtService = new JwtService();

export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Authentication required"
    });
    return;
  }

  const token = header.replace("Bearer ", "");

  const payload = jwtService.verifyToken(token);

  if (!payload) {
    res.status(401).json({
      success: false,
      message: "Invalid token"
    });
    return;
  }

  req.user = {
    userId: payload.userId,
    role: payload.role as any
  };

  next();
}
