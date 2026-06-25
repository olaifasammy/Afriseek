import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { SqlRelationshipTypeRepository } from "../repositories/ontology/SqlRelationshipTypeRepository";
import { getDatabase } from "../config/supabase";

export function createRelationshipTypeRepository():
  RelationshipTypeRepository {

  return new SqlRelationshipTypeRepository(getDatabase());
}
