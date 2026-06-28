import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { SqlOntologyDefinitionRepository } from "../repositories/ontology/SqlOntologyDefinitionRepository";
import { PostgreSQLOntologyDefinitionRepository } from "../infrastructure/repositories/postgres/PostgreSQLOntologyDefinitionRepository";
import { getDatabase } from "../config/supabase";
import { env } from "../config/env";

export function createOntologyDefinitionRepository():
  OntologyDefinitionRepository {

  if (env.USE_SUPABASE === 'true') {
    return new SqlOntologyDefinitionRepository(getDatabase());
  }

  return new PostgreSQLOntologyDefinitionRepository();
}
