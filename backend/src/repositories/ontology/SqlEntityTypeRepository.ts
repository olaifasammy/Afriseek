import { EntityTypeRepository } from "./EntityTypeRepository";
import { EntityTypeRecord } from "../../types/studio/EntityTypeRecord";

export class SqlEntityTypeRepository implements EntityTypeRepository {
  private db: any;

  constructor(dbClient: any) {
    this.db = dbClient;
  }

  async getAll(): Promise<EntityTypeRecord[]> {
    const { data, error } = await (this.db.from("entity_types") as any).select("*");
    if (error) throw error;
    return data || [];
  }

  async getByKey(key: string): Promise<EntityTypeRecord | null> {
    const { data, error } = await (this.db.from("entity_types") as any)
      .select("*")
      .eq("name", key) // Assuming name is the key
      .single();
    if (error) return null;
    return data;
  }

  async create(record: EntityTypeRecord): Promise<void> {
    const { error } = await (this.db.from("entity_types") as any).insert({
      id: record.id,
      name: record.key,
      // parent_id: record.parentType, -- need to map parentType string to UUID if applicable, but for now map as string
    });
    if (error) throw error;
  }

  async update(record: EntityTypeRecord): Promise<void> {
    const { error } = await (this.db.from("entity_types") as any)
      .update({
        name: record.key,
      })
      .eq("id", record.id);
    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await (this.db.from("entity_types") as any).delete().eq("id", id);
    if (error) throw error;
  }
}
