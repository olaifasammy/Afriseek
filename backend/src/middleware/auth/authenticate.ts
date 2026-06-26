import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../modules/auth/JwtService";

const jwtService = new JwtService();

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader =
    req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      success: false,
      message: "Missing authorization header"
    });
    return;
  }

  const token =
    authHeader.replace(
      "Bearer ",
      ""
    );

  const payload =
    jwtService.verifyToken(token);

  if (!payload) {
    res.status(401).json({
      success: false,
      message: "Invalid token"
    });
    return;
  }

  (req as any).user = payload;

  next();
}
