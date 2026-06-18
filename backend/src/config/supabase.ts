import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

let client: ReturnType<typeof createClient> | null = null;

export function getDatabase() {

  if (client) {
    return client;
  }

  const url =
    process.env.SUPABASE_URL;

  const key =
    process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Database configuration missing"
    );
  }

  client =
    createClient(
      url,
      key
    );

  return client;
}
