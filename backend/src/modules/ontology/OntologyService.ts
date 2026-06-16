import { ontologyRegistry } from "./OntologyRegistry";
import { loadOntologyDefinitions } from "../../ontology/registry/loadOntologyDefinitions";

export class OntologyService {
  private loaded = false;

  async load(): Promise<void> {
    if (this.loaded) {
      return;
    }

    const definitions =
      loadOntologyDefinitions();

    for (const definition of definitions) {
      ontologyRegistry.register(
        definition
      );
    }

    this.loaded = true;
  }

  get(
    entityType: string
  ) {
    return ontologyRegistry.get(
      entityType
    );
  }

  getAll() {
    return ontologyRegistry.getAll();
  }
}

export const ontologyService =
  new OntologyService();
