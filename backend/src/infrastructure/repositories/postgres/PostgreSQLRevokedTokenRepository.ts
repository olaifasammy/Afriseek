import { query } from "../../../config/database";
import { RevokedTokenRepository } from "../../../core/auth/RevokedTokenRepository";

export class PostgreSQLRevokedTokenRepository implements RevokedTokenRepository {
  async revoke(token: string, expiresAt: Date): Promise<void> {
    await query("INSERT INTO revoked_tokens (token, expires_at) VALUES ($1, $2)", [token, expiresAt]);
  }

  async isRevoked(token: string): Promise<boolean> {
    const { rows } = await query("SELECT 1 FROM revoked_tokens WHERE token = $1 AND expires_at > NOW()", [token]);
    return rows.length > 0;
  }
}
