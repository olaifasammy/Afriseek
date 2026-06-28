import { query } from "../../../config/database";
import { EntityRepository } from "../../../core/repositories/EntityRepository";
import { AfriseekEntity } from "../../../types/entity";
import { Relationship } from "../../../types/relationship";

export class PostgreSQLEntityRepository implements EntityRepository {

  async findById(id: string): Promise<AfriseekEntity | null> {
    const { rows: [entity] } = await query(
      "SELECT * FROM entities WHERE id = $1",
      [id]
    );

    if (!entity) return null;

    const { rows: relations } = await query(
      "SELECT relationship_type, target_id, strength, weight, description FROM entity_relationships WHERE source_id = $1",
      [id]
    );

    const relationships: Relationship[] = relations.map((r: any) => ({
      type: r.relationship_type,
      targetId: r.target_id,
      strength: r.strength,
      weight: Number(r.weight),
      description: r.description
    }));

    return {
      id: entity.id,
      version: entity.version,
      slug: entity.slug,
      name: entity.name,
      entityType: entity.entity_type,
      importance: entity.importance,
      summary: entity.summary,
      aliases: entity.aliases,
      endonyms: entity.endonyms,
      exonyms: entity.exonyms,
      traits: [],
      facts: [],  
      relationships,
      sources: [],
      metadata: {
        createdAt: entity.created_at,
        updatedAt: entity.updated_at,
        verified: entity.verified,
        featured: entity.featured,
        popularityScore: Number(entity.popularity_score)
      }
    };
  }

  async findBySlug(slug: string): Promise<AfriseekEntity | null> {
    const { rows: [entity] } = await query(
        "SELECT id FROM entities WHERE slug = $1",
        [slug]
    );
    if (!entity) return null;
    return this.findById(entity.id);
  }

  async findAll(): Promise<AfriseekEntity[]> {
    const { rows } = await query("SELECT id FROM entities");
    const results = await Promise.all(rows.map((item: any) => this.findById(item.id)));
    return results.filter((e): e is AfriseekEntity => e !== null);
  }

  async create(entity: AfriseekEntity): Promise<void> {
    await query(`
      INSERT INTO entities (id, version, slug, name, entity_type, importance, summary, aliases, endonyms, exonyms, verified, featured, popularity_score)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    `, [
      entity.id, entity.version, entity.slug, entity.name, entity.entityType, entity.importance, 
      entity.summary, JSON.stringify(entity.aliases), JSON.stringify(entity.endonyms), JSON.stringify(entity.exonyms), 
      entity.metadata?.verified || false, entity.metadata?.featured || false, entity.metadata?.popularityScore || 0
    ]);

    if (entity.relationships && entity.relationships.length > 0) {
      for (const rel of entity.relationships) {
        await query(`
          INSERT INTO entity_relationships (source_id, target_id, relationship_type, strength, weight, description)
          VALUES ($1, $2, $3, $4, $5, $6)
        `, [entity.id, rel.targetId, rel.type, rel.strength, rel.weight || 1, rel.description]);
      }
    }
  }

  async update(entity: AfriseekEntity): Promise<void> {
    await query(`
      UPDATE entities 
      SET name = $1, summary = $2, importance = $3, aliases = $4, updated_at = NOW()
      WHERE id = $5
    `, [entity.name, entity.summary, entity.importance, JSON.stringify(entity.aliases), entity.id]);
  }

  async delete(id: string): Promise<void> {
    await query("UPDATE entities SET deleted_at = NOW() WHERE id = $1", [id]);
  }
}
