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
import { RoleService } from "../services/RoleService";

import { EntityRepository } from "../core/repositories/EntityRepository";
import { UserRepository } from "../core/repositories/UserRepository";
import { RoleRepository } from "../core/repositories/RoleRepository";
import { SupabaseRoleRepository } from "../infrastructure/repositories/supabase/SupabaseRoleRepository";

import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { ValidationRuleRepository } from "../repositories/ontology/ValidationRuleRepository";
import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { EntityTypeRepository } from "../repositories/ontology/EntityTypeRepository";

export interface AppDependencies {
  entityRepository: EntityRepository;
  userRepository: UserRepository;
  roleRepository: RoleRepository;
  relationshipTypeRepository: RelationshipTypeRepository;
  validationRuleRepository: ValidationRuleRepository;
  ontologyDefinitionRepository: OntologyDefinitionRepository;
  auditStoreRepository: AuditStoreRepository;
  passwordService: PasswordService;
  emailService: EmailService;
  roleService: RoleService;
}

// ...
let container: AppDependencies | null = null;

export function initializeDependencies(): AppDependencies {
  if (container) {
    return container;
  }
// ...

  const entityRepository = createEntityRepository();
  const userRepository = createUserRepository();
  const roleRepository = new SupabaseRoleRepository();
  const relationshipTypeRepository = createRelationshipTypeRepository();
  const validationRuleRepository = createValidationRuleRepository();
  const ontologyDefinitionRepository = createOntologyDefinitionRepository();
  const entityTypeRepository = createEntityTypeRepository();
  const auditStoreRepository = new AuditStoreRepository();
  const passwordService = new PasswordService();
  const emailService = new EmailService(userRepository);
  const roleService = new RoleService(roleRepository);

  container = {
    entityRepository,
    userRepository,
    roleRepository,
    relationshipTypeRepository,
    validationRuleRepository,
    ontologyDefinitionRepository,
    auditStoreRepository,
    passwordService,
    emailService,
    roleService
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
