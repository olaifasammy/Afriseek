import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../modules/auth/JwtService";

const jwtService = new JwtService();

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader =
    req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Missing authorization header"
    });
  }

  const token =
    authHeader.replace(
      "Bearer ",
      ""
    );

  const payload =
    jwtService.verifyToken(token);

  if (!payload) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }

  (req as any).user = payload;

  next();
}
