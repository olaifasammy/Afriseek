import { EntityTypeRecord } from "../../types/studio/EntityTypeRecord";

export interface EntityTypeRepository {
  getAll(): Promise<EntityTypeRecord[]>;

  getByKey(
    key: string
  ): Promise<EntityTypeRecord | null>;

  create(
    record: EntityTypeRecord
  ): Promise<void>;

  update(
    record: EntityTypeRecord
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
