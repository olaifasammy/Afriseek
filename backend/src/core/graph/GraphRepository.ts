import { AfriseekEntity } from "../../types/entity";

export interface GraphRepository {

  getEntityById(
    id: string
  ): Promise<AfriseekEntity | null>;

  getEntityBySlug(
    slug: string
  ): Promise<AfriseekEntity | null>;

  getAllEntities(): Promise<AfriseekEntity[]>;

  saveEntity(
    entity: AfriseekEntity
  ): Promise<void>;

  deleteEntity(
    id: string
  ): Promise<void>;
}
