import { SessionRepository } from "../core/repositories/SessionRepository";
import { Session } from "../types/session";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class SessionManagementService {
  constructor(
    private sessionRepository: SessionRepository,
    private auditService: AuditService
  ) {}

  async createSession(userId: string, deviceId: string, ipAddress: string): Promise<Session> {
    const session: Session = {
      id: `ses_${Date.now()}`,
      userId,
      deviceId,
      ipAddress,
      lastActiveAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    await this.sessionRepository.create(session);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId: userId,
      entityType: 'SESSION',
      entityId: session.id,
      action: 'SESSION_CREATED',
      timestamp: new Date().toISOString(),
      metadata: { deviceId, ipAddress }
    });
    logger.info({ sessionId: session.id, userId }, "Session created");
    return session;
  }

  async revokeSession(actorId: string, sessionId: string) {
    const session = await this.sessionRepository.findById(sessionId);
    if (!session) throw new Error("Session not found");

    session.revokedAt = new Date().toISOString();
    await this.sessionRepository.update(session);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'SESSION',
      entityId: session.id,
      action: 'SESSION_REVOKED',
      timestamp: new Date().toISOString()
    });
    logger.info({ sessionId }, "Session revoked");
  }

  async validateSession(sessionId: string): Promise<boolean> {
    const session = await this.sessionRepository.findById(sessionId);
    return !!session && !session.revokedAt;
  }
}
