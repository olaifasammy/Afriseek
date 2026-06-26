import { RelationshipTypeRepository } from "./RelationshipTypeRepository";
import { RelationshipTypeRecord } from "../../types/studio/RelationshipTypeRecord";

export class SqlRelationshipTypeRepository implements RelationshipTypeRepository {
  private db: any;

  constructor(dbClient: any) {
    this.db = dbClient;
  }

  async getAll(): Promise<RelationshipTypeRecord[]> {
    const { data, error } = await (this.db.from("relationship_definitions") as any).select("*");
    if (error) throw error;
    return data || [];
  }

  async getByType(type: string): Promise<RelationshipTypeRecord | null> {
    const { data, error } = await (this.db.from("relationship_definitions") as any)
      .select("*")
      .eq("relationship_name", type)
      .single();
    if (error) return null;
    return data;
  }

  async create(record: RelationshipTypeRecord): Promise<void> {
    const { error } = await (this.db.from("relationship_definitions") as any).insert({
      id: record.id,
      relationship_name: record.type,
      // mapping other fields...
    });
    if (error) throw error;
  }

  async update(record: RelationshipTypeRecord): Promise<void> {
    const { error } = await (this.db.from("relationship_definitions") as any)
      .update({
        relationship_name: record.type,
      })
      .eq("id", record.id);
    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await (this.db.from("relationship_definitions") as any).delete().eq("id", id);
    if (error) throw error;
  }
}
