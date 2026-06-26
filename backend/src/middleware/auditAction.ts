import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types/auth";
import { getDependencies } from "../config/dependencies";
import { randomUUID } from "crypto";

/**
 * Middleware to log administrative actions to the AuditStoreRepository.
 */
export function auditAction(action: string, entityType?: string) {
  return async (
    req: AuthenticatedRequest,
    _res: Response,
    next: NextFunction
  ) => {
    const actorId = req.user?.userId;
    const { id } = req.params;
    const entityId = Array.isArray(id) ? id[0] : id;

    if (actorId) {
      const { auditStoreRepository } = getDependencies();
      await auditStoreRepository.create({
        id: randomUUID(),
        actorId,
        action,
        entityType: entityType ?? 'unknown',
        entityId: entityId ?? 'unknown',
        timestamp: new Date().toISOString(),
        metadata: {
          path: req.path,
          method: req.method,
          body: typeof req.body === 'string' ? req.body : JSON.stringify(req.body),
        }
      });
    }

    next();
  };
}
