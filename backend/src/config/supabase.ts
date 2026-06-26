import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

let client: ReturnType<typeof createClient> | null = null;

export function getDatabase() {
  if (client) return client;

  client = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false
    }
  });

  return client;
}
