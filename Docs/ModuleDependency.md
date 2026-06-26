Connect Africa Backend Module Dependency Map

Purpose

This document defines backend module dependencies.

It exists to ensure:

- Correct build order
- Correct service boundaries
- No circular dependencies
- Independent module development
- Scalable architecture

This document supersedes assumptions made by developers.

---

Dependency Levels

Level 0
Infrastructure

Level 1
Core Platform

Level 2
Knowledge Foundation

Level 3
Knowledge Services

Level 4
Content Services

Level 5
Intelligence Services

Level 6
Public Platform

---

Level 0 — Infrastructure

These services have no dependencies.

They must be built first.

---

Database Layer

PostgreSQL
Neo4j
Redis
OpenSearch
MinIO

Dependencies:

None

---

Core Infrastructure

Modules:

Database Module

Cache Module

Storage Module

Queue Module

Search Module

Event Bus

Dependencies:

None

---

Level 1 — Core Platform

Everything depends on this layer.

---

Authentication

Module:

Auth Service

Provides:

Users

Sessions

JWT

Refresh Tokens

MFA

Depends On:

Database
Redis

Required By:

ALL MODULES

---

RBAC

Module:

Authorization Service

Provides:

Roles

Permissions

Policies

Depends On:

Auth Service
Database

Required By:

ALL MODULES

---

Audit

Module:

Audit Service

Provides:

Audit Logs

Change Tracking

Security Events

Depends On:

Auth
RBAC
Database

Required By:

ALL MODULES

---

Notifications

Module:

Notification Service

Depends On:

Auth
Database

Required By:

Optional

---

Level 2 — Knowledge Foundation

These modules define the rules of knowledge.

---

Ontology Service

Reference:

ONTOLOGY_MANAGEMENT_SPECIFICATION.md

Provides:

Entity Types

Relationship Types

Metadata Definitions

Validation Rules

Cardinality Rules

Depends On:

Auth

RBAC

Audit

Required By:

Entities

Relationships

Graph

Articles

AI

---

Level 3 — Knowledge Services

The core Connect Africa layer.

---

Entity Service

Reference:

ENTITY_MANAGEMENT_SPECIFICATION.md

Depends On:

Ontology

Auth

RBAC

Audit

Provides:

Entities

Facts

Traits

Timeline

Required By:

Relationships

Sources

Media

Graph

Articles

Search

AI

---

Relationship Service

Reference:

RELATIONSHIP_MANAGEMENT_SPECIFICATION.md

Depends On:

Ontology

Entity Service

Auth

RBAC

Provides:

Graph Connections

Required By:

Graph

AI

Analytics

---

Sources Service

Reference:

SOURCES_AND_CITATIONS_SPECIFICATION.md

Depends On:

Entity Service

Relationship Service

Auth

RBAC

Provides:

Sources

Evidence

Citations

Required By:

Articles

AI

Analytics

---

Media Service

Reference:

MEDIA_MANAGEMENT_SPECIFICATION.md

Depends On:

Entity Service

Sources Service

Storage Layer

Provides:

Media Assets

Required By:

Articles

Public Platform

---

Knowledge Graph Service

Reference:

KNOWLEDGE_GRAPH_SPECIFICATION.md

Depends On:

Entity Service

Relationship Service

Ontology Service

Neo4j

Provides:

Nodes

Edges

Traversal

Path Finding

Required By:

Search

Analytics

AI

Public Platform

---

Level 4 — Content Services

---

Article Service

Reference:

ARTICLE_MANAGEMENT_SPECIFICATION.md

Depends On:

Entity Service

Sources Service

Media Service

Auth

RBAC

Provides:

Articles

Editorial Workflow

SEO

Required By:

Public Platform

Search

Analytics

AI

---

Search Service

Reference:

SEARCH_SPECIFICATION.md

Depends On:

Entity Service

Relationship Service

Graph Service

Article Service

OpenSearch

Provides:

Search

Indexing

Ranking

Required By:

Public Platform

AI

Analytics

---

Level 5 — Intelligence Services

---

Analytics Service

Reference:

ANALYTICS_AND_MONITORING_SPECIFICATION.md

Depends On:

Entities

Relationships

Graph

Articles

Search

Provides:

Metrics

Reports

Dashboards

---

Operations Service

Reference:

OPERATIONS_SPECIFICATION.md

Depends On:

ALL MODULES

Provides:

Import

Export

Backup

Restore

Jobs

---

AI Service

Reference:

AI_AND_AUTOMATION_SPECIFICATION.md

Depends On:

Ontology

Entities

Relationships

Graph

Sources

Articles

Search

Provides:

Research Assistant

Recommendations

Knowledge Discovery

Entity Expansion

---

Level 6 — Public Platform

---

Public API

Depends On:

Entities

Relationships

Articles

Search

Graph

Media

Provides:

Public Access

---

Developer API

Depends On:

Public API

RBAC

Provides:

External Integrations

---

Public Website

Depends On:

Public API

Provides:

User Experience

---

Build Order

The ONLY approved implementation order.

1. Infrastructure

2. Authentication

3. RBAC

4. Audit

5. Notifications

6. Ontology

7. Entity

8. Relationship

9. Sources

10. Media

11. Knowledge Graph

12. Articles

13. Search

14. Analytics

15. Operations

16. AI

17. Public API

18. Developer API

19. Public Website

---

Forbidden Dependencies

The following are prohibited:

Entity → Article

Entity → Search

Ontology → Entity

Graph → Article

Graph → Search

RBAC → Entity

Audit → Entity

Rules:

Lower Layers Never Depend On Higher Layers

---

Independent Development Matrix

Can Be Built In Parallel:

Auth + Infrastructure

RBAC + Audit

Sources + Media

Analytics + Operations

Cannot Be Built In Parallel:

Entity before Ontology

Relationship before Entity

Graph before Relationship

Search before Graph

AI before Search

---

Platform Critical Path

Infrastructure
      ↓

Auth
      ↓

RBAC
      ↓

Ontology
      ↓

Entity
      ↓

Relationship
      ↓

Graph
      ↓

Search
      ↓

AI

If the critical path is broken, the platform stops progressing.

---

Architecture Rule

Every module must expose:

Controller Layer

Service Layer

Repository Layer

DTO Layer

Validation Layer

Policy Layer

Audit Hooks

Event Hooks

No module may bypass:

Authentication

Authorization

Validation

Audit Logging

This dependency map is the authoritative implementation order for the Connect Africa backend.