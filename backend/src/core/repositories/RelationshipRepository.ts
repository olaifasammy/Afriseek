import { Relationship } from "../../types/relationship";

export interface RelationshipRepository {
  getByEntity(entityId: string): Promise<Relationship[]>;
  getBySourceAndTarget(sourceId: string, targetId: string): Promise<Relationship | null>;
  create(entityId: string, relationship: Relationship): Promise<void>;
  delete(entityId: string, targetId: string): Promise<void>;
}
