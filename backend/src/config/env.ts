import { z } from "zod";

const EnvSchema = z.object({
  JWT_SECRET: z.string().min(32),

  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(10),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10),

  USE_SUPABASE: z.string().optional(),
  PORT: z.string().optional(),
  NODE_ENV: z.string().optional()
});

export const env = EnvSchema.parse(process.env);
