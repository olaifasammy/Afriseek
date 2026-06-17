import { Permission } from "../../types/permission";
import { UserRole } from "../../types/role";

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.HEAD_ADMIN]: Object.values(Permission),

  [UserRole.ADMIN]: [
    Permission.ENTITY_CREATE,
    Permission.ENTITY_UPDATE,
    Permission.ONTOLOGY_CREATE,
    Permission.ONTOLOGY_UPDATE,
    Permission.RELATIONSHIP_CREATE,
    Permission.RELATIONSHIP_UPDATE,
    Permission.ARTICLE_CREATE,
    Permission.ARTICLE_UPDATE,
    Permission.ARTICLE_PUBLISH,
    Permission.PAGE_CREATE,
    Permission.PAGE_UPDATE,
    Permission.PAGE_PUBLISH,
    Permission.USER_CREATE,
    Permission.USER_UPDATE,
    Permission.AUDIT_VIEW
  ],

  [UserRole.EDITOR]: [
    Permission.ARTICLE_CREATE,
    Permission.ARTICLE_UPDATE,
    Permission.ARTICLE_PUBLISH,
    Permission.PAGE_CREATE,
    Permission.PAGE_UPDATE,
    Permission.PAGE_PUBLISH
  ],

  [UserRole.RESEARCHER]: [
    Permission.ENTITY_CREATE,
    Permission.ENTITY_UPDATE,
    Permission.RELATIONSHIP_CREATE,
    Permission.RELATIONSHIP_UPDATE,
    Permission.AI_GENERATE,
    Permission.AI_REVIEW
  ],

  [UserRole.MODERATOR]: [
    Permission.USER_UPDATE,
    Permission.AUDIT_VIEW
  ],

  [UserRole.CONTRIBUTOR]: [
    Permission.ARTICLE_CREATE,
    Permission.PAGE_CREATE
  ],

  [UserRole.USER]: []
};
