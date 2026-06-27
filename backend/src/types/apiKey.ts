export interface ApiKey {
  id: string;
  name: string;
  keyHash: string; // Hashed key
  ownerId: string;
  permissions: string[];
  expiresAt: string;
  revokedAt?: string;
  createdAt: string;
}
