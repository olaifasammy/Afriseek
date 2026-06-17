import { Response, NextFunction } from "express";
import { JwtService } from "../modules/auth/JwtService";
import { AuthenticatedRequest } from "../types/auth";

const jwtService = new JwtService();

export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  const token = header.replace("Bearer ", "");

  const payload = jwtService.verifyToken(token);

  if (!payload) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }

  req.user = {
    userId: payload.userId,
    role: payload.role as any
  };

  next();
}
