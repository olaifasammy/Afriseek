import { UserRole } from "../../types/role";

export interface RoleRepository {
  findAll(): Promise<UserRole[]>;
  assignRole(userId: string, role: UserRole): Promise<void>;
  revokeRole(userId: string, role: UserRole): Promise<void>;
}
