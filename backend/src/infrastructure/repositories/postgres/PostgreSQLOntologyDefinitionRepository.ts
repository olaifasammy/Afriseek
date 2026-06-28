import { OntologyDefinitionRepository } from "../../../repositories/ontology/OntologyDefinitionRepository";
import { OntologyDefinitionRecord } from "../../../types/studio/OntologyDefinitionRecord";
import { query } from "../../../config/database";

export class PostgreSQLOntologyDefinitionRepository implements OntologyDefinitionRepository {

  async getAll(): Promise<OntologyDefinitionRecord[]> {
    const result = await query(`
      SELECT
        et.id,
        et.name AS "entityType",
        et.name AS "label",
        et.parent_id AS "parentType",
        o.slug AS "domain",
        o.description,
        true AS "active",
        1 AS "version",
        et.created_at AS "createdAt",
        et.created_at AS "updatedAt"
      FROM entity_types et
      JOIN ontologies o ON et.ontology_id = o.id
    `);

    return result.rows as OntologyDefinitionRecord[];
  }

  async getByEntityType(entityType: string): Promise<OntologyDefinitionRecord | null> {
    const result = await query(`
      SELECT
        et.id,
        et.name AS "entityType",
        et.name AS "label",
        et.parent_id AS "parentType",
        o.slug AS "domain",
        o.description,
        true AS "active",
        1 AS "version",
        et.created_at AS "createdAt",
        et.created_at AS "updatedAt"
      FROM entity_types et
      JOIN ontologies o ON et.ontology_id = o.id
      WHERE et.name = $1
    `, [entityType]);

    return result.rows[0] || null;
  }

  async create(record: OntologyDefinitionRecord): Promise<void> {
    // Simplified for now
    await query(`
      INSERT INTO entity_types (name, ontology_id)
      VALUES ($1, (SELECT id FROM ontologies WHERE slug = $2))
    `, [record.entityType, record.domain]);
  }

  async update(record: OntologyDefinitionRecord): Promise<void> {
    // Simplified for now
    await query(`
      UPDATE entity_types
      SET name = $1
      WHERE id = $2
    `, [record.entityType, record.id]);
  }

  async delete(id: string): Promise<void> {
    await query('DELETE FROM entity_types WHERE id = $1', [id]);
  }
}
