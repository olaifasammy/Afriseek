import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { createUserRepository } from "../bootstrap/createUserRepository";
import { createArticleService } from "../bootstrap/createArticleService";
import { createRelationshipTypeRepository } from "../bootstrap/createRelationshipTypeRepository";
import { createValidationRuleRepository } from "../bootstrap/createValidationRuleRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";
import { createEntityTypeRepository } from "../bootstrap/createEntityTypeRepository";
import { AuditStoreRepository } from "../repositories/AuditStoreRepository";
import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

import { PasswordService } from "../modules/auth/PasswordService";
import { MfaService } from "../modules/auth/MfaService";
import { EmailService } from "../services/EmailService";
import { RoleService } from "../services/RoleService";
import { ArticleService } from "../services/ArticleService";
import { RelationshipService } from "../services/RelationshipService";
import { RelationshipRepository } from "../core/repositories/RelationshipRepository";
import { PostgreSQLRelationshipRepository } from "../infrastructure/repositories/postgres/PostgreSQLRelationshipRepository";
import { PostgreSQLVersionRepository } from "../infrastructure/repositories/postgres/PostgreSQLVersionRepository";
import { VersionRepository } from "../core/repositories/VersionRepository";
import { VersioningService } from "../services/VersioningService";
import { AuditService } from "../services/AuditService";
import { PolicyEngineService } from "../services/PolicyEngineService";
import { PostgreSQLRevokedTokenRepository } from "../infrastructure/repositories/postgres/PostgreSQLRevokedTokenRepository";
import { RevokedTokenRepository } from "../core/auth/RevokedTokenRepository";

import { EntityRepository } from "../core/repositories/EntityRepository";
import { UserRepository } from "../core/repositories/UserRepository";
import { RoleRepository } from "../core/repositories/RoleRepository";
import { EntityTypeRepository } from "../repositories/ontology/EntityTypeRepository";
import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { ValidationRuleRepository } from "../repositories/ontology/ValidationRuleRepository";
import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { PostgreSQLRoleRepository } from "../infrastructure/repositories/postgres/PostgreSQLRoleRepository";

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
  revokedTokenRepository: RevokedTokenRepository;
}

let container: AppDependencies | null = null;

export async function initializeDependencies(): Promise<AppDependencies> {
  if (container) {
    return container;
  }

  const entityRepository = createEntityRepository();
  const userRepository = createUserRepository();
  const roleRepository = new PostgreSQLRoleRepository();
  const relationshipTypeRepository = createRelationshipTypeRepository();
  const validationRuleRepository = createValidationRuleRepository();
  const ontologyDefinitionRepository = createOntologyDefinitionRepository();
  ontologyRegistry.setRepository(ontologyDefinitionRepository);
  await ontologyRegistry.initialize(); 

  const entityTypeRepository = createEntityTypeRepository();

  const auditStoreRepository = new AuditStoreRepository();
  const passwordService = new PasswordService();
  const mfaService = new MfaService(new EmailService(userRepository), new AuditService(auditStoreRepository));
  const emailService = new EmailService(userRepository);
  const roleService = new RoleService(roleRepository);
  const articleService = createArticleService();
  const relationshipRepository = new PostgreSQLRelationshipRepository();
  const relationshipService = new RelationshipService(relationshipRepository, entityRepository);
  const versionRepository = new PostgreSQLVersionRepository();
  const versioningService = new VersioningService(versionRepository);
  const auditService = new AuditService(auditStoreRepository);
  const policyEngineService = new PolicyEngineService(auditService);
  const revokedTokenRepository = new PostgreSQLRevokedTokenRepository();

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
    policyEngineService,
    revokedTokenRepository
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
