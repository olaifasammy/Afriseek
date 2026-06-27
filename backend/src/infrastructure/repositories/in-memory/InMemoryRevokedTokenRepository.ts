import { RevokedTokenRepository } from "../../../core/auth/RevokedTokenRepository";

export class InMemoryRevokedTokenRepository implements RevokedTokenRepository {
  private revokedTokens = new Map<string, Date>();

  async revoke(token: string, expiresAt: Date): Promise<void> {
    this.revokedTokens.set(token, expiresAt);
  }

  async isRevoked(token: string): Promise<boolean> {
    const expiresAt = this.revokedTokens.get(token);
    if (!expiresAt) {
      return false;
    }
    if (expiresAt < new Date()) {
      this.revokedTokens.delete(token);
      return false;
    }
    return true;
  }
}
