import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

let adminClient: ReturnType<typeof createClient> | null = null;

export function getAdminDatabase() {
  if (adminClient) return adminClient;

  adminClient = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  return adminClient;
}
