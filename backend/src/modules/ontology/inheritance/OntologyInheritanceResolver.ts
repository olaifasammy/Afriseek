import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";

export class OntologyInheritanceResolver {

  constructor(
    private readonly definitions:
      Map<string, OntologyDefinition>
  ) {}

  resolve(
    entityType: string
  ): OntologyDefinition {

    const definition =
      this.definitions.get(
        entityType
      );

    if (!definition) {
      throw new Error(
        `Ontology not found: ${entityType}`
      );
    }

    if (!definition.parentType) {
      return definition;
    }

    const parent =
      this.resolve(
        definition.parentType
      );

    return {
      ...parent,
      ...definition,

      metadata:
        this.mergeMetadata(
          parent.metadata ?? [],
          definition.metadata ?? []
        ),

      relationships:
        this.mergeRelationships(
          parent.relationships ?? [],
          definition.relationships ?? []
        ),

      sections:
        this.mergeSections(
          parent.sections ?? [],
          definition.sections ?? []
        )
    };
  }

  private mergeMetadata(
    parent: any[],
    child: any[]
  ) {
    const map = new Map();

    for (const item of parent) {
      map.set(item.key, item);
    }

    for (const item of child) {
      map.set(item.key, item);
    }

    return [...map.values()];
  }

  private mergeRelationships(
    parent: any[],
    child: any[]
  ) {
    const map = new Map();

    for (const item of parent) {
      map.set(
        `${item.type}:${JSON.stringify(item.targetTypes ?? [])}`,
        item
      );
    }

    for (const item of child) {
      map.set(
        `${item.type}:${JSON.stringify(item.targetTypes ?? [])}`,
        item
      );
    }

    return [...map.values()];
  }

  private mergeSections(
    parent: any[],
    child: any[]
  ) {
    const map = new Map();

    for (const item of parent) {
      map.set(item.key, item);
    }

    for (const item of child) {
      map.set(item.key, item);
    }

    return [...map.values()]
      .sort(
        (a, b) =>
          a.order - b.order
      );
  }
}
