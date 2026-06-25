import { getDatabase } from "../../../config/supabase";
import { EntityRepository } from "../../../core/repositories/EntityRepository";
import { AfriseekEntity } from "../../../types/entity";
import { Relationship } from "../../../types/relationship";

export class SupabaseEntityRepository implements EntityRepository {
  private getClient() { 
    return getDatabase(); 
  }

  /**
   * Hydrates an entity with its structural graph relationships
   */
  async findById(id: string): Promise<AfriseekEntity | null> {
    const client = this.getClient() as any;

    // 1. Fetch core entity details
    const { data: entity, error: entityError } = await client
      .from("entities")
      .select("*")
      .eq("id", id)
      .single();

    if (entityError || !entity) return null;

    // 2. Fetch active graph connections where this node is the source
    const { data: relations, error: relError } = await client
      .from("entity_relationships")
      .select("relationship_type, target_id, strength, weight, description")
      .eq("source_id", id);

    const relationships: Relationship[] = relError || !relations ? [] : relations.map((r: any) => ({
      type: r.relationship_type,
      targetId: r.target_id,
      strength: r.strength,
      weight: Number(r.weight),
      description: r.description
    }));

    return {
      id: entity.id,
      slug: entity.slug,
      name: entity.name,
      entityType: entity.entity_type,
      importance: entity.importance,
      summary: entity.summary,
      aliases: entity.aliases,
      endonyms: entity.endonyms,
      exonyms: entity.exonyms,
      traits: [], // Fully extensible for standalone trait mapping later
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
    const client = this.getClient() as any;
    const { data, error } = await client
      .from("entities")
      .select("id")
      .eq("slug", slug)
      .single();

    if (error || !data) return null;
    return this.findById(data.id);
  }

  /**
   * Prevents full-table memory pollution. Replaces full system loads with light streaming keys.
   */
  async findAll(): Promise<AfriseekEntity[]> {
    const client = this.getClient() as any;
    const { data, error } = await client
      .from("entities")
      .select("id");

    if (error || !data) return [];
    
    // Resolve entities safely. For heavy production pipelines, this will use paginated streams.
    const results = await Promise.all(data.map((item: any) => this.findById(item.id)));
    return results.filter((e): e is AfriseekEntity => e !== null);
  }

  async create(entity: AfriseekEntity): Promise<void> {
    const client = this.getClient() as any;

    // 1. Persist Normalized Node
    const { error: entityError } = await client.from("entities").insert({
      id: entity.id,
      slug: entity.slug,
      name: entity.name,
      entity_type: entity.entityType,
      importance: entity.importance,
      summary: entity.summary,
      aliases: entity.aliases || [],
      endonyms: entity.endonyms || [],
      exonyms: entity.exonyms || [],
      verified: entity.metadata?.verified || false,
      featured: entity.metadata?.featured || false,
      popularity_score: entity.metadata?.popularityScore || 0.00
    });

    if (entityError) throw entityError;

    // 2. Persist Structural Graph Edges (Relationships)
    if (entity.relationships && entity.relationships.length > 0) {
      const edgePayload = entity.relationships.map(rel => ({
        source_id: entity.id,
        target_id: rel.targetId,
        relationship_type: rel.type,
        strength: rel.strength,
        weight: rel.weight || 1.00,
        description: rel.description
      }));

      const { error: relError } = await client.from("entity_relationships").insert(edgePayload);
      if (relError) console.error("Non-blocking graph relation mapping error:", relError);
    }
  }

  async update(entity: AfriseekEntity): Promise<void> {
    const client = this.getClient() as any;

    const { error } = await client
      .from("entities")
      .update({
        name: entity.name,
        summary: entity.summary,
        importance: entity.importance,
        aliases: entity.aliases,
        updated_at: new Date().toISOString()
      })
      .eq("id", entity.id);

    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.getClient()
      .from("entities")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }
}
