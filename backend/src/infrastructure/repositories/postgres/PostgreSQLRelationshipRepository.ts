import { query } from "../../../config/database";
import { Relationship } from "../../../types/relationship";
import { RelationshipRepository } from "../../../core/repositories/RelationshipRepository";

export class PostgreSQLRelationshipRepository implements RelationshipRepository {
  async getByEntity(entityId: string): Promise<Relationship[]> {
    const { rows } = await query(
      "SELECT relationship_type, target_id, strength, weight, description FROM entity_relationships WHERE source_id = $1",
      [entityId]
    );

    return rows.map((r: any) => ({
      type: r.relationship_type,
      targetId: r.target_id,
      strength: r.strength,
      weight: Number(r.weight),
      description: r.description
    }));
  }

  async getByEntityAndType(entityId: string, type: string): Promise<Relationship[]> {
    const { rows } = await query(
      "SELECT relationship_type, target_id, strength, weight, description FROM entity_relationships WHERE source_id = $1 AND relationship_type = $2",
      [entityId, type]
    );

    return rows.map((r: any) => ({
      type: r.relationship_type,
      targetId: r.target_id,
      strength: r.strength,
      weight: Number(r.weight),
      description: r.description
    }));
  }

  async getBySourceAndTarget(sourceId: string, targetId: string): Promise<Relationship | null> {
    const { rows: [data] } = await query(
      "SELECT relationship_type, target_id, strength, weight, description FROM entity_relationships WHERE source_id = $1 AND target_id = $2",
      [sourceId, targetId]
    );

    if (!data) return null;
    return {
      type: data.relationship_type,
      targetId: data.target_id,
      strength: data.strength,
      weight: Number(data.weight),
      description: data.description
    };
  }

  async create(entityId: string, relationship: Relationship): Promise<void> {
    await query(`
      INSERT INTO entity_relationships (source_id, target_id, relationship_type, strength, weight, description)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [entityId, relationship.targetId, relationship.type, relationship.strength, relationship.weight || 1, relationship.description]);
  }

  async update(entityId: string, targetId: string, relationship: Relationship): Promise<void> {
    await query(`
      UPDATE entity_relationships 
      SET relationship_type = $1, strength = $2, weight = $3, description = $4
      WHERE source_id = $5 AND target_id = $6
    `, [relationship.type, relationship.strength, relationship.weight || 1, relationship.description, entityId, targetId]);
  }

  async delete(entityId: string, targetId: string): Promise<void> {
    await query("DELETE FROM entity_relationships WHERE source_id = $1 AND target_id = $2", [entityId, targetId]);
  }
}
