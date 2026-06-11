import { createClient }
from "@supabase/supabase-js";

import dotenv
from "dotenv";

dotenv.config();

export function
getSupabase() {

  const url =
    process.env.SUPABASE_URL;

  const key =
    process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {

    throw new Error(
      "Supabase configuration missing"
    );
  }

  return createClient(
    url,
    key
  );
}
