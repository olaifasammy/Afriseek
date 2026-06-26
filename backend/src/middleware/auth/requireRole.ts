import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../types/role";

export function requireRole(
  ...roles: UserRole[]
) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const user = (req as any).user;

    if (!user) {
      res.status(401).json({
        success: false
      });
      return;
    }

    if (!roles.includes(user.role)) {
      res.status(403).json({
        success: false,
        message: "Forbidden"
      });
      return;
    }

    next();
  };
}
