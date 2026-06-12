import { EntityRepository } from "./EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { getSupabase } from "../config/supabase";

export class SupabaseEntityRepository
  implements EntityRepository {

  private getClient() { return getSupabase(); }

  async findById(
    id: string
  ): Promise<AfriseekEntity | null> {

    const { data, error } =
      await this.getClient()
        .from("entities")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !data) {
      return null;
    }

    return data as AfriseekEntity;
  }

  async findBySlug(
    slug: string
  ): Promise<AfriseekEntity | null> {

    const { data, error } =
      await this.getClient()
        .from("entities")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !data) {
      return null;
    }

    return data as AfriseekEntity;
  }

  async findAll(): Promise<AfriseekEntity[]> {

    const { data, error } =
      await this.getClient()
        .from("entities")
        .select("*");

    if (error || !data) {
      return [];
    }

    return data as AfriseekEntity[];
  }

  async create(
    entity: AfriseekEntity
  ): Promise<void> {

    const { error } =
      await this.getClient()
        .from("entities")
        .insert(entity);

    if (error) {
      throw error;
    }
  }

  async update(
    entity: AfriseekEntity
  ): Promise<void> {

    const { error } =
      await this.getClient()
        .from("entities")
        .update(entity)
        .eq("id", entity.id);

    if (error) {
      throw error;
    }
  }

  async delete(
    id: string
  ): Promise<void> {

    const { error } =
      await this.getClient()
        .from("entities")
        .delete()
        .eq("id", id);

    if (error) {
      throw error;
    }
  }
}
