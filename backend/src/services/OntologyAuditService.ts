import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";
import { metadataValidator } from "../modules/ontology/MetadataValidator";
import { relationshipValidator } from "../modules/ontology/RelationshipValidator";

export class OntologyAuditService {

  async runAudit() {

    const issues: string[] = [];

    try {
      metadataValidator.validate();
    } catch (error) {
      issues.push(
        error instanceof Error
          ? error.message
          : String(error)
      );
    }

    try {
      relationshipValidator.validate();
    } catch (error) {
      issues.push(
        error instanceof Error
          ? error.message
          : String(error)
      );
    }

    return {
      ontologyCount:
        ontologyRegistry.getAll().length,
      passed:
        issues.length === 0,
      issues
    };
  }
}
