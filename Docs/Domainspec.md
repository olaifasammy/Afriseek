# Connect Africa - Domain Model Specification v1.0

## Purpose

This document defines the core domain models of Connect Africa.

It serves as the single source of truth for:

- Backend Services
- Database Design
- API Contracts
- Frontend Interfaces
- Validation Rules
- Search
- Analytics
- Knowledge Graph Operations
- AI Systems

All platform functionality must be built around these domain models.

---

# Domain Overview

```text
Knowledge Domain
├── Entity
├── Fact
├── Trait
├── Relationship
├── Ontology
└── Event

Content Domain
├── Article
├── Media
├── Source
└── Citation

Governance Domain
├── User
├── Role
├── Permission
└── AuditLog

Research Domain
└── Collection
```

---

# Entity

## Description

The Entity is the primary knowledge object within Connect Africa.

Everything represented within the platform is an Entity.

Examples:

- Person
- Country
- City
- Language
- Culture
- Historical Figure
- Organization
- Event
- Topic
- Place

---

## Entity Structure

```text
Entity
├── Metadata
├── Facts
├── Traits
├── Relationships
├── Sources
├── Media
├── Timeline
├── Versions
└── Audit History
```

---

## Entity Fields

| Field | Type | Required |
|---------|---------|---------|
| id | UUID | Yes |
| slug | String | Yes |
| name | String | Yes |
| entityType | String | Yes |
| status | Enum | Yes |
| description | Text | No |
| summary | Text | No |
| createdAt | DateTime | Yes |
| updatedAt | DateTime | Yes |
| createdBy | UUID | Yes |
| verifiedBy | UUID | No |
| verificationStatus | Boolean | Yes |
| qualityScore | Number | No |
| integrityScore | Number | No |

---

## Entity Status

```text
draft
review
verified
archived
```

---

## Supported Entity Types

```text
Person
Country
City
Language
Culture
Ethnic Group
Organization
Institution
Historical Figure
Event
Place
Topic
Artifact
Book
Document
Research Paper
Species
Religion
Dynasty
Kingdom
Empire
```

---

# Fact

## Description

Facts are structured pieces of information attached to Entities.

Example:

```text
Nigeria
Population = 223,000,000

Nigeria
Capital = Abuja
```

---

## Fact Fields

| Field | Type |
|---------|---------|
| id | UUID |
| entityId | UUID |
| property | String |
| value | Any |
| unit | String |
| confidenceScore | Number |
| sourceCount | Number |
| createdAt | DateTime |
| updatedAt | DateTime |

---

# Trait

## Description

Traits describe characteristics of an Entity.

Example:

```text
Language Family = Niger-Congo
```

---

## Trait Fields

| Field | Type |
|---------|---------|
| id | UUID |
| entityId | UUID |
| name | String |
| value | String |

---

# Relationship

## Description

Relationships connect Entities together.

Example:

```text
Nigeria
contains
Lagos
```

---

## Relationship Fields

| Field | Type |
|---------|---------|
| id | UUID |
| sourceEntityId | UUID |
| targetEntityId | UUID |
| relationshipType | String |
| strength | Number |
| confidence | Number |
| createdAt | DateTime |
| updatedAt | DateTime |

---

## Relationship Structure

```text
Source Entity
      │
      ▼
Relationship Type
      │
      ▼
Target Entity
```

---

## Common Relationship Types

```text
contains
located_in
member_of
part_of
speaks
founded_by
born_in
died_in
married_to
parent_of
influenced_by
capital_of
neighbor_of
successor_of
predecessor_of
```

---

# Ontology

## Description

Ontologies define the schema rules that Entities and Relationships must follow.

---

## Ontology Fields

| Field | Type |
|---------|---------|
| id | UUID |
| name | String |
| version | String |
| status | Enum |
| description | Text |
| createdAt | DateTime |
| updatedAt | DateTime |

---

## Ontology Status

```text
draft
published
archived
```

---

# Source

## Description

Sources provide evidence for Facts, Relationships, and Articles.

---

## Source Fields

| Field | Type |
|---------|---------|
| id | UUID |
| title | String |
| url | String |
| author | String |
| publisher | String |
| publishedAt | DateTime |
| credibilityScore | Number |
| createdAt | DateTime |

---

# Citation

## Description

Citations link platform knowledge to Sources.

---

## Citation Fields

| Field | Type |
|---------|---------|
| id | UUID |
| entityId | UUID |
| sourceId | UUID |
| factId | UUID |
| relationshipId | UUID |

---

# Media

## Description

Media assets attached to Entities, Articles, and Sources.

---

## Media Fields

| Field | Type |
|---------|---------|
| id | UUID |
| entityId | UUID |
| type | Enum |
| filePath | String |
| mimeType | String |
| size | Number |
| createdAt | DateTime |

---

## Media Types

```text
image
video
audio
document
```

---

# Article

## Description

Articles are structured editorial content.

---

## Article Fields

| Field | Type |
|---------|---------|
| id | UUID |
| title | String |
| slug | String |
| content | RichText |
| status | Enum |
| authorId | UUID |
| createdAt | DateTime |
| updatedAt | DateTime |

---

## Article Status

```text
draft
review
published
archived
```

---

# User

## Description

Represents a platform user.

---

## User Fields

| Field | Type |
|---------|---------|
| id | UUID |
| name | String |
| email | String |
| status | Enum |
| roleId | UUID |
| createdAt | DateTime |

---

## User Status

```text
active
disabled
suspended
```

---

# Role

## Description

Defines groups of permissions.

---

## Role Fields

| Field | Type |
|---------|---------|
| id | UUID |
| name | String |
| description | Text |

---

# Permission

## Description

Defines allowed actions.

---

## Permission Fields

| Field | Type |
|---------|---------|
| id | UUID |
| resource | String |
| action | String |

---

## Examples

```text
entity:create
entity:update
entity:delete

relationship:create
relationship:update

ontology:publish

article:create
article:publish

user:create
user:update
```

---

# AuditLog

## Description

Records all system activity.

Every write operation must create an Audit Log.

---

## AuditLog Fields

| Field | Type |
|---------|---------|
| id | UUID |
| actorId | UUID |
| resourceType | String |
| resourceId | UUID |
| action | String |
| oldValue | JSON |
| newValue | JSON |
| timestamp | DateTime |

---

# Event

## Description

Represents a historical or timeline event.

Events can exist independently or be linked to Entities.

---

## Event Fields

| Field | Type |
|---------|---------|
| id | UUID |
| title | String |
| description | Text |
| date | DateTime |
| createdAt | DateTime |

---

# Collection

## Description

Collections organize research materials.

Collections can contain:

- Entities
- Articles
- Sources
- Media

---

## Collection Fields

| Field | Type |
|---------|---------|
| id | UUID |
| name | String |
| description | Text |
| createdAt | DateTime |

---

# Ownership Matrix

| Domain | Models |
|----------|----------|
| Knowledge | Entity, Fact, Trait, Relationship, Ontology, Event |
| Content | Article, Media, Source, Citation |
| Governance | User, Role, Permission, AuditLog |
| Research | Collection |

---

# Cross-Cutting Requirements

All Domain Models MUST support:

- Versioning
- Audit Logging
- Permissions
- Validation
- Search Indexing
- API Access
- Export Support
- Analytics Integration

---

# Backend Compliance Rule

Every Domain Model defined in this document MUST have:

- Database Schema
- Repository Layer
- Service Layer
- Validation Rules
- REST API Endpoints
- Search Integration
- Audit Logging
- Permission Enforcement
- Automated Tests
- Documentation

No frontend feature may be implemented without backend support for its corresponding Domain Model.