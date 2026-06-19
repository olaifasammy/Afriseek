import { ValidationRuleRepository } from "../repositories/ontology/ValidationRuleRepository";
import { SeedValidationRuleRepository } from "../repositories/ontology/seed/SeedValidationRuleRepository";

export function createValidationRuleRepository():
  ValidationRuleRepository {

  return new SeedValidationRuleRepository();
}
