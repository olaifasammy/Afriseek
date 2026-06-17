import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../types/role";

export function requireRole(
  ...roles: UserRole[]
) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({
        success: false
      });
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden"
      });
    }

    next();
  };
}
