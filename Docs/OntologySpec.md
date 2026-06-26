# Connect Africa - Ontology Specification v1.0

## Purpose

The Ontology System defines the structure, rules, constraints, and semantics of the Connect Africa Knowledge Graph.

All Entities, Facts, Traits, Relationships, and Graph Operations must conform to Ontology definitions.

The Ontology System serves as the source of truth for:

- Entity Types
- Relationship Types
- Validation Rules
- Required Fields
- Required Relationships
- Inverse Relationships
- Metadata Definitions
- Graph Constraints

No Entity or Relationship may exist outside an approved Ontology.

---

# Ontology Architecture

```text
Ontology
├── Entity Types
├── Relationship Types
├── Validation Rules
├── Required Fields
├── Required Relationships
├── Metadata Definitions
├── Constraints
├── Inverse Relationships
├── Cardinality Rules
├── Versioning
└── Audit History
```

---

# Ontology Lifecycle

## States

```text
draft
testing
published
deprecated
archived
```

---

# Ontology Entity Types

Entity Types define categories of knowledge.

---

## Person

### Description

Represents an individual human being.

### Required Fields

```text
name
```

### Optional Fields

```text
birthDate
deathDate
gender
biography
nationality
occupation
```

### Allowed Relationships

```text
born_in
died_in
member_of
speaks
parent_of
child_of
married_to
influenced_by
influenced
```

---

## Country

### Required Fields

```text
name
```

### Optional Fields

```text
capital
population
area
currency
flag
```

### Allowed Relationships

```text
contains
neighbor_of
member_of
located_in
```

---

## City

### Required Fields

```text
name
```

### Allowed Relationships

```text
located_in
capital_of
contains
```

---

## Language

### Required Fields

```text
name
```

### Allowed Relationships

```text
spoken_in
language_family
derived_from
```

---

## Culture

### Required Fields

```text
name
```

### Allowed Relationships

```text
practiced_in
related_to
influenced_by
```

---

## Organization

### Required Fields

```text
name
```

### Allowed Relationships

```text
located_in
member_of
founded_by
owns
operates
```

---

## Historical Figure

### Required Fields

```text
name
```

### Allowed Relationships

```text
born_in
died_in
influenced
influenced_by
member_of
```

---

## Event

### Required Fields

```text
name
date
```

### Allowed Relationships

```text
occurred_in
involved
caused
resulted_in
```

---

## Place

### Required Fields

```text
name
```

### Allowed Relationships

```text
located_in
contains
```

---

## Topic

### Required Fields

```text
name
```

### Allowed Relationships

```text
related_to
part_of
```

---

# Relationship Definitions

---

## contains

### Description

Indicates ownership or containment.

### Examples

```text
Country -> contains -> City

City -> contains -> District
```

### Inverse

```text
part_of
```

---

## located_in

### Description

Indicates geographic location.

### Examples

```text
City -> located_in -> Country

Organization -> located_in -> City
```

### Inverse

```text
contains
```

---

## member_of

### Description

Membership relationship.

### Examples

```text
Person -> member_of -> Organization

Country -> member_of -> Union
```

### Inverse

```text
has_member
```

---

## speaks

### Description

Language relationship.

### Example

```text
Person -> speaks -> Language
```

### Inverse

```text
spoken_by
```

---

## founded_by

### Description

Founding relationship.

### Example

```text
Organization -> founded_by -> Person
```

### Inverse

```text
founded
```

---

## born_in

### Description

Birth location relationship.

### Example

```text
Person -> born_in -> City
```

---

## died_in

### Description

Death location relationship.

### Example

```text
Person -> died_in -> City
```

---

## influenced_by

### Description

Influence relationship.

### Example

```text
Person -> influenced_by -> Person
```

### Inverse

```text
influenced
```

---

# Cardinality Rules

Cardinality determines allowed relationship counts.

---

## One-to-One

Example:

```text
Country -> capital -> City
```

Rule:

```text
One country can have only one capital.
```

---

## One-to-Many

Example:

```text
Country -> contains -> City
```

Rule:

```text
One country can contain many cities.
```

---

## Many-to-Many

Example:

```text
Person -> speaks -> Language
```

Rule:

```text
Many people may speak many languages.
```

---

# Validation Rules

---

## Entity Validation

Every Entity must:

```text
Have a valid Ontology Type

Have required fields

Have a unique identifier

Pass schema validation
```

---

## Relationship Validation

Every Relationship must:

```text
Reference valid entities

Match allowed relationship definitions

Pass cardinality rules

Pass inverse relationship rules
```

---

## Fact Validation

Every Fact must:

```text
Belong to an Entity

Have a valid property

Have a valid value type

Pass ontology constraints
```

---

# Required Relationship Rules

Certain Entity Types require relationships.

---

## City

Must have:

```text
located_in
```

---

## Historical Figure

Must have at least one:

```text
born_in

OR

associated_with
```

---

## Organization

Must have:

```text
located_in
```

---

# Metadata Definitions

Every Entity Type may define metadata.

Example:

---

## Person Metadata

```text
birthDate
deathDate
gender
occupation
nationality
```

---

## Country Metadata

```text
population
capital
currency
area
flag
```

---

## Language Metadata

```text
languageFamily
writingSystem
isoCode
```

---

# Ontology Testing

Before publication every Ontology must pass:

```text
Schema Validation

Relationship Validation

Inverse Validation

Cardinality Validation

Metadata Validation
```

---

# Ontology Versioning

Every Ontology change creates a new version.

---

## Version Data

```text
Version Number

Created By

Created At

Change Summary
```

---

## Supported Operations

```text
Publish

Rollback

Compare Versions

Archive
```

---

# Ontology Audit Requirements

Every Ontology operation must be logged.

Tracked Actions:

```text
Created

Updated

Published

Archived

Rolled Back

Deleted
```

---

# Graph Compliance Rules

The Knowledge Graph must reject:

```text
Invalid Entity Types

Invalid Relationships

Broken References

Ontology Violations

Cardinality Violations
```

---

# Backend Requirements

The backend must provide:

- Ontology Service
- Ontology Repository
- Validation Engine
- Cardinality Engine
- Relationship Rule Engine
- Versioning System
- Audit Service
- Testing Service

---

# Required APIs

```http
GET    /ontologies

GET    /ontologies/:id

POST   /ontologies

PATCH  /ontologies/:id

DELETE /ontologies/:id

POST   /ontologies/:id/publish

POST   /ontologies/:id/archive

POST   /ontologies/:id/rollback

POST   /ontologies/:id/test
```

---

# Frontend Requirements

The Admin Studio must provide:

- Ontology List
- Create Ontology
- Edit Ontology
- Ontology Testing
- Ontology Version History
- Ontology Comparison
- Ontology Publishing
- Ontology Audit View
- Validation Rule Manager
- Relationship Rule Manager
- Metadata Definition Manager

---

# Compliance Rule

No Entity, Fact, Trait, Relationship, Graph Node, Graph Edge, Import, AI Extraction, or API Write Operation may bypass Ontology Validation.

we may add more ontology specs later, through admin management

The Ontology System is the authoritative schema layer of Connect Africa.