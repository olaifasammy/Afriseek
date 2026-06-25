import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { SqlOntologyDefinitionRepository } from "../repositories/ontology/SqlOntologyDefinitionRepository";
import { getDatabase } from "../config/supabase";

export function createOntologyDefinitionRepository():
  OntologyDefinitionRepository {

  return new SqlOntologyDefinitionRepository(getDatabase());
}
