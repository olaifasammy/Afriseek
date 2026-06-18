import { EntityTypeRepository } from "../EntityTypeRepository";
import { EntityTypeRecord } from "../../../types/studio/EntityTypeRecord";
import { seedEntityTypes } from "../../../bootstrap/ontology/seedEntityTypes";

export class SeedEntityTypeRepository
  implements EntityTypeRepository {

  private readonly records =
    new Map<string, EntityTypeRecord>();

  constructor() {

    for (
      const record
      of seedEntityTypes()
    ) {

      this.records.set(
        record.key,
        record
      );
    }
  }

  async getAll(): Promise<EntityTypeRecord[]> {

    return [
      ...this.records.values()
    ];
  }

  async getByKey(
    key: string
  ): Promise<EntityTypeRecord | null> {

    return (
      this.records.get(key)
      ?? null
    );
  }

  async create(
    record: EntityTypeRecord
  ): Promise<void> {

    this.records.set(
      record.key,
      record
    );
  }

  async update(
    record: EntityTypeRecord
  ): Promise<void> {

    this.records.set(
      record.key,
      record
    );
  }

  async delete(
    id: string
  ): Promise<void> {

    for (
      const [key, value]
      of this.records.entries()
    ) {

      if (value.id === id) {

        this.records.delete(key);
        return;
      }
    }
  }
}
