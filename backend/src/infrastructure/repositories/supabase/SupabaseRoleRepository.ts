import { getDatabase } from "../../../config/supabase";
import { RoleRepository } from "../../../core/repositories/RoleRepository";
import { UserRole } from "../../../types/role";

export class SupabaseRoleRepository implements RoleRepository {
  private getClient() {
    return getDatabase();
  }

  async findAll(): Promise<UserRole[]> {
    const { data, error } = await (this.getClient() as any)
      .from("users")
      .select("role");

    if (error || !data) return [];
    
    // Return unique roles
    const roles = Array.from(new Set(data.map((row: any) => row.role))) as UserRole[];
    return roles;
  }

  async assignRole(userId: string, role: UserRole): Promise<void> {
    const { error } = await (this.getClient() as any)
      .from("users")
      .update({ role })
      .eq("id", userId);

    if (error) throw error;
  }

  async revokeRole(userId: string, role: UserRole): Promise<void> {
    // Assuming 'user' is the default role if revoked
    const { error } = await (this.getClient() as any)
      .from("users")
      .update({ role: 'user' })
      .eq("id", userId)
      .eq("role", role);

    if (error) throw error;
  }
}
