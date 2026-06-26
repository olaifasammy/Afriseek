import { Response, NextFunction } from "express";
import { UserRole } from "../types/role";
import { AuthenticatedRequest } from "../types/auth";

export function requireRole(
  ...roles: UserRole[]
) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {

    if (!req.user) {
      res.status(401).json({
        success: false
      });
      return;
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: "Insufficient permissions"
      });
      return;
    }

    next();
  };
}
