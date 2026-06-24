import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  role: z.enum(["user", "admin", "head_admin"]),
});

export const UpdateUserSchema = z.object({
  role: z.enum(["user", "admin", "head_admin"]).optional(),
  active: z.boolean().optional(),
});
