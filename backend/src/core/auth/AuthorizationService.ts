import { Permission } from "../../types/permission";
import { UserRole } from "../../types/role";
import { ROLE_PERMISSIONS } from "./PermissionRegistry";

export class AuthorizationService {
  hasPermission(
    role: UserRole,
    permission: Permission
  ): boolean {
    return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
  }
}
