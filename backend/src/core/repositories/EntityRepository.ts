import { AfriseekEntity } from "../../types/entity";

export interface EntityRepository {

  findById(
    id: string
  ): Promise<AfriseekEntity | null>;

  findBySlug(
    slug: string
  ): Promise<AfriseekEntity | null>;

  findAll(): Promise<AfriseekEntity[]>;

  create(
    entity: AfriseekEntity
  ): Promise<void>;

  update(
    entity: AfriseekEntity
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
