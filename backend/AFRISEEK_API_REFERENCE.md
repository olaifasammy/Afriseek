# AFRISEEK API REFERENCE - COMPLETE INVENTORY

This document provides a single source of truth for the Afriseek backend API. It is divided into two sections: 
1. **Administrative Engine**: The security-hardened, audited core.
2. **Comprehensive Inventory**: All 103 registered API endpoints.

---

## 1. Administrative Engine (Hardened Core)
These routes are protected by fine-grained permissions and integrated with activity auditing.

| Domain | Method | Endpoint | Permission | Audit Action |
| :--- | :--- | :--- | :--- | :--- |
| **Governance** | GET | `/admin/roles` | `admin:roles:view` | `admin:roles:view` |
| | POST | `/admin/users/:userId/roles` | `admin:roles:assign` | `assign_role` |
| | DELETE| `/admin/users/:userId/roles/:role`| `admin:roles:revoke` | `revoke_role` |
| | GET | `/admin/users/:userId/activity` | `admin:audit:view` | `admin:audit:view` |
| **Content** | POST | `/admin/entities` | `admin:entity:create` | `create_entity` |
| | GET | `/admin/entities/:id` | `admin:entity:view` | N/A |
| | PUT | `/admin/entities/:id` | `admin:entity:update` | `update_entity` |
| | DELETE| `/admin/entities/:id` | `admin:entity:delete` | `delete_entity` |
| | POST | `/admin/entities/:entityId/articles`| `admin:article:create` | `create_article` |
| | GET | `/admin/entities/:entityId/articles`| `admin:article:view` | N/A |
| | PUT | `/admin/articles/:id` | `admin:article:update` | `update_article` |
| | PATCH | `/admin/articles/:id/approve` | `admin:article:approve` | `approve_article` |
| | DELETE| `/admin/articles/:id` | `admin:article:delete` | `delete_article` |
| **Structure** | POST | `/admin/graphs` | `admin:graph:create` | `create_graph` |
| | PUT | `/admin/graphs/:id` | `admin:graph:update` | `update_graph` |
| | DELETE| `/admin/graphs/:id` | `admin:graph:delete` | `delete_graph` |
| | POST | `/admin/relationships` | `admin:relationship:create`| `create_relationship`|
| | DELETE| `/admin/relationships/:id` | `admin:relationship:delete`| `delete_relationship`|
| **Engine** | POST | `/studio/ontology-definitions/` | `admin:ontology:create` | `create_ontology` |
| | PATCH | `/studio/ontology-definitions/:id/approve` | `admin:ontology:approve`| `approve_ontology` |
| | PATCH | `/studio/ontology-definitions/:id/status` | `admin:ontology:update` | `update_ontology_status` |
| **Audit** | GET | `/audit/` | `admin:audit:view` | N/A |

---

## 2. Comprehensive Endpoint Inventory (103 Routes)

