import { query } from "../../../config/database";
import { MediaRepository } from "../../../core/repositories/MediaRepository";
import { Media, MediaStatus } from "../../../types/media";

export class PostgreSQLMediaRepository implements MediaRepository {
  async findAll(): Promise<Media[]> {
    const { rows } = await query("SELECT * FROM media WHERE deleted_at IS NULL");
    return rows.map(this.mapRowToMedia);
  }

  async findById(id: string): Promise<Media | null> {
    const { rows: [row] } = await query("SELECT * FROM media WHERE id = $1", [id]);
    if (!row) return null;
    return this.mapRowToMedia(row);
  }

  async create(media: Media): Promise<void> {
    await query(`
      INSERT INTO media (id, title, media_type, file_name, mime_type, owner_id, description, caption, tags, keywords, author, copyright_holder, license, language, geo_location, date_created, date_captured)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    `, [
      media.id, media.metadata.title, media.type, media.fileName, media.mimeType, media.ownerId,
      media.metadata.description, media.metadata.caption, JSON.stringify(media.metadata.tags), JSON.stringify(media.metadata.keywords),
      media.metadata.author, media.metadata.copyrightHolder, media.metadata.license, media.metadata.language,
      media.metadata.geoLocation, media.metadata.dateCreated, media.metadata.dateCaptured
    ]);
  }

  async update(media: Media): Promise<void> {
    await query(`
      UPDATE media 
      SET title = $1, description = $2, caption = $3, license = $4, updated_at = NOW()
      WHERE id = $5
    `, [media.metadata.title, media.metadata.description, media.metadata.caption, media.metadata.license, media.id]);
  }

  async delete(id: string): Promise<void> {
    await query("UPDATE media SET deleted_at = NOW() WHERE id = $1", [id]);
  }

  async findByStatus(status: MediaStatus): Promise<Media[]> {
    const { rows } = await query("SELECT * FROM media WHERE status = $1", [status]);
    return rows.map(this.mapRowToMedia);
  }

  private mapRowToMedia(row: any): Media {
    return {
      id: row.id,
      type: row.media_type,
      fileName: row.file_name,
      mimeType: row.mime_type,
      fileSize: 0, // Should be in DB
      ownerId: row.owner_id,
      status: row.status || MediaStatus.DRAFT,
      metadata: {
        title: row.title,
        description: row.description,
        caption: row.caption,
        tags: row.tags,
        keywords: row.keywords,
        author: row.author,
        copyrightHolder: row.copyright_holder,
        license: row.license,
        language: row.language,
        geoLocation: row.geo_location,
        dateCreated: row.date_created,
        dateCaptured: row.date_captured,
      },
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}
