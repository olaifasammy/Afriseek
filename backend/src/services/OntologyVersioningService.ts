import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class OntologyVersioningService {

  async getAll() {

    return ontologyRegistry
      .getAll()
      .map(
        ontology => ({
          entityType:
            ontology.entityType,

          version: 1,

          parentType:
            ontology.parentType ?? null,

          updatedAt:
            null
        })
      );
  }

  async getByEntityType(
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
      entityType:
        ontology.entityType,

      version: 1,

      parentType:
        ontology.parentType ?? null,

      updatedAt:
        null
    };
  }
}
