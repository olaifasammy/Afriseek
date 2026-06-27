import { Relationship } from "../types/relationship";
import { RelationshipRepository } from "../core/repositories/RelationshipRepository";
import { RelationshipInstanceValidator } from "../modules/entity/RelationshipInstanceValidator";
import { EntityRepository } from "../core/repositories/EntityRepository";
import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class RelationshipService {
  private validator: RelationshipInstanceValidator;

  constructor(
    private repository: RelationshipRepository,
    private entityRepository: EntityRepository
  ) {
    this.validator = new RelationshipInstanceValidator(entityRepository, repository);
  }

  async getByEntity(entityId: string) {
    return this.repository.getByEntity(entityId);
  }

  async create(
    entityId: string,
    relationship: Relationship
  ) {
    await this.validator.validate(entityId, relationship.targetId, relationship.type);
    return this.repository.create(
      entityId,
      relationship
    );
  }

  async delete(
    entityId: string,
    targetId: string
  ) {
    // 1. Get the relationship to be deleted to know its type
    const relationship = await this.repository.getBySourceAndTarget(entityId, targetId);
    
    // 2. Delete the direct relationship
    await this.repository.delete(entityId, targetId);

    // 3. Automated Inverse Deletion
    if (relationship) {
      const source = await this.entityRepository.findById(entityId);
      if (source) {
        const ontology = ontologyRegistry.get(source.entityType);
        const relDef = ontology?.relationships.find(r => r.type === relationship.type);
        if (relDef?.inverseType) {
            await this.repository.delete(targetId, entityId);
        }
      }
    }
  }
}
