import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { ontologyRegistry } from "./OntologyRegistry";

export class InheritanceResolver {

  resolve(
    definition: OntologyDefinition
  ): OntologyDefinition {

    if (!definition.parentType) {
      return definition;
    }

    const parent =
      ontologyRegistry.get(
        definition.parentType
      );

    if (!parent) {
      throw new Error(
        `Parent ontology '${definition.parentType}' not found for '${definition.entityType}'.`
      );
    }

    const resolvedParent =
      this.resolve(parent);

    return {
      ...resolvedParent,
      ...definition,

      metadata: [
        ...(resolvedParent.metadata ?? []),
        ...(definition.metadata ?? [])
      ],

      relationships: [
        ...(resolvedParent.relationships ?? []),
        ...(definition.relationships ?? [])
      ],

      sections: [
        ...(resolvedParent.sections ?? []),
        ...(definition.sections ?? [])
      ]
    };
  }
}
