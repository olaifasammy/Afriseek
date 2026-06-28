import { query } from "../../../config/database";
import { RoleRepository } from "../../../core/repositories/RoleRepository";
import { UserRole } from "../../../types/role";

export class PostgreSQLRoleRepository implements RoleRepository {

  async findAll(): Promise<UserRole[]> {
    const { rows } = await query("SELECT DISTINCT role FROM users");
    return rows.map((row: any) => row.role as UserRole);
  }

  async assignRole(userId: string, role: UserRole): Promise<void> {
    await query("UPDATE users SET role = $1 WHERE id = $2", [role, userId]);
  }

  async revokeRole(userId: string, role: UserRole): Promise<void> {
    await query("UPDATE users SET role = 'user' WHERE id = $1 AND role = $2", [userId, role]);
  }
}
