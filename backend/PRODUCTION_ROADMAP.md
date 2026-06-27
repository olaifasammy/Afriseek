# Connect Africa Backend - Production Roadmap

## Phase 1: Foundation (Security & Governance)
- [x] **Auth Enforcement:** Implement JWT parsing middleware (populates `req.user`).
- [x] **RBAC Enforcement:** Complete `AuthorizationService` and apply `requirePermission`/`requireRole` to all routes.
- [x] **Audit Integration:** Apply `auditAction` decorator/middleware to **every** write-path controller action.
- [x] **Token Revocation:** Implement token blacklisting.
- [ ] **MFA:** Implement Authenticator App and Email OTP.

## Phase 2: Core Knowledge (Ontology & Integrity)
- [ ] **Validation Pipeline:** Integrate `ValidationRegistry` into `EntityService` and `RelationshipService` write-paths.
- [ ] **Cardinality/Inverse Rules:**
    - [ ] Implement Relationship Validation Engine.
    - [ ] Enforce Cardinality Rules.
    - [ ] Enforce Inverse Relationship Rules.
- [ ] **Versioning Engine:** Enforce automatic version creation for all `Entity`, `Article`, `Ontology`, and `Source` updates.
- [ ] **Soft Delete Enforcement:** Audit all repositories to ensure strictly no hard deletes (use `deleted_at` only).

## Phase 3: Domain Services (Knowledge & Content)
- [ ] **Entity Service:** Implement full validation, integrity checking, and duplicate detection logic.
- [ ] **Relationship Service:** Implement graph consistency checks and inverse relationship automation.
- [ ] **Article/Media Services:** Implement editorial workflows (Draft -> Review -> Published).
- [ ] **Sources/Citations:** Implement credibility scoring and source-to-fact mapping.

## Phase 4: Intelligence & Intelligence Infrastructure
- [ ] **AI Gateway:** Implement the mandatory orchestration layer (per `AiDesignSpecs.md`).
- [ ] **Search Indexing:** Sync the `SearchService` (OpenSearch) with transactional DB writes.
- [ ] **Analytics Instrumentation:** Implement event-bus publishing for every key action to the `MetricsService`.

## Phase 5: Reliability & Observability (Hardening)
- [ ] **Structured Logging:** Standardize `pino` logger usage across all services.
- [ ] **Error Handling:** Standardize all API error responses via `errorHandler` middleware per `Api Implementation.md`.
- [ ] **Automated Tests:** Add e2e/integration tests for every core service (`Auth`, `Entity`, `Relationship`, `Article`).
- [ ] **Health Checks:** Implement `monitoring/health` endpoints for all services and dependencies.

## Phase 6: Infrastructure & Missing Components
- [ ] **ApiKeyService:** Implement machine-to-machine authentication management.
- [ ] **MFA Service:** Implement Authenticator App and Email OTP challenge/verification.
- [ ] **Session Management Service:** Implement active session tracking, termination, and device/IP monitoring.
- [ ] **Policy Engine:** Implement the context-aware authorization layer (e.g., Ownership policies).
- [ ] **AI Gateway & Prompt Manager:** Implement the central AI orchestration layer.
- [ ] **Metrics Collector & Aggregation Engine:** Implement the engine for KPI/dashboard calculations.
- [ ] **Alert Engine:** Implement system alert generation.
- [ ] **Import/Export Validation Pipeline:** Implement pre-ingestion validation logic.
- [ ] **Backup/Restore Service:** Implement automated backup/recovery logic.
- [ ] **Job Worker:** Implement the dedicated processor for background tasks.
