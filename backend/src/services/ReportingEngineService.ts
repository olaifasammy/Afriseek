import { AnalyticsRepository } from "../core/repositories/AnalyticsRepository";

export class ReportingEngineService {
  constructor(private repository: AnalyticsRepository) {}

  async generateReport(type: string): Promise<any> {
    switch (type) {
      case 'platform': return await this.repository.getPlatformMetrics();
      case 'knowledge': return await this.repository.getKnowledgeMetrics();
      case 'search': return await this.repository.getSearchMetrics();
      default: throw new Error("Invalid report type");
    }
  }
}
