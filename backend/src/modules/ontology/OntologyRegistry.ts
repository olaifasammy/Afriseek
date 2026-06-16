import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyInheritanceResolver } from "./inheritance/OntologyInheritanceResolver";

export class OntologyRegistry {

  private readonly definitions =
    new Map<string, OntologyDefinition>();

  register(
    definition: OntologyDefinition
  ): void {
    this.definitions.set(
      definition.entityType,
      definition
    );
  }

  get(
    entityType: string
  ): OntologyDefinition | undefined {

    if (
      !this.definitions.has(
        entityType
      )
    ) {
      return undefined;
    }

    return new OntologyInheritanceResolver(
      this.definitions
    ).resolve(
      entityType
    );
  }

  has(
    entityType: string
  ): boolean {
    return this.definitions.has(
      entityType
    );
  }

  getAll(): OntologyDefinition[] {

    const resolver =
      new OntologyInheritanceResolver(
        this.definitions
      );

    return [
      ...this.definitions.keys()
    ].map(
      entityType =>
        resolver.resolve(
          entityType
        )
    );
  }

  getByDomain(
    domain: string
  ): OntologyDefinition[] {
    return this.getAll().filter(
      ontology =>
        ontology.domain === domain
    );
  }
}

export const ontologyRegistry =
  new OntologyRegistry();
