import { query } from "../../../config/database";
import { SourceRepository } from "../../../core/repositories/SourceRepository";
import { Source, SourceStatus, SourceType } from "../../../types/source";

export class PostgreSQLSourceRepository implements SourceRepository {
  async findAll(): Promise<Source[]> {
    const { rows } = await query("SELECT * FROM sources WHERE deleted_at IS NULL");
    return rows.map(this.mapRowToSource);
  }

  async findById(id: string): Promise<Source | null> {
    const { rows: [row] } = await query("SELECT * FROM sources WHERE id = $1", [id]);
    if (!row) return null;
    return this.mapRowToSource(row);
  }

  async create(source: Source): Promise<void> {
    await query(`
      INSERT INTO sources (id, title, source_type, author, publisher, publication_date, language, url_identifier, isbn, issn, doi, edition, volume, issue, pages, archive_location, notes, credibility_score, verification_status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
    `, [
      source.id, source.metadata.title, source.type, source.metadata.author, source.metadata.publisher, source.metadata.publicationDate,
      source.metadata.language, source.metadata.urlIdentifier, source.metadata.isbn, source.metadata.issn, source.metadata.doi,
      source.metadata.edition, source.metadata.volume, source.metadata.issue, source.metadata.pages, source.metadata.archiveLocation,
      source.metadata.notes, source.credibilityScore, source.status
    ]);
  }

  async update(source: Source): Promise<void> {
    await query(`
      UPDATE sources 
      SET title = $1, author = $2, publisher = $3, credibility_score = $4, verification_status = $5, updated_at = NOW()
      WHERE id = $6
    `, [source.metadata.title, source.metadata.author, source.metadata.publisher, source.credibilityScore, source.status, source.id]);
  }

  async delete(id: string, _actorId: string): Promise<void> {
    await query("UPDATE sources SET deleted_at = NOW() WHERE id = $1", [id]);
  }

  async findByStatus(status: SourceStatus): Promise<Source[]> {
    const { rows } = await query("SELECT * FROM sources WHERE verification_status = $1", [status]);
    return rows.map(this.mapRowToSource);
  }

  private mapRowToSource(row: any): Source {
    return {
      id: row.id,
      type: row.source_type as SourceType,
      status: row.verification_status as SourceStatus,
      credibilityScore: row.credibility_score,
      metadata: {
        title: row.title,
        author: row.author,
        publisher: row.publisher,
        publicationDate: row.publication_date,
        language: row.language,
        urlIdentifier: row.url_identifier,
        isbn: row.isbn,
        issn: row.issn,
        doi: row.doi,
        edition: row.edition,
        volume: row.volume,
        issue: row.issue,
        pages: row.pages,
        archiveLocation: row.archive_location,
        notes: row.notes,
      },
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}
