import { MetadataDefinitionRepository } from "../repositories/ontology/MetadataDefinitionRepository";
import { SeedMetadataDefinitionRepository } from "../repositories/ontology/seed/SeedMetadataDefinitionRepository";

export function createMetadataDefinitionRepository():
  MetadataDefinitionRepository {

  return new SeedMetadataDefinitionRepository();
}
