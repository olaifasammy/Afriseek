import { z } from "zod";

const EnvSchema = z.object({
  JWT_SECRET: z.string().min(32)
});

export const env =
  EnvSchema.parse(process.env);
