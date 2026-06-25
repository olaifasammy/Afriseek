export { UserRole } from "./role";
import { UserRole } from "./role";

export interface User {

  id: string;

  username: string;

  email: string;

  passwordHash: string;

  role: UserRole;



  active: boolean;

  isEmailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationSentAt?: string;

  metadata: {

    createdAt: string;

    updatedAt: string;
  };
}
