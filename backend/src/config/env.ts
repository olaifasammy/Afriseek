import 'dotenv/config';
import { z } from "zod";

const EnvSchema = z.object({
  JWT_SECRET: z.string().min(32),
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(10),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10),
  USE_SUPABASE: z.string().optional(),
  PORT: z.string().default("3000"),
  NODE_ENV: z.string().default("development"),
  LOG_LEVEL: z.string().default("info"),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().default("587"),
  SMTP_SECURE: z.string().default("false"),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM: z.string().optional(),
  APP_URL: z.string().url().optional(),
});

export const env = EnvSchema.parse(process.env);
