# Connect Africa - Database Specification v1.0

## Purpose

This document defines the database architecture for Connect Africa.

The database layer must support:

- Knowledge Management
- Content Management
- Governance
- Analytics
- Operations
- AI Systems
- Auditability
- Versioning
- Search
- Knowledge Graph Operations

The database architecture must support:

```text
10M+ Entities

100M+ Relationships

1M+ Articles

100K+ Sources

1000+ Concurrent Users
```

---

# Database Architecture

## Primary Database

```text
PostgreSQL
```

Responsible for:

- Transactional Data
- User Data
- Content Data
- Governance Data
- Metadata
- Audit Logs

---

## Graph Layer

```text
Graph Model on PostgreSQL
```

Primary tables:

```text
entities

relationships
```

Must support:

- Graph Traversal
- Neighbor Discovery
- Path Finding
- Relationship Queries

Future Support:

```text
Apache AGE

Neo4j

Memgraph
```

---

## Search Layer

```text
PostgreSQL Full Text Search

Future:
OpenSearch
Elasticsearch
Vector Search
```

---

# Database Naming Standards

## Tables

```text
snake_case
plural
```

Examples:

```text
entities

relationships

articles

users

sources
```

---

## Columns

```text
snake_case
```

Example:

```text
created_at

updated_at

entity_type
```

---

# Core Tables

---

# entities

## Purpose

Stores all knowledge entities.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| slug | VARCHAR |
| name | VARCHAR |
| entity_type | VARCHAR |
| status | VARCHAR |
| description | TEXT |
| summary | TEXT |
| quality_score | NUMERIC |
| integrity_score | NUMERIC |
| verification_status | BOOLEAN |
| created_by | UUID |
| verified_by | UUID |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

## Indexes

```sql
INDEX idx_entities_name

INDEX idx_entities_slug

INDEX idx_entities_type

INDEX idx_entities_status
```

---

# entity_versions

## Purpose

Stores historical versions.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| entity_id | UUID |
| version_number | INTEGER |
| data | JSONB |
| created_by | UUID |
| created_at | TIMESTAMP |

---

# facts

## Purpose

Stores entity facts.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| entity_id | UUID |
| property | VARCHAR |
| value | JSONB |
| unit | VARCHAR |
| confidence_score | NUMERIC |
| source_count | INTEGER |
| created_at | TIMESTAMP |

---

# traits

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| entity_id | UUID |
| name | VARCHAR |
| value | TEXT |

---

# relationships

## Purpose

Stores graph edges.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| source_entity_id | UUID |
| target_entity_id | UUID |
| relationship_type | VARCHAR |
| confidence_score | NUMERIC |
| strength_score | NUMERIC |
| created_at | TIMESTAMP |

---

## Indexes

```sql
INDEX idx_relationship_source

INDEX idx_relationship_target

INDEX idx_relationship_type
```

---

## Constraints

```text
Source Entity Must Exist

Target Entity Must Exist

Relationship Type Must Exist In Ontology
```

---

# ontologies

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| name | VARCHAR |
| version | VARCHAR |
| status | VARCHAR |
| description | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

# ontology_versions

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| ontology_id | UUID |
| version_number | INTEGER |
| definition | JSONB |
| created_at | TIMESTAMP |

---

# ontology_entity_types

## Purpose

Defines valid entity types.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| ontology_id | UUID |
| name | VARCHAR |
| description | TEXT |

---

# ontology_relationship_types

## Purpose

Defines valid relationships.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| ontology_id | UUID |
| name | VARCHAR |
| inverse_name | VARCHAR |

---

# articles

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| title | VARCHAR |
| slug | VARCHAR |
| content | JSONB |
| status | VARCHAR |
| author_id | UUID |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

# article_versions

## Purpose

Revision history.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| article_id | UUID |
| version_number | INTEGER |
| content | JSONB |
| created_at | TIMESTAMP |

---

# sources

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| title | VARCHAR |
| url | TEXT |
| author | VARCHAR |
| publisher | VARCHAR |
| credibility_score | NUMERIC |
| published_at | TIMESTAMP |

---

# citations

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| source_id | UUID |
| entity_id | UUID |
| fact_id | UUID |
| relationship_id | UUID |

---

# media

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| entity_id | UUID |
| article_id | UUID |
| type | VARCHAR |
| file_path | TEXT |
| mime_type | VARCHAR |
| file_size | BIGINT |
| metadata | JSONB |

---

# users

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| name | VARCHAR |
| email | VARCHAR UNIQUE |
| password_hash | TEXT |
| status | VARCHAR |
| created_at | TIMESTAMP |

---

# roles

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| name | VARCHAR |
| description | TEXT |

---

# permissions

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| resource | VARCHAR |
| action | VARCHAR |

---

# role_permissions

## Columns

| Column | Type |
|----------|----------|
| role_id | UUID |
| permission_id | UUID |

---

# user_roles

## Columns

| Column | Type |
|----------|----------|
| user_id | UUID |
| role_id | UUID |

---

# audit_logs

## Purpose

Immutable audit storage.

---

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| actor_id | UUID |
| resource_type | VARCHAR |
| resource_id | UUID |
| action | VARCHAR |
| old_value | JSONB |
| new_value | JSONB |
| metadata | JSONB |
| created_at | TIMESTAMP |

---

## Requirements

```text
Append Only

Immutable

Never Hard Delete
```

---

# notifications

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| user_id | UUID |
| title | VARCHAR |
| message | TEXT |
| read_at | TIMESTAMP |

---

# jobs

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| type | VARCHAR |
| status | VARCHAR |
| payload | JSONB |
| result | JSONB |
| started_at | TIMESTAMP |
| completed_at | TIMESTAMP |

---

# imports

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| file_name | VARCHAR |
| status | VARCHAR |
| summary | JSONB |
| created_at | TIMESTAMP |

---

# exports

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| format | VARCHAR |
| status | VARCHAR |
| created_at | TIMESTAMP |

---

# ai_jobs

## Columns

| Column | Type |
|----------|----------|
| id | UUID PK |
| task_type | VARCHAR |
| provider | VARCHAR |
| model | VARCHAR |
| status | VARCHAR |
| input | JSONB |
| output | JSONB |
| created_at | TIMESTAMP |

---

# Collections

## collections

| Column | Type |
|----------|----------|
| id | UUID PK |
| name | VARCHAR |
| description | TEXT |

---

## collection_entities

| Column | Type |
|----------|----------|
| collection_id | UUID |
| entity_id | UUID |

---

# Soft Delete Policy

All business tables must support:

```text
deleted_at

deleted_by
```

No hard deletes allowed.

---

# Versioning Policy

Required Tables:

```text
entities

articles

ontologies

sources
```

Must maintain complete historical versions.

---

# Audit Policy

Every Create, Update, Delete, Verify, Publish, Restore, Import, Export, and AI Action must create an Audit Log record.

---

# Search Requirements

Searchable Tables:

```text
entities

articles

sources

ontologies
```

Must support:

```text
Full Text Search

Filtering

Sorting

Pagination
```

---

# Scalability Requirements

Database must support:

```text
10M+ Entities

100M+ Relationships

1M+ Articles

100K+ Sources

1B+ Audit Records
```

---

# Backend Compliance Rule

Every table defined in this specification must have:

- Migration
- Repository
- Service Layer
- Validation Layer
- API Support
- Audit Logging
- Permission Enforcement
- Automated Tests

No frontend feature may exist without persistent database support.