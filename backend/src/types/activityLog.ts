export interface ActivityLog {

  id: string;

  userId: string;

  action: string;

  targetType: string;

  targetId: string;

  details?: Record<string, unknown>;

  createdAt: string;
}
