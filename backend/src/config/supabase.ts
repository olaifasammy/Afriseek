import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

let client: ReturnType<typeof createClient> | null = null;

export function getDatabase() {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error("Supabase service configuration missing (URL or SERVICE_ROLE_KEY)");
  }

  client = createClient(url, serviceKey, {
    auth: {
      persistSession: false
    }
  });

  return client;
}
