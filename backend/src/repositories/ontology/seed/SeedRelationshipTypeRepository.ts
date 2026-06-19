import { RelationshipTypeRepository } from "../RelationshipTypeRepository";
import { RelationshipTypeRecord } from "../../../types/studio/RelationshipTypeRecord";

export class SeedRelationshipTypeRepository
  implements RelationshipTypeRepository {

  private readonly records =
    new Map<string, RelationshipTypeRecord>();

  async getAll():
    Promise<RelationshipTypeRecord[]> {

    return [
      ...this.records.values()
    ];
  }

  async getByType(
    type: string
  ): Promise<RelationshipTypeRecord | null> {

    return (
      this.records.get(type)
      ?? null
    );
  }

  async create(
    record: RelationshipTypeRecord
  ): Promise<void> {

    this.records.set(
      record.type,
      record
    );
  }

  async update(
    record: RelationshipTypeRecord
  ): Promise<void> {

    this.records.set(
      record.type,
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
