import { MetadataDefinitionRecord } from "../types/studio/MetadataDefinitionRecord";
import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class MetadataDefinitionService {

  getAll() {

    return ontologyRegistry
      .getAll()
      .map(
        ontology => ({
          entityType: ontology.entityType,
          metadata: ontology.metadata ?? []
        })
      );
  }

  getByEntityType(
    entityType: string
  ) {

    const ontology =
      ontologyRegistry.get(
        entityType
      );

    if (!ontology) {
      return null;
    }

    return {
      entityType: ontology.entityType,
      metadata: ontology.metadata ?? []
    };
  }

  async create(
    _record: MetadataDefinitionRecord
  ): Promise<void> {

    throw new Error(
      "Metadata definition persistence not wired yet"
    );
  }

  async update(
    _record: MetadataDefinitionRecord
  ): Promise<void> {

    throw new Error(
      "Metadata definition persistence not wired yet"
    );
  }

  async delete(
    _id: string
  ): Promise<void> {

    throw new Error(
      "Metadata definition persistence not wired yet"
    );
  }
}