# Connect Africa - Frontend Design System Specification v1.0

## Purpose

This document defines the complete design system for Connect Africa Admin Studio.

The design system ensures:

- Consistent UI
- Consistent UX
- Responsive Design
- Accessibility
- Scalability
- Component Reusability
- Enterprise-grade Administration Experience

All frontend development must follow this specification.

---

# Design Principles

## Knowledge First

The platform is a Knowledge Management System.

The interface must prioritize:

- Information Density
- Clarity
- Discoverability
- Navigation Speed

---

## Enterprise Grade

The platform should feel similar to:

- Atlassian
- Linear
- GitHub
- Notion
- Neo4j Bloom
- Airtable
- Datadog

---

## Mobile Friendly

Support:

```text
Desktop
Tablet
Mobile
```

---

# Layout Architecture

## Desktop Layout

```text
┌───────────────────────────────────────────────┐
│ Top Navigation                                │
├───────┬───────────────────────────────────────┤
│       │                                       │
│       │                                       │
│Sidebar│          Main Content                 │
│       │                                       │
│       │                                       │
├───────┴───────────────────────────────────────┤
│ Status Bar                                    │
└───────────────────────────────────────────────┘
```

---

# Sidebar Layout

Width:

```text
280px
```

Collapsed:

```text
72px
```

---

## Sidebar Structure

```text
Dashboard

Knowledge
    Entities
    Relationships
    Ontology
    Knowledge Graph

Content
    Articles
    Media
    Sources

Governance
    Users
    Roles
    Permissions
    Audit Logs

Analytics
    Metrics
    Monitoring

Operations
    Imports
    Exports
    Backups
    Jobs
    Settings

AI & Automation
    AI Models
    AI Tasks
    AI Monitoring
```

---

# Top Navigation

Contains:

```text
Search

Notifications

Recent Activity

Theme Switcher

Profile Menu
```

---

# Page Layout

```text
Page Header

Toolbar

Filters

Content Area

Pagination
```

---

# Design Tokens

## Border Radius

```text
4px
8px
12px
16px
```

---

## Shadows

```text
Small
Medium
Large
```

---

## Spacing

```text
4px
8px
12px
16px
24px
32px
48px
64px
```

---

# Color System

## Primary

```text
#0F766E
```

---

## Primary Hover

```text
#115E59
```

---

## Secondary

```text
#2563EB
```

---

## Success

```text
#16A34A
```

---

## Warning

```text
#D97706
```

---

## Danger

```text
#DC2626
```

---

## Background

```text
#F8FAFC
```

---

## Surface

```text
#FFFFFF
```

---

## Border

```text
#E2E8F0
```

---

## Text Primary

```text
#0F172A
```

---

## Text Secondary

```text
#64748B
```

---

# Typography

## Font Family

```text
Inter
```

Fallback:

```text
system-ui
sans-serif
```

---

## Heading Sizes

```text
H1 = 32px

H2 = 28px

H3 = 24px

H4 = 20px

H5 = 18px
```

---

## Body Text

```text
16px
```

---

## Small Text

```text
14px
```

---

# Dashboard Design

---

## Dashboard Header

Contains:

```text
Title

Breadcrumbs

Actions
```

Example:

```text
Dashboard

Last Updated

Refresh
```

---

## KPI Cards

Display:

```text
Total Entities

Total Relationships

Total Articles

Total Sources

Graph Health

System Health
```

---

## KPI Layout

```text
6 Cards

Desktop:
6 Across

Tablet:
3 Across

Mobile:
1 Across
```

---

# Table Design

Used for:

```text
Entities

Relationships

Articles

Sources

Users

Audit Logs
```

---

## Table Features

```text
Sorting

Filtering

Pagination

Column Visibility

Bulk Selection

Export
```

---

# Form Design

All forms use:

```text
Label

Input

Help Text

Validation Message
```

---

## Form Sections

Large forms must be grouped.

Example:

```text
Basic Information

Metadata

Relationships

Sources

Media
```

