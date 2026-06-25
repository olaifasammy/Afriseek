import { Request } from "express";
import { UserRole } from "./role";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    role: UserRole;
    permissions?: string[];
  };
}
