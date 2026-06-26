import { RoleRepository } from "../core/repositories/RoleRepository";
import { UserRole } from "../types/role";

export class RoleService {
  constructor(private roleRepository: RoleRepository) {}

  async getAllRoles() {
    return this.roleRepository.findAll();
  }

  async assignRole(userId: string, role: UserRole) {
    return this.roleRepository.assignRole(userId, role);
  }

  async revokeRole(userId: string, role: UserRole) {
    return this.roleRepository.revokeRole(userId, role);
  }
}
