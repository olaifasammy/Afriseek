import { OntologyDefinitionRepository } from "./OntologyDefinitionRepository";
import { OntologyDefinitionRecord } from "../../types/studio/OntologyDefinitionRecord";
import { getDatabase } from "../../config/supabase";

export class SqlOntologyDefinitionRepository implements OntologyDefinitionRepository {
  private db: any;

  constructor(dbClient: any) {
    this.db = dbClient;
  }

  async getAll(): Promise<OntologyDefinitionRecord[]> {
    const { data, error } = await (this.db.from("ontologies") as any).select("*");
    if (error) throw error;
    
    // Map DB rows to OntologyDefinitionRecord
    return (data || []).map((row: any) => ({
      id: row.id,
      entityType: row.slug, // Mapping slug to entityType for compatibility
      label: row.name,
      domain: 'general', // Defaulting as domain wasn't in original schema
      active: row.active,
      version: row.version,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }));
  }

  async getByEntityType(entityType: string): Promise<OntologyDefinitionRecord | null> {
    const { data, error } = await (this.db.from("ontologies") as any)
      .select("*")
      .eq("slug", entityType)
      .single();
      
    if (error) return null;
    return data;
  }

  async create(record: OntologyDefinitionRecord): Promise<void> {
    const { error } = await (this.db.from("ontologies") as any).insert({
      id: record.id,
      slug: record.entityType,
      name: record.label,
      active: record.active,
      version: record.version,
    });
    if (error) throw error;
  }

  async update(record: OntologyDefinitionRecord): Promise<void> {
    const { error } = await (this.db.from("ontologies") as any)
      .update({
        slug: record.entityType,
        name: record.label,
        active: record.active,
        version: record.version,
        updated_at: new Date().toISOString()
      })
      .eq("id", record.id);
      
    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await (this.db.from("ontologies") as any)
      .delete()
      .eq("id", id);
      
    if (error) throw error;
  }
}
