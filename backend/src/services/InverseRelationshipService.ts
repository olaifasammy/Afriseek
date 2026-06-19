import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class InverseRelationshipService {

  async getAll() {

    return ontologyRegistry
      .getAll()
      .map(
        ontology => ({
          entityType:
            ontology.entityType,

          inverseRelationships:
            (ontology.relationships ?? [])
              .filter(
                relationship =>
                  relationship.inverseType
              )
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

      inverseRelationships:
        (ontology.relationships ?? [])
          .filter(
            relationship =>
              relationship.inverseType
          )
    };
  }
}
