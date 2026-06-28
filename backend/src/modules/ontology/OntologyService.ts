import { ontologyRegistry } from "./OntologyRegistry";

export class OntologyService {
  private loaded = false;

  async load(): Promise<void> {
    if (this.loaded) {
      return;
    }
    // Hardcoded definitions loading is disabled. 
    // OntologyRegistry is expected to be initialized from the database in dependencies.ts.
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
