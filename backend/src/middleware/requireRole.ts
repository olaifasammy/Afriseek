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
  ) => {

    if (!req.user) {
      return res.status(401).json({
        success: false
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Insufficient permissions"
      });
    }

    next();
  };
}
