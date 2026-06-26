# Connect Africa - API Specification v1.0

## Purpose

This document defines all API contracts exposed by the Connect Africa Platform.

The API Layer is the only supported communication mechanism between:

- Frontend
- Backend
- AI Systems
- Integrations
- Import Services
- External Applications

All APIs must enforce:

- Authentication
- Authorization
- Validation
- Auditing
- Versioning
- Error Handling

---

# API Standards

## Base URL

```text
/api/v1
```

---

## Response Format

### Success

```json
{
  "success": true,
  "data": {}
}
```

---

### Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed"
  }
}
```

---

# Authentication APIs

## Login

```http
POST /auth/login
```

### Request

```json
{
  "email": "admin@connectafrica.org",
  "password": "password"
}
```

### Response

```json
{
  "accessToken": "",
  "refreshToken": "",
  "user": {}
}
```

---

## Refresh Token

```http
POST /auth/refresh
```

---

## Logout

```http
POST /auth/logout
```

---

## Current User

```http
GET /auth/me
```

---

# Entity APIs

## List Entities

```http
GET /entities
```

### Query Parameters

```text
page
limit
search
entityType
status
sort
```

---

## Get Entity

```http
GET /entities/:id
```

---

## Create Entity

```http
POST /entities
```

### Request

```json
{
  "name": "Nigeria",
  "entityType": "Country",
  "description": "Federal Republic of Nigeria"
}
```

---

## Update Entity

```http
PATCH /entities/:id
```

---

## Delete Entity

```http
DELETE /entities/:id
```

---

## Verify Entity

```http
POST /entities/:id/verify
```

---

## Archive Entity

```http
POST /entities/:id/archive
```

---

## Restore Entity

```http
POST /entities/:id/restore
```

---

## Merge Entities

```http
POST /entities/merge
```

### Request

```json
{
  "sourceEntityId": "",
  "targetEntityId": ""
}
```

---

## Split Entity

```http
POST /entities/:id/split
```

---

## Entity Versions

```http
GET /entities/:id/versions
```

---

## Restore Entity Version

```http
POST /entities/:id/versions/:versionId/restore
```

---

# Fact APIs

## List Facts

```http
GET /entities/:id/facts
```

---

## Create Fact

```http
POST /entities/:id/facts
```

---

## Update Fact

```http
PATCH /facts/:id
```

---

## Delete Fact

```http
DELETE /facts/:id
```

---

# Trait APIs

## List Traits

```http
GET /entities/:id/traits
```

---

## Create Trait

```http
POST /entities/:id/traits
```

---

## Update Trait

```http
PATCH /traits/:id
```

---

## Delete Trait

```http
DELETE /traits/:id
```

---

# Relationship APIs

## List Relationships

```http
GET /relationships
```

---

## Get Relationship

```http
GET /relationships/:id
```

---

## Create Relationship

```http
POST /relationships
```

### Request

```json
{
  "sourceEntityId": "",
  "targetEntityId": "",
  "relationshipType": "located_in"
}
```

---

## Update Relationship

```http
PATCH /relationships/:id
```

---

## Delete Relationship

```http
DELETE /relationships/:id
```

---

## Validate Relationship

```http
POST /relationships/:id/validate
```

---

# Ontology APIs

## List Ontologies

```http
GET /ontologies
```

---

## Get Ontology

```http
GET /ontologies/:id
```

---

## Create Ontology

```http
POST /ontologies
```

---

## Update Ontology

```http
PATCH /ontologies/:id
```

---

## Delete Ontology

```http
DELETE /ontologies/:id
```

---

## Publish Ontology

```http
POST /ontologies/:id/publish
```

---

## Archive Ontology

```http
POST /ontologies/:id/archive
```

---

## Test Ontology

```http
POST /ontologies/:id/test
```

---

## Ontology Versions

```http
GET /ontologies/:id/versions
```

---

# Knowledge Graph APIs

## Graph Overview

```http
GET /graph/overview
```

---

## Graph Explorer

```http
GET /graph/explore
```

### Query

```text
entityId
depth
limit
```

---

## Node Inspector

```http
GET /graph/nodes/:id
```

---

## Path Finder

```http
POST /graph/pathfinder
```

### Request

```json
{
  "sourceId": "",
  "targetId": ""
}
```

---

## Neighbor Explorer

```http
GET /graph/nodes/:id/neighbors
```

---

## Graph Metrics

```http
GET /graph/metrics
```

---

## Graph Integrity

```http
GET /graph/integrity
```

---

# Article APIs

## List Articles

```http
GET /articles
```

---

## Get Article

```http
GET /articles/:id
```

---

## Create Article

```http
POST /articles
```

---

## Update Article

```http
PATCH /articles/:id
```

---

## Delete Article

```http
DELETE /articles/:id
```

---

## Publish Article

```http
POST /articles/:id/publish
```

---

## Archive Article

```http
POST /articles/:id/archive
```

---

## Article Revisions

```http
GET /articles/:id/revisions
```

---

# Media APIs

## List Media

```http
GET /media
```

---

## Upload Media

```http
POST /media/upload
```

---

## Update Media

```http
PATCH /media/:id
```

---

## Delete Media

```http
DELETE /media/:id
```

---

# Source APIs

## List Sources

```http
GET /sources
```

---

## Get Source

```http
GET /sources/:id
```

---

## Create Source

```http
POST /sources
```

---

## Update Source

```http
PATCH /sources/:id
```

---

## Delete Source

```http
DELETE /sources/:id
```

---

## Validate Source

```http
POST /sources/:id/validate
```

---

# User APIs

## List Users

```http
GET /users
```

---

## Get User

```http
GET /users/:id
```

---

## Create User

```http
POST /users
```

---

## Update User

```http
PATCH /users/:id
```

---

## Disable User

```http
POST /users/:id/disable
```

---

## Delete User

```http
DELETE /users/:id
```

---

# Role APIs

## List Roles

```http
GET /roles
```

---

## Create Role

```http
POST /roles
```

---

## Update Role

```http
PATCH /roles/:id
```

---

## Delete Role

```http
DELETE /roles/:id
```

---

# Permission APIs

## List Permissions

```http
GET /permissions
```

---

## Permission Matrix

```http
GET /permissions/matrix
```

---

## Update Permissions

```http
PATCH /permissions/matrix
```

---

# Audit APIs

## Audit Logs

```http
GET /audit
```

---

## Audit Detail

```http
GET /audit/:id
```

---

## Export Audit Logs

```http
POST /audit/export
```

---

# Analytics APIs

## Dashboard Metrics

```http
GET /analytics/dashboard
```

---

## Entity Metrics

```http
GET /analytics/entities
```

---

## Relationship Metrics

```http
GET /analytics/relationships
```

---

## User Metrics

```http
GET /analytics/users
```

---

## Content Metrics

```http
GET /analytics/content
```

---

# Monitoring APIs

## System Health

```http
GET /monitoring/health
```

---

## Service Status

```http
GET /monitoring/services
```

---

## Queue Status

```http
GET /monitoring/queues
```

---

## Storage Status

```http
GET /monitoring/storage
```

---

# Import APIs

## Import Data

```http
POST /imports
```

---

## Import Status

```http
GET /imports/:id
```

---

## Import Validation

```http
POST /imports/validate
```

---

# Export APIs

## Export Data

```http
POST /exports
```

---

## Export Status

```http
GET /exports/:id
```

---

# Backup APIs

## Create Backup

```http
POST /backups
```

---

## Restore Backup

```http
POST /backups/:id/restore
```

---

## List Backups

```http
GET /backups
```

---

# Job APIs

## List Jobs

```http
GET /jobs
```

---

## Job Detail

```http
GET /jobs/:id
```

---

## Retry Job

```http
POST /jobs/:id/retry
```

---

## Cancel Job

```http
POST /jobs/:id/cancel
```

---

# AI APIs

## AI Models

```http
GET /ai/models
```

---

## AI Providers

```http
GET /ai/providers
```

---

## Run AI Task

```http
POST /ai/run
```

---

## AI Jobs

```http
GET /ai/jobs
```

---

## AI Prompts

```http
GET /ai/prompts
```

---

## AI Metrics

```http
GET /ai/metrics
```

---

# Search APIs

## Global Search

```http
GET /search
```

---

## Entity Search

```http
GET /search/entities
```

---

## Article Search

```http
GET /search/articles
```

---

## Source Search

```http
GET /search/sources
```

---

## Semantic Search

```http
POST /search/semantic
```

---

# System APIs

## Settings

```http
GET /settings
```

---

## Update Settings

```http
PATCH /settings
```

---

## Feature Flags

```http
GET /feature-flags
```

---

## Update Feature Flags

```http
PATCH /feature-flags
```

---

# Mandatory Requirements

Every API endpoint MUST:

- Require Authentication
- Enforce Authorization
- Validate Input
- Produce Audit Logs
- Return Standardized Responses
- Support Pagination where applicable
- Support Filtering where applicable
- Support Sorting where applicable
- Support Search where applicable
- Be Fully Documented
- Be Covered by Automated Tests

---

# Backend Compliance Rule

No frontend feature, button, page, workflow, widget, action, report, import, export, AI operation, graph operation, or administrative function may exist unless a corresponding API endpoint exists within this specification.