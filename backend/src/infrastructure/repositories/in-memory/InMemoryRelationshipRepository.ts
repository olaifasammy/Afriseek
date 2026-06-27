import { Relationship } from "../types/relationship";
import { RelationshipRepository } from "../core/repositories/RelationshipRepository";

export class InMemoryRelationshipRepository implements RelationshipRepository {
  private relationships: Map<string, Relationship[]> = new Map();

  async getBySourceAndTarget(sourceId: string, targetId: string): Promise<Relationship | null> {
    const rels = this.relationships.get(sourceId) || [];
    return rels.find(r => r.targetId === targetId) || null;
  }

  async getByEntityAndType(entityId: string, type: string): Promise<Relationship[]> {
    const rels = this.relationships.get(entityId) || [];
    return rels.filter(r => r.type === type);
  }

  async create(entityId: string, relationship: Relationship): Promise<void> {
    const rels = this.relationships.get(entityId) || [];
    this.relationships.set(entityId, [...rels, relationship]);
  }

  async delete(entityId: string, targetId: string): Promise<void> {
    const rels = this.relationships.get(entityId) || [];
    this.relationships.set(entityId, rels.filter(r => r.targetId !== targetId));
  }
}
