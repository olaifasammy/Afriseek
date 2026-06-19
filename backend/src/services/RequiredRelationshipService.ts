import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class RequiredRelationshipService {

  async getAll() {

    return ontologyRegistry
      .getAll()
      .map(
        ontology => ({
          entityType:
            ontology.entityType,

          requiredRelationships:
            (ontology.relationships ?? [])
              .filter(
                relationship =>
                  relationship.required === true
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

      requiredRelationships:
        (ontology.relationships ?? [])
          .filter(
            relationship =>
              relationship.required === true
          )
    };
  }
}
