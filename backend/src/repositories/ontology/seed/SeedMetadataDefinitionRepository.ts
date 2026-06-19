import { MetadataDefinitionRepository } from "../MetadataDefinitionRepository";
import { MetadataDefinitionRecord } from "../../../types/studio/MetadataDefinitionRecord";

export class SeedMetadataDefinitionRepository
  implements MetadataDefinitionRepository {

  private readonly records =
    new Map<string, MetadataDefinitionRecord>();

  async getAll():
    Promise<MetadataDefinitionRecord[]> {

    return [
      ...this.records.values()
    ];
  }

  async getByEntityType(
    entityType: string
  ): Promise<MetadataDefinitionRecord[]> {

    return (
      await this.getAll()
    ).filter(
      item =>
        item.entityType ===
        entityType
    );
  }

  async create(
    record: MetadataDefinitionRecord
  ): Promise<void> {

    this.records.set(
      record.id,
      record
    );
  }

  async update(
    record: MetadataDefinitionRecord
  ): Promise<void> {

    this.records.set(
      record.id,
      record
    );
  }

  async delete(
    id: string
  ): Promise<void> {

    this.records.delete(id);
  }
}
