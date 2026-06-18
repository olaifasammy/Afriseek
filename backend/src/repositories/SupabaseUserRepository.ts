import { getDatabase } from "../config/supabase";
import { UserRepository } from "./UserRepository";
import { User } from "../types/user";
import { UserRole } from "../types/role";

export class SupabaseUserRepository implements UserRepository {
  private getClient() {
    console.log("SUPABASE_URL_RUNTIME", process.env.SUPABASE_URL);
    return getDatabase();
  }

  async findAll(): Promise<User[]> {
    const { data, error } = await (((this.getClient() as any)) as any)
      .from("users")
      .select("*");

    if (error || !data) return [];
    return data.map(this.mapRowToUser);
  }

  async findById(id: string): Promise<User | null> {
    const { data, error } = await (((this.getClient() as any)) as any)
      .from("users")
      .select("*")
      .eq("id", id)
      .limit(1);

    console.log("EMAIL_RESULT_DATA", data);
    console.log("EMAIL_RESULT_ERROR", error);

    if (error || !data) {
      console.log("SUPABASE_FIND_EMAIL_ERROR", error);
      console.log("SUPABASE_FIND_EMAIL_DATA", data);
      return null;
    }
    return this.mapRowToUser(data);
  }

  async findByEmail(email: string): Promise<User | null> {
    const { data, error } = await (((this.getClient() as any)) as any)
      .from("users")
      .select("*")
      .eq("email", email)
      .limit(1);

    console.log("EMAIL_RESULT_DATA", data);
    console.log("EMAIL_RESULT_ERROR", error);

    if (error || !data) {
      console.log("SUPABASE_FIND_EMAIL_ERROR", error);
      console.log("SUPABASE_FIND_EMAIL_DATA", data);
      return null;
    }
    return this.mapRowToUser(data);
  }

  async create(user: User): Promise<void> {
    const { error } = await ((this.getClient() as any))
      .from("users")
      .insert({
        id: user.id,
        username: user.username,
        email: user.email,
        password_hash: user.passwordHash,
        role: user.role,
        active: user.active,
        created_at: user.metadata?.createdAt || new Date().toISOString(),
        updated_at: user.metadata?.updatedAt || new Date().toISOString()
      });

    if (error) throw error;
  }

  async update(user: User): Promise<void> {
    const { error } = await ((this.getClient() as any))
      .from("users")
      .update({
        username: user.username,
        email: user.email,
        password_hash: user.passwordHash,
        role: user.role,
        active: user.active,
        updated_at: new Date().toISOString()
      })
      .eq("id", user.id);

    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await ((this.getClient() as any))
      .from("users")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }

  /**
   * Maps database snake_case storage fields back to strict camelCase Domain Types
   */
  private mapRowToUser(row: any): User {
    return {
      id: row.id,
      username: row.username,
      email: row.email,
      passwordHash: row.password_hash,
      role: row.role as UserRole,
      active: row.active,
      metadata: {
        createdAt: row.created_at,
        updatedAt: row.updated_at
      }
    };
  }
}
