create table if not exists entities (
  id text primary key,
  slug text unique not null,
  name text not null,
  entity_type text not null,
  importance text,
  summary text,
  traits jsonb default '[]',
  facts jsonb default '[]',
  relationships jsonb default '[]',
  sources jsonb default '[]',
  metadata jsonb
);
