import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { createUserRepository } from "../bootstrap/createUserRepository";
import { createRelationshipTypeRepository } from "../bootstrap/createRelationshipTypeRepository";
import { createValidationRuleRepository } from "../bootstrap/createValidationRuleRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";
import { createEntityTypeRepository } from "../bootstrap/createEntityTypeRepository";
import { AuditStoreRepository } from "../repositories/AuditStoreRepository";
import { getDatabase } from "./supabase";

import { PasswordService } from "../modules/auth/PasswordService";
import { EmailService } from "../services/EmailService";

import { EntityRepository } from "../core/repositories/EntityRepository";
import { UserRepository } from "../core/repositories/UserRepository";

import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { ValidationRuleRepository } from "../repositories/ontology/ValidationRuleRepository";
import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { EntityTypeRepository } from "../repositories/ontology/EntityTypeRepository";

export interface AppDependencies {
  entityRepository: EntityRepository;
  userRepository: UserRepository;
  relationshipTypeRepository: RelationshipTypeRepository;
  validationRuleRepository: ValidationRuleRepository;
  ontologyDefinitionRepository: OntologyDefinitionRepository;
  auditStoreRepository: AuditStoreRepository;
  passwordService: PasswordService;
  emailService: EmailService;
}

// ... rest of the file (initialization logic needs update)
// I will just update the interface for now to see if it fixes, then I will update the initialization logic in the next step.


let container:
  AppDependencies | null = null;

export function initializeDependencies():
  AppDependencies {

  if (container) {
    return container;
  }

  const db = getDatabase();

  const entityRepository =
    createEntityRepository();

  const userRepository =
    createUserRepository();

  const relationshipTypeRepository =
    createRelationshipTypeRepository();

  const validationRuleRepository =
    createValidationRuleRepository();

  const ontologyDefinitionRepository =
    createOntologyDefinitionRepository();

  const entityTypeRepository = createEntityTypeRepository();

  const auditStoreRepository = new AuditStoreRepository();

  const passwordService =
    new PasswordService();

  const emailService =
    new EmailService(userRepository);

  container = {
    entityRepository,
    userRepository,
    relationshipTypeRepository,
    validationRuleRepository,
    ontologyDefinitionRepository,
    auditStoreRepository,
    passwordService,
    emailService
  };

  Object.freeze(container);

  return container!;
}

export function getDependencies():
  AppDependencies {

  if (!container) {
    throw new Error(
      "AppDependencies container accessed before lifecycle initialization. Ensure initializeDependencies() is triggered in index.ts."
    );
  }

  return container;
}
