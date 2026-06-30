export interface AnalyticsRepository {
  getPlatformMetrics(): Promise<any>;
  getKnowledgeMetrics(): Promise<any>;
  getSearchMetrics(): Promise<any>;
}
