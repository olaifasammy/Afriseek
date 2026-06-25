import { EntityTypeRepository } from "../repositories/ontology/EntityTypeRepository";
import { SqlEntityTypeRepository } from "../repositories/ontology/SqlEntityTypeRepository";
import { getDatabase } from "../config/supabase";

export function createEntityTypeRepository():
  EntityTypeRepository {

  return new SqlEntityTypeRepository(getDatabase());
}
