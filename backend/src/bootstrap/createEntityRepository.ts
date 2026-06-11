import { EntityRepository }
from "../repositories/EntityRepository";

import { SeedEntityRepository }
from "../repositories/SeedEntityRepository";

import { SupabaseEntityRepository }
from "../repositories/SupabaseEntityRepository";

export function
createEntityRepository():
EntityRepository {

  if (
    process.env.USE_SUPABASE ===
    "true"
  ) {

    return new SupabaseEntityRepository();
  }

  return new SeedEntityRepository();
}
