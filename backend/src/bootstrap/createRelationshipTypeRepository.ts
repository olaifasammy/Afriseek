import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { SeedRelationshipTypeRepository } from "../repositories/ontology/seed/SeedRelationshipTypeRepository";

export function createRelationshipTypeRepository():
  RelationshipTypeRepository {

  return new SeedRelationshipTypeRepository();
}
