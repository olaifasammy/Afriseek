import { MetadataDefinitionRecord } from "../../types/studio/MetadataDefinitionRecord";

export interface MetadataDefinitionRepository {

  getAll():
    Promise<MetadataDefinitionRecord[]>;

  getByEntityType(
    entityType: string
  ): Promise<MetadataDefinitionRecord[]>;

  create(
    record: MetadataDefinitionRecord
  ): Promise<void>;

  update(
    record: MetadataDefinitionRecord
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