| Module File | Method | Route |
| :--- | :--- | :--- |
| `adminRoleRoutes.ts` | GET | `/roles` |
| | POST | `/users/:userId/roles` |
| | DELETE | `/users/:userId/roles/:role` |
| | GET | `/users/:userId/activity` |
| `audit/studioEntityAuditRoutes.ts` | GET | `/:entityId` (x3) |
| `auditRoutes.ts` | GET | `/` |
| `contextRoutes.ts` | GET | `/:slug` |
| | GET | `/traversal` |
| `dashboardRoutes.ts` | GET | `/` |
| `entity/studioEntityBulkOperationRoutes.ts`| POST | `/verify` |
| `entity/studioEntityDuplicateRoutes.ts` | GET | `/` |
| `entity/studioEntityIntegrityRoutes.ts` | GET | `/` |
| `entity/studioEntityQualityRoutes.ts` | GET | `/` |
| `entity/studioEntitySearchRoutes.ts` | GET | `/` |
| `entity/studioEntityTimelineRoutes.ts` | GET | `/:entityId` |
| `eventRoutes.ts` | GET | `/` |
| | GET | `/:slug` |
| | POST | `/` |
| `graphRoutes.ts` | GET | `/path` |
| | GET | `/recommend/:slug` |
| | GET | `/:slug` |
| `ontologyRoutes.ts` | GET | `/` |
| `relationshipRoutes.ts` | GET | `/:id` |
| `searchRoutes.ts` | GET | `/` |
| `settingsRoutes.ts` | GET | `/` |
| | PUT | `/` |
| `studioBrokenLinkRoutes.ts` | GET | `/` |
| `studioDuplicateNodeRoutes.ts` | GET | `/` |
| `studioEntityArticleLinkRoutes.ts` | GET | `/:entityId` |
| | POST | `/:entityId` |
| | DELETE | `/:entityId/:articleId` |
| `adminEntityArticleRoutes.ts` | POST | `/entities` |
| | GET | `/entities/:id` |
| | PUT | `/entities/:id` |
| | DELETE | `/entities/:id` |
| | POST | `/entities/:entityId/articles` |
| | GET | `/entities/:entityId/articles` |
| | PUT | `/articles/:id` |
| | PATCH | `/articles/:id/approve` |
| | DELETE | `/articles/:id` |
| `adminRelationshipRoutes.ts` | POST | `/relationships` |
| | DELETE | `/relationships/:id` |
| `adminGraphRoutes.ts` | POST | `/graphs` |
| | PUT | `/graphs/:id` |
| | DELETE | `/graphs/:id` |
| `studioEntitySplitRoutes.ts` | POST | `/` |
| `studioGraphExplorerRoutes.ts` | GET | `/` |
| | GET | `/node/:id` |
| | GET | `/neighbors/:id` |
| | GET | `/incoming/:id` |
| | GET | `/:id` |
| `studioGraphIntegrityRoutes.ts` | GET | `/` |
| `studioGraphMetricsRoutes.ts` | GET | `/` |
| `studioGraphPathRoutes.ts` | GET | `/` |
| `studioInverseRelationshipRoutes.ts` | GET | `/` |
| | GET | `/:entityType` |
| `studioInvitationRoutes.ts` | GET | `/` |
| | POST | `/` |
| `studioMetadataDefinitionRoutes.ts` | GET | `/:id` |
| | GET | `/` |
| | POST | `/` |
| | PUT | `/:id` |
| | DELETE | `/:id` |
| `studioOntologyAuditRoutes.ts` | GET | `/` |
| `studioOntologyDefinitionRoutes.ts` | GET | `/` |
| | POST | `/` |
| | POST | `/entity-types` |
| | POST | `/properties` |
| | POST | `/relationships` |
| | PATCH | `/:id/approve` |
| | PATCH | `/:id/status` |
| `studioOntologyTestingRoutes.ts` | GET | `/` |
| `studioOntologyVersioningRoutes.ts` | GET | `/` |
| | GET | `/:entityType` |
| `studioOrphanEntityRoutes.ts` | GET | `/` |
| `studioPermissionRoutes.ts` | GET | `/` |
| | POST | `/:id` |
| `studioRelationshipRoutes.ts` | GET | `/` |
| `studioRequiredFieldRoutes.ts` | GET | `/` |
| | GET | `/:entityType` |
| `studioRequiredRelationshipRoutes.ts` | GET | `/` |
| | GET | `/:entityType` |
| `studioRoleRoutes.ts` | GET | `/` |
| `studioUserRoutes.ts` | GET | `/` |
| | GET | `/:id` |
| | POST | `/` |
| | PATCH | `/:id` |
| | DELETE | `/:id` |
| | POST | `/:id/suspend` |
| | POST | `/:id/activate` |
| `studioValidationRuleRoutes.ts` | GET | `/` |
| | POST | `/` |
| | PUT | `/:id` |
| | DELETE | `/:id` |
| `timelineRoutes.ts` | GET | `/` |
| `userRoutes.ts` | GET | `/profile` |
| | GET | `/list` |
| | PATCH | `/update` |
| | PATCH | `/password` |
| | DELETE | `/delete` |
| `userRoutes.ts.bak` | GET | `/profile` |
