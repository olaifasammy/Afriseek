import { query } from "../../../config/database";
import { VersionRepository, VersionRecord } from "../../../core/repositories/VersionRepository";

export class PostgreSQLVersionRepository implements VersionRepository {
  async create(record: VersionRecord): Promise<void> {
    await query(`
      INSERT INTO article_versions (article_id, version, content, created_at)
      VALUES ($1, $2, $3, $4)
    `, [record.entityId, record.version, JSON.stringify(record.data), record.createdAt]);
  }

  async findByEntityId(entityId: string): Promise<VersionRecord[]> {
    const { rows } = await query("SELECT * FROM article_versions WHERE article_id = $1 ORDER BY version ASC", [entityId]);
    return rows.map((r: any) => ({
      id: r.id,
      entityId: r.article_id,
      version: r.version,
      data: r.content,
      createdAt: r.created_at
    }));
  }
}
