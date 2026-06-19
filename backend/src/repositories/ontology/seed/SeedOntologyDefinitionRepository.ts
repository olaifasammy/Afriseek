import { OntologyDefinitionRepository } from "../OntologyDefinitionRepository";
import { OntologyDefinitionRecord } from "../../../types/studio/OntologyDefinitionRecord";

export class SeedOntologyDefinitionRepository
  implements OntologyDefinitionRepository {

  private readonly records =
    new Map<string, OntologyDefinitionRecord>();

  async getAll():
    Promise<OntologyDefinitionRecord[]> {

    return [
      ...this.records.values()
    ];
  }

  async getByEntityType(
    entityType: string
  ):
    Promise<OntologyDefinitionRecord | null> {

    return (
      this.records.get(
        entityType
      ) ?? null
    );
  }

  async create(
    record: OntologyDefinitionRecord
  ):
    Promise<void> {

    this.records.set(
      record.entityType,
      record
    );
  }

  async update(
    record: OntologyDefinitionRecord
  ):
    Promise<void> {

    this.records.set(
      record.entityType,
      record
    );
  }

  async delete(
    id: string
  ):
    Promise<void> {

    for (
      const [key, value]
      of this.records.entries()
    ) {

      if (
        value.id === id
      ) {

        this.records.delete(
          key
        );

        return;
      }
    }
  }
}
