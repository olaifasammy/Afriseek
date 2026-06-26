import { Request, Response, NextFunction } from "express";

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const user = (req as any).user;

  if (!user) {
    res.status(401).json({
      success: false,
      message: "Authentication required"
    });
    return;
  }

  next();
}
