import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { SeedOntologyDefinitionRepository } from "../repositories/ontology/seed/SeedOntologyDefinitionRepository";

export function createOntologyDefinitionRepository():
  OntologyDefinitionRepository {

  return new SeedOntologyDefinitionRepository();
}
