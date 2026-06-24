-- Ontology Management Schema Migration

-- 1. Ontologies: The top-level containers
CREATE TABLE IF NOT EXISTS ontologies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Entity Types: Defines the structures within an ontology
CREATE TABLE IF NOT EXISTS entity_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ontology_id UUID NOT NULL REFERENCES ontologies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    namespace TEXT NOT NULL,
    parent_id UUID REFERENCES entity_types(id) ON DELETE SET NULL, -- Hierarchical
    UNIQUE(ontology_id, name)
);

-- 3. Property Definitions: Strict typing for entity attributes
CREATE TABLE IF NOT EXISTS property_definitions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type_id UUID NOT NULL REFERENCES entity_types(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    data_type TEXT NOT NULL, -- e.g., 'string', 'date', 'number', 'enum'
    is_required BOOLEAN DEFAULT false,
    UNIQUE(entity_type_id, name)
);

-- 4. Relationship Definitions: Strictly defined connections
CREATE TABLE IF NOT EXISTS relationship_definitions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type_id UUID NOT NULL REFERENCES entity_types(id) ON DELETE CASCADE,
    target_entity_type_id UUID NOT NULL REFERENCES entity_types(id) ON DELETE CASCADE,
    relationship_name TEXT NOT NULL,
    direction TEXT DEFAULT 'bidirectional' -- e.g., 'outgoing', 'incoming', 'bidirectional'
);
