import { query } from "../../../config/database";
import { UserRepository } from "../../../core/repositories/UserRepository";
import { User } from "../../../types/user";
import { UserRole } from "../../../types/role";

export class PostgreSQLUserRepository implements UserRepository {

  async findAll(): Promise<User[]> {
    const { rows } = await query("SELECT * FROM users");
    return rows.map((row: any) => this.mapRowToUser(row));
  }

  async findById(id: string): Promise<User | null> {
    const { rows: [row] } = await query("SELECT * FROM users WHERE id = $1", [id]);
    if (!row) return null;
    return this.mapRowToUser(row);
  }

  async findByEmail(email: string): Promise<User | null> {
    const { rows: [row] } = await query("SELECT * FROM users WHERE email = $1", [email]);
    if (!row) return null;
    return this.mapRowToUser(row);
  }

  async findByVerificationToken(token: string): Promise<User | null> {
    const { rows: [row] } = await query("SELECT * FROM users WHERE email_verification_token = $1", [token]);
    if (!row) return null;
    return this.mapRowToUser(row);
  }

  async create(user: User): Promise<void> {
    await query(`
      INSERT INTO users (id, username, email, password_hash, role, active, is_email_verified, email_verification_token, email_verification_sent_at, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `, [
      user.id, user.username, user.email, user.passwordHash, user.role, user.active,
      user.isEmailVerified, user.emailVerificationToken, user.emailVerificationSentAt,
      user.metadata?.createdAt || new Date().toISOString(), user.metadata?.updatedAt || new Date().toISOString()
    ]);
  }

  async update(user: User): Promise<void> {
    await query(`
      UPDATE users SET 
        username = $1, email = $2, password_hash = $3, role = $4, active = $5, 
        is_email_verified = $6, email_verification_token = $7, email_verification_sent_at = $8, updated_at = NOW()
      WHERE id = $9
    `, [
      user.username, user.email, user.passwordHash, user.role, user.active,
      user.isEmailVerified, user.emailVerificationToken, user.emailVerificationSentAt, user.id
    ]);
  }

  async delete(id: string): Promise<void> {
    await query("DELETE FROM users WHERE id = $1", [id]);
  }

  private mapRowToUser(row: any): User {
    return {
      id: row.id,
      username: row.username,
      email: row.email,
      passwordHash: row.password_hash,
      role: row.role as UserRole,
      active: row.active,
      isEmailVerified: row.is_email_verified,
      emailVerificationToken: row.email_verification_token,
      emailVerificationSentAt: row.email_verification_sent_at,
      metadata: {
        createdAt: row.created_at,
        updatedAt: row.updated_at
      }
    };
  }
}
