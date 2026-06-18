import { Relationship } from "../types/relationship";
import { RelationshipRepository } from "../repositories/RelationshipRepository";

export class RelationshipService {
  constructor(
    private repository: RelationshipRepository
  ) {}

  async getByEntity(entityId: string) {
    return this.repository.getByEntity(entityId);
  }

  async create(
    entityId: string,
    relationship: Relationship
  ) {
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
