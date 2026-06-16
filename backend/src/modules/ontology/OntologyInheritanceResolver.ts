import { ontologyRegistry } from "./OntologyRegistry";
import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";

export class OntologyInheritanceResolver {

  resolve(
    entityType: string
  ): OntologyDefinition {

    const ontology =
      ontologyRegistry.get(
        entityType
      );

    if (!ontology) {
      throw new Error(
        `Ontology not found: ${entityType}`
      );
    }

    if (!ontology.parentType) {
      return ontology;
    }

    const parent =
      this.resolve(
        ontology.parentType
      );

    return {
      ...parent,
      ...ontology,

      metadata:
        this.mergeMetadata(
          parent.metadata,
          ontology.metadata
        ),

      relationships:
        this.mergeRelationships(
          parent.relationships,
          ontology.relationships
        ),

      sections:
        this.mergeSections(
          parent.sections,
          ontology.sections
        )
    };
  }

  private mergeMetadata(
    parent: any[],
    child: any[]
  ) {

    const map =
      new Map<string, any>();

    for (
      const item
      of parent
    ) {
      map.set(
        item.key,
        item
      );
    }

    for (
      const item
      of child
    ) {
      map.set(
        item.key,
        item
      );
    }

    return [
      ...map.values()
    ];
  }

  private mergeRelationships(
    parent: any[],
    child: any[]
  ) {

    const map =
      new Map<string, any>();

    for (
      const item
      of parent
    ) {
      map.set(
        item.type,
        item
      );
    }

    for (
      const item
      of child
    ) {
      map.set(
        item.type,
        item
      );
    }

    return [
      ...map.values()
    ];
  }

  private mergeSections(
    parent: any[],
    child: any[]
  ) {

    const map =
      new Map<string, any>();

    for (
      const item
      of parent
    ) {
      map.set(
        item.key,
        item
      );
    }

    for (
      const item
      of child
    ) {
      map.set(
        item.key,
        item
      );
    }

    return [
      ...map.values()
    ].sort(
      (a, b) =>
        a.order - b.order
    );
  }
}

export const ontologyInheritanceResolver =
  new OntologyInheritanceResolver();
