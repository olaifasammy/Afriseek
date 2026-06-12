export { UserRole } from "./role";
import { UserRole } from "./role";

export interface User {

  id: string;

  username: string;

  email: string;

  passwordHash: string;

  role: UserRole;

  secretKeyHash?: string;

  secretKeyVerified: boolean;

  active: boolean;

  metadata: {

    createdAt: string;

    updatedAt: string;
  };
}
