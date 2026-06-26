PUBLIC_API_SPECIFICATION.md

Connect Africa Public API Specification v1.0

Purpose

The Connect Africa Public API provides secure, stable, versioned, and documented access to publicly available knowledge within the Connect Africa platform.

The Public API is the official interface for websites, mobile applications, researchers, educational platforms, developers, and third-party integrations.

The API is read-first by design. Write operations are restricted to authenticated administrative services.

---

Objectives

The Public API shall:

- Expose public knowledge.
- Provide consistent REST endpoints.
- Support GraphQL queries.
- Offer high-performance data retrieval.
- Maintain backward compatibility.
- Support versioning.
- Enforce rate limiting.
- Support caching.
- Return standardized responses.
- Expose only published content.

---

Architecture

Applications

     │

     ▼

API Gateway

     │

     ▼

Public API

     │

──────────────────────────────────

Entity Service

Relationship Service

Ontology Service

Knowledge Graph

Article Service

Search Service

Media Service

Source Service

---

API Styles

Supported interfaces

REST

GraphQL

Both interfaces shall expose the same underlying published data.

---

API Versioning

Examples

/api/v1/

/api/v2/

Breaking changes require a new API version.

---

Authentication

Public endpoints

No authentication required

Protected endpoints

API Key

OAuth

JWT

---

Public Resources

The API shall expose

Entities

Relationships

Ontology

Articles

Media

Sources

Timeline Events

Countries

Cultures

Languages

Topics

Historical Figures

Only published resources shall be accessible.

---

REST Endpoints

Examples

GET /entities

GET /entities/{id}

GET /relationships

GET /articles

GET /articles/{slug}

GET /ontology

GET /countries

GET /cultures

GET /languages

GET /topics

GET /timeline

GET /search

GET /media

GET /sources

---

GraphQL

Support

Queries

Nested Relationships

Filtering

Pagination

Fragments

Aliases

Mutations are not available through the public API.

---

Search API

Support

Keyword Search

Full Text Search

Autocomplete

Filtering

Sorting

Pagination

---

Knowledge Graph API

Support

Neighbors

Paths

Connected Entities

Relationship Types

Shortest Path

Subgraphs

---

Entity API

Provide

Basic Details

Facts

Traits

Relationships

Timeline

Media

Sources

Related Articles

---

Article API

Provide

Metadata

Body

References

Related Entities

Media

Citations

---

Media API

Provide

Images

Audio

Video

Documents

Metadata

Licensing

---

Source API

Provide

Citation

Publisher

Authors

Verification

Credibility

---

Filtering

Support

Country

Language

Culture

Ontology Type

Date

Status

Category

Tags

---

Pagination

Support

Offset Pagination

Cursor Pagination

---

Sorting

Support

Name

Popularity

Date

Relevance

Updated Date

---

Response Format

Standard response

{
  "success": true,
  "data": {},
  "meta": {},
  "links": {}
}

Error response

{
  "success": false,
  "error": {
    "code": "",
    "message": ""
  }
}

---

Rate Limiting

Support configurable limits

Anonymous

Registered

API Key

Enterprise

---

Caching

Support

ETag

Cache-Control

Redis

CDN

---

Security

The Public API shall enforce

- HTTPS only
- API Version Validation
- Rate Limiting
- Input Validation
- Request Logging
- Abuse Detection

---

Monitoring

Track

Requests

Latency

Error Rate

Bandwidth

Top Endpoints

API Consumers

---

Backend Components

API Gateway

REST Controllers

GraphQL Gateway

Authentication Middleware

Rate Limiter

Cache Layer

API Analytics

OpenAPI Generator

---

Scalability

Support

Millions of Daily Requests

Horizontal Scaling

CDN Distribution

Global Availability

Zero Downtime Deployments

---

Compliance

The Public API shall expose only published knowledge.

Drafts, internal notes, administrative data, AI-generated drafts, and private user content must never be accessible through the Public API.

The Public API is the authoritative interface for external consumption of Connect Africa knowledge.