import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyInheritanceResolver } from "./inheritance/OntologyInheritanceResolver";
import { OntologyDefinitionRepository } from "../../repositories/ontology/OntologyDefinitionRepository";

export class OntologyRegistry {

  private readonly definitions =
    new Map<string, OntologyDefinition>();
  private repository: OntologyDefinitionRepository | null = null;

  setRepository(repository: OntologyDefinitionRepository): void {
    this.repository = repository;
  }

  async initialize(): Promise<void> {
    if (!this.repository) throw new Error("Repository not set");
    const records = await this.repository.getAll();
    for (const record of records) {
        // Assuming record itself is the definition, or need to map it
        this.definitions.set(record.entityType, record as any);
    }
  }

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
