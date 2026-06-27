export interface Session {
  id: string;
  userId: string;
  deviceId: string;
  ipAddress: string;
  lastActiveAt: string;
  createdAt: string;
  revokedAt?: string;
}
