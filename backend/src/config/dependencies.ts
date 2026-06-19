import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { createUserRepository } from "../bootstrap/createUserRepository";
import { createRelationshipTypeRepository } from "../bootstrap/createRelationshipTypeRepository";
import { createValidationRuleRepository } from "../bootstrap/createValidationRuleRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";

import { PasswordService } from "../modules/auth/PasswordService";

import { EntityRepository } from "../repositories/EntityRepository";
import { UserRepository } from "../repositories/UserRepository";

import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { ValidationRuleRepository } from "../repositories/ontology/ValidationRuleRepository";
import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";

export interface AppDependencies {
  entityRepository: EntityRepository;

  userRepository: UserRepository;

  relationshipTypeRepository:
    RelationshipTypeRepository;

  validationRuleRepository:
    ValidationRuleRepository;

  ontologyDefinitionRepository:
    OntologyDefinitionRepository;

  passwordService: PasswordService;
}

let container:
  AppDependencies | null = null;

export function initializeDependencies():
  AppDependencies {

  if (container) {
    return container;
  }

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

  const passwordService =
    new PasswordService();

  container = {
    entityRepository,
    userRepository,
    relationshipTypeRepository,
    validationRuleRepository,
    ontologyDefinitionRepository,
    passwordService
  };

  Object.freeze(container);

  return container;
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
