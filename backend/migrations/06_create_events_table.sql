-- Migration 06: Create Events Table
-- Aligns with Event interface in backend/src/types/event.ts

CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    event_type TEXT NOT NULL,
    entity_id UUID REFERENCES entities(id) ON DELETE SET NULL,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB NOT NULL DEFAULT '{"createdAt": "2026-06-28T00:00:00Z", "updatedAt": "2026-06-28T00:00:00Z"}'
);

CREATE INDEX idx_events_slug ON events(slug);
CREATE INDEX idx_events_entity_id ON events(entity_id);
