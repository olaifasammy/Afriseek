# AFRISEEK API REFERENCE

Generated: Sat Jun 20 21:23:29 EET 2026

## Registered API Route Groups

- `/api/entities`
- `/api/graph`
- `/api/relationships`
- `/api/users`
- `/api/auth`
- `/api/audit`
- `/api/dashboard`
- `/api/timeline`
- `/api/settings`
- `/api/articles`
- `/api/search`
- `/api/context`
- `/api/events`
- `/api/ontology`
- `/api/studio/relationships`
- `/api/studio/validation-rules`
- `/api/studio/ontology-definitions`
- `/api/studio/ontology-audit`
- `/api/studio/ontology-testing`
- `/api/studio/required-relationships`
- `/api/studio/inverse-relationships`
- `/api/studio/ontology-versioning`
- `/api/studio/graph-integrity`
- `/api/studio/orphan-entities`
- `/api/studio/broken-links`
- `/api/studio/duplicate-nodes`
- `/api/studio/graph-metrics`
- `/api/studio/metadata-definitions`
- `/api/studio/entity-dashboard`
- `/api/studio/entity-verification`
- `/api/studio/entity-articles`
- `/api/studio/entity-media`
- `/api/studio/entity-traits`
- `/api/studio/entity-merge`
- `/api/studio/entity-split`
- `/api/studio/entity-sources`
- `/api/studio/entity-facts`
- `/api/studio/articles`
- `/api/studio/article-publication`
- `/api/studio/article-revisions`
- `/api/studio/article-citations`
- `/api/studio/entity-quality`
- `/api/studio/entity-integrity`
- `/api/studio/entity-search`
- `/api/studio/entity-audit`
- `/api/studio/users`
- `/api/studio/roles`
- `/api/studio/permissions`
- `/api/studio/invitations`
- `/api/studio/graph-explorer`
- `/api/studio/graph-path`
- `/api/studio/required-fields`

---

## Endpoint Inventory

### studioArticleCitationRoutes.ts

- **GET** /:id/citations

### studioArticlePublicationRoutes.ts

- **POST** /:id/publish
- **POST** /:id/unpublish

### studioArticleRevisionRoutes.ts

- **GET** /:id/revisions

### studioArticleRoutes.ts

- **GET** /
- **POST** /
- **PUT** /:id
- **DELETE** /:id

### articleRoutes.ts

- **GET** /
- **GET** /:slug
router.post(
router.put(

### studioEntityAuditRoutes.ts

router.get(
router.get(
router.get(

### auditRoutes.ts

router.get(

### authRoutes.ts

- **POST** /register
- **POST** /login

### contextRoutes.ts

router.get(
router.get(

### dashboardRoutes.ts

router.get(

### studioEntityBulkOperationRoutes.ts

- **POST** /verify

### studioEntityDuplicateRoutes.ts

- **GET** /

### studioEntityIntegrityRoutes.ts

- **GET** /

### studioEntityQualityRoutes.ts

- **GET** /

### studioEntitySearchRoutes.ts

- **GET** /

### studioEntityTimelineRoutes.ts

- **GET** /:entityId

### entityRoutes.ts

- **GET** /
- **GET** /:slug
router.post(
router.put(
router.delete(

### eventRoutes.ts

- **GET** /
- **GET** /:slug
router.post(

### graphRoutes.ts

- **GET** /path
- **GET** /recommend/:slug
- **GET** /:slug

### ontologyRoutes.ts

router.get(
router.get(

### relationshipRoutes.ts

router.get(

### searchRoutes.ts

router.get(

### settingsRoutes.ts

router.get(
router.put(

### studioBrokenLinkRoutes.ts

- **GET** /

### studioDuplicateNodeRoutes.ts

- **GET** /

### studioEntityArticleLinkRoutes.ts

- **GET** /:entityId
- **POST** /:entityId
- **DELETE** /:entityId/:articleId

### studioEntityDashboardRoutes.ts

- **GET** /

### studioEntityFactRoutes.ts

router.get(
router.post(
router.patch(
router.delete(

### studioEntityHistoryRoutes.ts

- **GET** /:entityId

### studioEntityMediaRoutes.ts

- **GET** /:entityId
- **PATCH** /:entityId

### studioEntityMergeRoutes.ts

- **POST** /

### studioEntitySourceRoutes.ts

- **GET** /:entityId
- **POST** /:entityId
- **PATCH** /:entityId/:sourceId
- **DELETE** /:entityId/:sourceId

### studioEntitySplitRoutes.ts

- **POST** /

### studioEntityTraitRoutes.ts

- **GET** /:entityId
- **POST** /:entityId
- **PATCH** /:entityId/:traitIndex
- **DELETE** /:entityId/:traitIndex

### studioEntityVerificationRoutes.ts

- **GET** /:id
- **PATCH** /:id

### studioEntityVersioningRoutes.ts

- **GET** /:entityId

### studioGraphExplorerRoutes.ts

- **GET** /
- **GET** /node/:id
- **GET** /neighbors/:id
- **GET** /incoming/:id
router.get(

### studioGraphIntegrityRoutes.ts

- **GET** /

### studioGraphMetricsRoutes.ts

- **GET** /

### studioGraphPathRoutes.ts

- **GET** /

### studioInverseRelationshipRoutes.ts

- **GET** /
- **GET** /:entityType

### studioInvitationRoutes.ts

- **GET** /
- **POST** /

### studioMetadataDefinitionRoutes.ts

router.get(
router.get(
router.post(
router.put(
router.delete(

### studioOntologyAuditRoutes.ts

- **GET** /

### studioOntologyDefinitionRoutes.ts

- **GET** /
- **GET** /:entityType
- **POST** /
- **PUT** /
- **DELETE** /:id

### studioOntologyTestingRoutes.ts

- **GET** /

### studioOntologyVersioningRoutes.ts

- **GET** /
- **GET** /:entityType

### studioOrphanEntityRoutes.ts

- **GET** /

### studioPermissionRoutes.ts

- **GET** /
- **POST** /:id

### studioRelationshipRoutes.ts

router.get(

### studioRequiredFieldRoutes.ts

- **GET** /
- **GET** /:entityType

### studioRequiredRelationshipRoutes.ts

- **GET** /
- **GET** /:entityType

### studioRoleRoutes.ts

- **GET** /

### studioUserRoutes.ts

- **GET** /
- **GET** /:id
- **POST** /
- **PATCH** /:id
- **DELETE** /:id
- **POST** /:id/suspend
- **POST** /:id/activate

### studioValidationRuleRoutes.ts

- **GET** /
- **POST** /
- **PUT** /:id
- **DELETE** /:id

### timelineRoutes.ts

router.get(

### userRoutes.ts

router.get(
router.get(
router.patch(
router.patch(
router.delete(

---

## Route Statistics

- Registered Route Groups: 52
- Route Files: 57
- Endpoint Definitions: 123
