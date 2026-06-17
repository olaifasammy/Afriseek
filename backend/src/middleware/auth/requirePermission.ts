import { Request, Response, NextFunction } from "express";
import { Permission } from "../../types/permission";
import { AuthorizationService } from "../../core/auth/AuthorizationService";

const authz = new AuthorizationService();

export function requirePermission(
  permission: Permission
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

    const allowed = authz.hasPermission(
      user.role,
      permission
    );

    if (!allowed) {
      return res.status(403).json({
        success: false,
        message: "Permission denied"
      });
    }

    next();
  };
}
