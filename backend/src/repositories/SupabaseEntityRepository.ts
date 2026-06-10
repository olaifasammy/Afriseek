import { EntityRepository } from "./EntityRepository";
import { AfriseekEntity } from "../types/entity";

export class SupabaseEntityRepository
  implements EntityRepository {

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