---

# Entity Dashboard

---

## Layout

```text
Header

Entity Overview

Facts

Traits

Relationships

Sources

Media

Timeline

Versions

Audit History
```

---

## Overview Cards

Display:

```text
Status

Quality Score

Integrity Score

Source Count

Relationship Count
```

---

# Relationship Management

---

## Relationship Table

Columns:

```text
Source Entity

Relationship Type

Target Entity

Confidence

Created At
```

---

## Relationship Inspector

Display:

```text
Source

Relationship

Target

Ontology Validation

Source Evidence
```

---

# Ontology Studio

---

## Ontology Editor Layout

```text
Ontology Information

Entity Types

Relationship Types

Validation Rules

Metadata Definitions

Testing

Version History
```

---

## Ontology Testing Panel

Displays:

```text
Passed Rules

Failed Rules

Warnings

Suggestions
```

---

# Knowledge Graph Explorer

---

## Layout

```text
Graph Canvas

Node Inspector

Filters

Path Finder

Graph Statistics
```

---

## Graph Canvas

Supports:

```text
Zoom

Pan

Node Expansion

Relationship Filtering

Selection

Search
```

---

# Article Studio

---

## Editor Layout

```text
Header

Metadata

Editor

References

Revision History
```

---

## Editor Features

```text
Rich Text

Markdown

Media Embeds

Citation Support

Auto Save
```

---

# User Management

---

## User Table

Columns:

```text
Name

Email

Role

Status

Last Active
```

---

## User Detail

Displays:

```text
Profile

Roles

Permissions

Audit Activity
```

---

# Audit Center

---

## Audit Table

Columns:

```text
Timestamp

User

Action

Resource

Result
```

---

## Audit Detail

Displays:

```text
Before

After

Metadata

IP Address

System Events
```

---

# Analytics

---

## Dashboard Widgets

```text
Entity Growth

Relationship Growth

Article Growth

User Activity

AI Usage

System Health
```

---

# Monitoring

---

## Monitoring Widgets

```text
API Status

Queue Status

Database Status

Search Status

AI Status
```

---

# Notifications

Types:

```text
Success

Warning

Error

Information
```

---

# Empty States

Must include:

```text
Illustration

Message

Action Button
```

---

# Loading States

Must include:

```text
Skeleton Screens

Loading Indicators
```

---

# Error States

Must include:

```text
Friendly Message

Error Code

Retry Action
```

---

# Responsive Rules

## Desktop

```text
1440px+
```

Full Sidebar

---

## Laptop

```text
1024px - 1439px
```

Collapsible Sidebar

---

## Tablet

```text
768px - 1023px
```

Overlay Sidebar

Reduced Tables

---

## Mobile

```text
0px - 767px
```

Drawer Navigation

Single Column Layout

Stacked Cards

---

# Accessibility

Must Support:

```text
Keyboard Navigation

Screen Readers

Focus Indicators

ARIA Labels

Color Contrast Compliance
```

---

# Component Library

Required Components:

```text
Button

Input

Textarea

Select

Autocomplete

Checkbox

Radio

Switch

Modal

Drawer

Tabs

Accordion

Dropdown

Table

Data Grid

Card

Alert

Toast

Breadcrumb

Pagination

Timeline

Graph Canvas

Code Editor

Rich Text Editor
```

---

# Frontend Technology Requirements

Framework:

```text
React
```

Build Tool:

```text
Vite
```

Language:

```text
TypeScript
```

Styling:

```text
TailwindCSS
```

State Management:

```text
Zustand
```

Data Fetching:

```text
TanStack Query
```

Forms:

```text
React Hook Form
```

Validation:

```text
Zod
```

Routing:

```text
React Router
```

Charts:

```text
Recharts
```

Graph Visualization:

```text
React Flow
```

---

# Compliance Rule

Every page, component, widget, dashboard, form, graph, table, modal, notification, and workflow in Connect Africa must conform to this Design System.

No custom UI implementation may bypass this specification.