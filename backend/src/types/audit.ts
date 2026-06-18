export interface AuditLog {
  id: string;

  actorId: string;

  action: string;

  entityType: string;

  entityId: string;

  timestamp: string;

  metadata?: Record<string, unknown>;
}
