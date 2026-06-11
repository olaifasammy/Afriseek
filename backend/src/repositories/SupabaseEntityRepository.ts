import { EntityRepository } from "./EntityRepository";
import { AfriseekEntity } from "../types/entity";
import { getSupabase } from "../config/supabase";

export class SupabaseEntityRepository
  implements EntityRepository {

  private supabase =
    getSupabase();

  async findById(
    id: string
  ): Promise<AfriseekEntity | null> {
    throw new Error(
      "Not implemented"
    );
  }

  async findBySlug(
    slug: string
  ): Promise<AfriseekEntity | null> {
    throw new Error(
      "Not implemented"
    );
  }

  async findAll(): Promise<AfriseekEntity[]> {
    throw new Error(
      "Not implemented"
    );
  }

  async create(
    entity: AfriseekEntity
  ): Promise<void> {
    throw new Error(
      "Not implemented"
    );
  }

  async update(
    entity: AfriseekEntity
  ): Promise<void> {
    throw new Error(
      "Not implemented"
    );
  }

  async delete(
    id: string
  ): Promise<void> {
    throw new Error(
      "Not implemented"
    );
  }
}
