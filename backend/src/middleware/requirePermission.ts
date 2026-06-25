import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types/auth";
import { UserRole } from "../types/role";

/**
 * Middleware to require specific permissions for a route.
 * Bypasses checks for HEAD_ADMIN.
 */
export function requirePermission(permission: string) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    // HEAD_ADMIN is superuser and bypasses all checks
    if (req.user.role === UserRole.HEAD_ADMIN) {
      return next();
    }

    // Assuming user permissions are stored in req.user.permissions
    const hasPermission = req.user.permissions?.includes(permission);

    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        message: "Insufficient permissions"
      });
    }

    next();
  };
}
