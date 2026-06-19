import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class MetadataDefinitionService {

  getAll() {

    return ontologyRegistry
      .getAll()
      .map(ontology => ({
        entityType: ontology.entityType,
        metadata: ontology.metadata || []
      }));
  }

  getByEntityType(
    entityType: string
  ) {

    const ontology =
      ontologyRegistry.get(entityType);

    if (!ontology) {
      return null;
    }

    return {
      entityType: ontology.entityType,
      metadata: ontology.metadata || []
    };
  }
}
