export interface RevokedTokenRepository {
  revoke(token: string, expiresAt: Date): Promise<void>;
  isRevoked(token: string): Promise<boolean>;
}
