# Connect Africa - Permissions Matrix Specification v1.0

## Purpose

This document defines the authorization model for Connect Africa.

The platform shall implement:

- Role-Based Access Control (RBAC)
- Attribute-Based Access Control (ABAC) (future)
- Resource Ownership Rules
- Approval Workflows
- Audit Enforcement

Every action performed within the platform must be authorized through this specification.

---

# Authorization Principles

## Principle of Least Privilege

Users must receive only the permissions necessary to perform their responsibilities.

---

## Deny By Default

All actions are denied unless explicitly granted.

---

## Audit Requirement

Every permission-sensitive action must generate an audit log.

---

# System Roles

```text
Super Administrator
Administrator
Knowledge Manager
Ontology Manager
Content Manager
Editor
Reviewer
Researcher
Contributor
Analyst
AI Agent
System
Read Only
```

---

# Role Hierarchy

```text
Super Administrator
│
├── Administrator
│   ├── Knowledge Manager
│   ├── Ontology Manager
│   ├── Content Manager
│   ├── Analyst
│   └── Reviewer
│
├── Editor
│
├── Researcher
│
├── Contributor
│
└── Read Only
```

---

# Super Administrator

## Description

Full control over the entire platform.

## Permissions

```text
ALL
```

Can:

- Manage all users
- Manage all roles
- Manage all permissions
- Manage ontology
- Manage entities
- Manage graph
- Manage articles
- Manage AI systems
- Manage infrastructure
- Restore backups
- Delete records
- Publish content
- Configure platform settings

---

# Administrator

## Description

Platform operational administrator.

## Permissions

### Knowledge

```text
create
read
update
verify
archive
restore
```

### Ontology

```text
create
read
update
publish
archive
```

### Articles

```text
create
read
update
publish
archive
```

### Users

```text
create
read
update
disable
```

### Analytics

```text
full_access
```

### Operations

```text
import
export
backup
restore
```

---

# Knowledge Manager

## Description

Responsible for knowledge assets.

---

## Entities

```text
create
read
update
verify
merge
split
archive
restore
```

---

## Relationships

```text
create
read
update
delete
validate
```

---

## Graph

```text
read
analyze
explore
```

---

## Sources

```text
create
read
update
validate
```

---

# Ontology Manager

## Description

Responsible for ontology governance.

---

## Ontologies

```text
create
read
update
publish
archive
rollback
```

---

## Entity Types

```text
create
update
delete
```

---

## Relationship Types

```text
create
update
delete
```

---

## Validation Rules

```text
create
update
delete
```

---

# Content Manager

## Description

Responsible for editorial content.

---

## Articles

```text
create
read
update
publish
archive
```

---

## Media

```text
create
read
update
delete
```

---

## Sources

```text
create
read
update
validate
```

---

# Editor

## Description

Creates and updates content.

---

## Articles

```text
create
read
update
```

---

## Entities

```text
create
read
update
```

---

## Sources

```text
create
read
update
```

---

## Restrictions

Cannot:

```text
publish
archive
delete
```

---

# Reviewer

## Description

Reviews submitted content.

---

## Permissions

```text
review
approve
reject
verify
```

---

Can review:

```text
Entities
Articles
Sources
Ontology Changes
```

---

# Researcher

## Description

Research-focused role.

---

## Permissions

```text
read
create_collections
manage_collections
create_notes
```

---

Can:

```text
Create Collections

Organize Sources

Create Research Workspaces
```

---

Cannot:

```text
Publish

Delete

Modify Ontologies
```

---

# Contributor

## Description

External contributor.

---

## Permissions

```text
submit_entities

submit_articles

submit_sources
```

---

All submissions require review.

---

# Analyst

## Description

Analytics and reporting role.

---

## Permissions

```text
read_analytics

export_reports

view_audits
```

---

Cannot modify data.

---

# Read Only

## Description

View-only access.

---

## Permissions

```text
read
```

---

Cannot:

```text
create
update
delete
publish
```

---

# AI Agent

## Description

Internal automated system.

---

## Permissions

```text
create_draft_entities

create_draft_relationships

create_draft_articles

generate_suggestions

flag_duplicates

generate_metadata
```

---

Restrictions:

```text
Cannot Publish

Cannot Delete

Cannot Approve

Cannot Modify Permissions
```

---

# System

## Description

Internal platform services.

---

## Permissions

```text
queue_processing

search_indexing

backup_execution

notification_delivery

analytics_processing

audit_generation
```

---

# Resource Permissions Matrix

| Resource | Create | Read | Update | Delete | Publish | Verify |
|-----------|---------|---------|---------|---------|---------|---------|
| Entity | Yes | Yes | Yes | Limited | Limited | Limited |
| Relationship | Yes | Yes | Yes | Limited | N/A | Limited |
| Ontology | Yes | Yes | Yes | Limited | Yes | N/A |
| Article | Yes | Yes | Yes | Limited | Yes | N/A |
| Source | Yes | Yes | Yes | Limited | N/A | Validate |
| Media | Yes | Yes | Yes | Limited | N/A | N/A |
| User | Yes | Yes | Yes | Limited | N/A | N/A |

---

# Sensitive Operations

The following operations require elevated permissions:

```text
Delete Entity

Delete Relationship

Delete Ontology

Delete User

Restore Backup

Modify Permissions

Modify Roles

Publish Ontology

Publish Article

Merge Entities

Split Entities
```

---

# Approval Workflows

## Entity Workflow

```text
Draft
  ↓
Review
  ↓
Verified
  ↓
Published
```

---

## Article Workflow

```text
Draft
  ↓
Review
  ↓
Published
```

---

## Ontology Workflow

```text
Draft
  ↓
Testing
  ↓
Review
  ↓
Published
```

---

# Ownership Rules

Users may edit resources they created unless restricted by workflow state.

Example:

```text
Contributor

Can edit own draft

Cannot edit verified entity
```

---

# Permission Inheritance

Child roles inherit parent permissions unless explicitly restricted.

Example:

```text
Administrator

inherits

Editor Permissions
```

---

# Audit Enforcement

Every permission-protected action must record:

```text
User

Role

Action

Resource

Timestamp

Result
```

---

# Frontend Requirements

The Admin Studio must:

- Hide unauthorized navigation items
- Hide unauthorized actions
- Disable unauthorized buttons
- Enforce route-level permissions
- Display permission-denied states
- Display approval workflow states

---

# Backend Requirements

Backend must enforce:

- Authentication
- Authorization
- Role Validation
- Resource Ownership Validation
- Workflow Validation
- Audit Logging

Frontend permissions alone are not sufficient.

---

# Compliance Rule

No page, endpoint, workflow, button, bulk action, AI operation, import process, export process, graph operation, ontology modification, publication workflow, or administrative function may be executed without permission validation against this specification.

The backend is the authoritative enforcement layer.