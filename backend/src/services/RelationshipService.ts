import { Relationship } from "../types/relationship";
import { RelationshipRepository } from "../core/repositories/RelationshipRepository";
import { RelationshipInstanceValidator } from "../modules/entity/RelationshipInstanceValidator";
import { EntityRepository } from "../core/repositories/EntityRepository";

export class RelationshipService {
  private validator: RelationshipInstanceValidator;

  constructor(
    private repository: RelationshipRepository,
    entityRepository: EntityRepository
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
    return this.repository.delete(
      entityId,
      targetId
    );
  }
}
