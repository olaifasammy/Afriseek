import { RelationshipTypeRecord } from "../../types/studio/RelationshipTypeRecord";

export interface RelationshipTypeRepository {
  getAll(): Promise<RelationshipTypeRecord[]>;

  getByType(
    type: string
  ): Promise<RelationshipTypeRecord | null>;

  create(
    record: RelationshipTypeRecord
  ): Promise<void>;

  update(
    record: RelationshipTypeRecord
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
