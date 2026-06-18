import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

let adminClient: ReturnType<typeof createClient> | null = null;

export function getAdminDatabase() {
  if (adminClient) return adminClient;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL");
  }

  adminClient = createClient(url, key);

  return adminClient;
}
