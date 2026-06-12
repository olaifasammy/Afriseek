export interface AuditLog {

  id: string;

  actorId: string;

  action: string;

  targetType: string;

  targetId: string;

  timestamp: string;

  metadata?: Record<string, unknown>;
}
