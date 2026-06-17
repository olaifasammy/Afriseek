export enum Permission {
  ENTITY_CREATE = "entity.create",
  ENTITY_UPDATE = "entity.update",
  ENTITY_DELETE = "entity.delete",

  ONTOLOGY_CREATE = "ontology.create",
  ONTOLOGY_UPDATE = "ontology.update",
  ONTOLOGY_DELETE = "ontology.delete",

  RELATIONSHIP_CREATE = "relationship.create",
  RELATIONSHIP_UPDATE = "relationship.update",
  RELATIONSHIP_DELETE = "relationship.delete",

  ARTICLE_CREATE = "article.create",
  ARTICLE_UPDATE = "article.update",
  ARTICLE_DELETE = "article.delete",
  ARTICLE_PUBLISH = "article.publish",

  PAGE_CREATE = "page.create",
  PAGE_UPDATE = "page.update",
  PAGE_DELETE = "page.delete",
  PAGE_PUBLISH = "page.publish",

  USER_CREATE = "user.create",
  USER_UPDATE = "user.update",
  USER_DELETE = "user.delete",

  ROLE_MANAGE = "role.manage",

  AI_GENERATE = "ai.generate",
  AI_REVIEW = "ai.review",
  AI_PUBLISH = "ai.publish",

  CRAWLER_MANAGE = "crawler.manage",
  SOURCE_MANAGE = "source.manage",
  IMPORT_APPROVE = "import.approve",

  AUDIT_VIEW = "audit.view",

  SYSTEM_MANAGE = "system.manage"
}
