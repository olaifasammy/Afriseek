import { query } from "../../../config/database";
import { AnalyticsRepository } from "../../../core/repositories/AnalyticsRepository";

export class PostgreSQLAnalyticsRepository implements AnalyticsRepository {
  async getPlatformMetrics(): Promise<any> {
    const { rows: [users] } = await query("SELECT COUNT(*) as count FROM users");
    return { totalUsers: users.count };
  }

  async getKnowledgeMetrics(): Promise<any> {
    const { rows: [entities] } = await query("SELECT COUNT(*) as count FROM entities");
    return { totalEntities: entities.count };
  }

  async getSearchMetrics(): Promise<any> {
    const { rows: [searches] } = await query("SELECT COUNT(*) as count FROM events WHERE event_type = 'SEARCH'");
    return { totalSearches: searches.count };
  }
}
