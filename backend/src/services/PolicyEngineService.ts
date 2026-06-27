import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class PolicyEngineService {
  constructor(private auditService: AuditService) {}

  async isAuthorized(user: any, action: string, resource: any): Promise<boolean> {
    // 1. Super Admin bypass
    if (user.role === 'SUPER_ADMIN') return true;

    // 2. Ownership Check
    const isOwner = resource.ownerId === user.id || resource.metadata?.createdBy === user.id;
    
    // 3. Workflow Check (Example restriction: cannot modify if VERIFIED/PUBLISHED, unless Super Admin)
    const isRestricted = resource.status === 'VERIFIED' || resource.status === 'PUBLISHED' || resource.metadata?.verified === true;
    
    if (isRestricted && !['read'].includes(action)) {
        logger.warn({ userId: user.id, action, resourceId: resource.id }, "Action restricted by workflow state");
        return false;
    }

    // 4. Role-based check (Simplified)
    // In production, map roles/permissions fully from PermissionSpec.md
    const allowed = this.evaluateRolePolicy(user.role, action, isOwner);

    await this.auditService.log({
        id: `audit_${Date.now()}`,
        actorId: user.id,
        entityType: 'POLICY',
        entityId: resource.id,
        action: 'POLICY_CHECK',
        timestamp: new Date().toISOString(),
        metadata: { action, allowed }
    });

    return allowed;
  }

  private evaluateRolePolicy(role: string, action: string, isOwner: boolean): boolean {
    if (role === 'ADMIN') return true;
    if (role === 'EDITOR' && ['create', 'read', 'update'].includes(action)) return true;
    if (role === 'CONTRIBUTOR' && isOwner && ['create', 'read', 'update'].includes(action)) return true;
    return false;
  }
}
