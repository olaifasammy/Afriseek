Code Preservation & Refactoring Rules

You are now working on a mature production backend.

The project architecture is considered stable.

Your primary objective is to implement missing functionality WITHOUT breaking or removing existing functionality.

Absolute Rules

Rule 1

Never delete code simply because it appears unused.

Assume every service, controller, repository, middleware, utility, validator, adapter, hook, or helper may be referenced elsewhere.

---

Rule 2

Before deleting any file, function, class, interface, type, or service, you MUST prove all of the following:

- It has no imports.
- It has no runtime references.
- It has no dependency injection registration.
- It is not referenced by configuration.
- It is not referenced by scheduled jobs.
- It is not referenced by AI engines.
- It is not referenced by events.
- It is not referenced by middleware.
- It is not referenced by tests.
- It is not required by any approved specification.

If any of the above cannot be proven, do NOT delete it.

---

Rule 3

Prefer extending existing implementations over replacing them.

If an EntityService already exists, extend it.

Do not replace it with a new implementation.

---

Rule 4

Never rewrite an existing module simply to match a preferred coding style.

Preserve existing architecture whenever possible.

---

Rule 5

Do not consolidate services merely because they appear similar.

Different services may exist intentionally for separation of concerns.

---

Rule 6

Never remove a repository because another repository appears capable of handling the same logic.

Repositories may exist for bounded contexts.

---

Rule 7

Do not rename public APIs, services, DTOs, repositories, controllers, or interfaces unless explicitly instructed.

Backward compatibility is required.

---

Rule 8

Before modifying an existing implementation, determine whether the required functionality can be added without breaking the existing API.

Favor additive changes.

---

Rule 9

When a requirement appears missing, first determine whether it already exists under another name or another module.

Never duplicate functionality.

Never delete functionality.

---

Rule 10

When introducing new code:

- Extend.
- Compose.
- Decorate.
- Inject.

Do not replace existing implementations unless explicitly instructed.

---

Refactoring Policy

Refactoring is allowed ONLY when ALL of the following are true:

- Functionality remains identical.
- Public APIs remain identical.
- Dependency Injection registrations remain identical.
- Existing tests continue to pass.
- No specification is violated.
- No existing feature is removed.

---

Deletion Policy

Deletion is prohibited unless I explicitly approve it.

If you believe something should be removed, STOP.

Instead provide:

1. File name
2. Why you think it is removable
3. Every place it is referenced
4. Risk assessment
5. Impact assessment

Wait for approval before deleting anything.

---

Existing Code Policy

Assume existing code is valuable.

Preserve business logic.

Preserve integrations.

Preserve backward compatibility.

Preserve extension points.

Preserve event hooks.

Preserve AI integrations.

Preserve repositories.

Preserve services.

Preserve controllers.

Preserve middleware.

Preserve validators.

Preserve utilities.

---

Implementation Philosophy

Build around the existing system.

Complete missing features.

Do not redesign.

Do not simplify by deleting.

Do not remove functionality to satisfy an audit.

Treat the current codebase as a production system that must remain stable throughout implementation.


Connect Africa Domain Rule

Many modules are intentionally independent.

Entity, Ontology, Relationship, Knowledge Graph, Search, AI Gateway, Indexer, Researcher, Expander, Analytics, Media, Sources, and RBAC may contain overlapping-looking logic.

Do NOT merge, remove, or consolidate these modules based solely on apparent similarity.

Assume each module exists to satisfy a distinct business capability defined in the project specifications.

If you suspect duplication, first determine whether the code serves different bounded contexts.

If uncertain, preserve the existing implementation and extend it rather than removing or replacing it.