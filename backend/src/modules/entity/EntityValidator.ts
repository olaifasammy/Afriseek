import { AfriseekEntity } from "../../types/entity";
import { ontologyRegistry } from "../ontology/OntologyRegistry";

export class EntityValidator {
  validate(entity: AfriseekEntity): void {
    const ontology = ontologyRegistry.get(entity.entityType);
    if (!ontology) {
      throw new Error(`Ontology not found for entity type: ${entity.entityType}`);
    }

    // Validate required fields
    for (const field of ontology.requiredFields) {
      if (!(entity as any)[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
  }
}
