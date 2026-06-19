import { validationRegistry } from "../modules/ontology/ValidationRegistry";

export class OntologyTestingService {

  async run() {

    const issues: string[] = [];

    try {
      validationRegistry.validate();
    } catch (error) {
      issues.push(
        error instanceof Error
          ? error.message
          : String(error)
      );
    }

    return {
      passed: issues.length === 0,
      testsRun: 1,
      issues
    };
  }
}
