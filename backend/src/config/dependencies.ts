import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { createUserRepository } from "../bootstrap/createUserRepository";
import { createArticleService } from "../bootstrap/createArticleService";
import { createRelationshipTypeRepository } from "../bootstrap/createRelationshipTypeRepository";
import { createValidationRuleRepository } from "../bootstrap/createValidationRuleRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";
import { createEntityTypeRepository } from "../bootstrap/createEntityTypeRepository";
import { AuditStoreRepository } from "../repositories/AuditStoreRepository";

import { PasswordService } from "../modules/auth/PasswordService";
import { MfaService } from "../modules/auth/MfaService";
import { EmailService } from "../services/EmailService";
import { RoleService } from "../services/RoleService";
import { ArticleService } from "../services/ArticleService";
import { RelationshipService } from "../services/RelationshipService";
import { RelationshipRepository } from "../core/repositories/RelationshipRepository";
import { InMemoryRelationshipRepository } from "../infrastructure/repositories/in-memory/InMemoryRelationshipRepository";
import { VersioningService } from "../services/VersioningService";
import { VersionRepository } from "../core/repositories/VersionRepository";
import { InMemoryVersionRepository } from "../infrastructure/repositories/in-memory/InMemoryVersionRepository";
import { AuditService } from "../services/AuditService";
import { PolicyEngineService } from "../services/PolicyEngineService";

import { EntityRepository } from "../core/repositories/EntityRepository";
import { UserRepository } from "../core/repositories/UserRepository";
import { RoleRepository } from "../core/repositories/RoleRepository";
import { EntityTypeRepository } from "../core/repositories/EntityTypeRepository";
import { RelationshipTypeRepository } from "../core/repositories/RelationshipTypeRepository";
import { ValidationRuleRepository } from "../core/repositories/ValidationRuleRepository";
import { OntologyDefinitionRepository } from "../core/repositories/OntologyDefinitionRepository";
import { SupabaseRoleRepository } from "../infrastructure/repositories/supabase/SupabaseRoleRepository";

export interface AppDependencies {
  entityRepository: EntityRepository;
  userRepository: UserRepository;
  roleRepository: RoleRepository;
  entityTypeRepository: EntityTypeRepository;
  relationshipTypeRepository: RelationshipTypeRepository;
  validationRuleRepository: ValidationRuleRepository;
  ontologyDefinitionRepository: OntologyDefinitionRepository;
  auditStoreRepository: AuditStoreRepository;
  passwordService: PasswordService;
  mfaService: MfaService;
  emailService: EmailService;
  roleService: RoleService;
  articleService: ArticleService;
  relationshipService: RelationshipService;
  relationshipRepository: RelationshipRepository;
  versioningService: VersioningService;
  versionRepository: VersionRepository;
  policyEngineService: PolicyEngineService;
}

let container: AppDependencies | null = null;

export function initializeDependencies(): AppDependencies {
  if (container) {
    return container;
  }

  const entityRepository = createEntityRepository();
  const userRepository = createUserRepository();
  const roleRepository = new SupabaseRoleRepository();
  const relationshipTypeRepository = createRelationshipTypeRepository();
  const validationRuleRepository = createValidationRuleRepository();
import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

// ... (inside initializeDependencies)
  const ontologyDefinitionRepository = createOntologyDefinitionRepository();
  ontologyRegistry.setRepository(ontologyDefinitionRepository);
  // Do NOT await initialize() here as dependencies are often initialized synchronously
  ontologyRegistry.initialize(); 

  // ...
  const entityTypeRepository = createEntityTypeRepository();
  const auditStoreRepository = new AuditStoreRepository();
  const passwordService = new PasswordService();
  const mfaService = new MfaService(new EmailService(userRepository), new AuditService(auditStoreRepository));
  const emailService = new EmailService(userRepository);
  const roleService = new RoleService(roleRepository);
  const articleService = createArticleService();
  const relationshipRepository = new InMemoryRelationshipRepository();
  const relationshipService = new RelationshipService(relationshipRepository, entityRepository);
  const versionRepository = new InMemoryVersionRepository();
  const versioningService = new VersioningService(versionRepository);
  const auditService = new AuditService(auditStoreRepository);
  const policyEngineService = new PolicyEngineService(auditService);

  container = {
    entityRepository,
    userRepository,
    roleRepository,
    entityTypeRepository,
    relationshipTypeRepository,
    validationRuleRepository,
    ontologyDefinitionRepository,
    auditStoreRepository,
    passwordService,
    mfaService,
    emailService,
    roleService,
    articleService,
    relationshipService,
    relationshipRepository,
    versioningService,
    versionRepository,
    policyEngineService
  };

  Object.freeze(container);
  return container!;
}

export function getDependencies(): AppDependencies {
  if (!container) {
    throw new Error(
      "AppDependencies container accessed before lifecycle initialization. Ensure initializeDependencies() is triggered in index.ts."
    );
  }

  return container;
}
