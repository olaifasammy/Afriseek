import { MetricPoint } from "../types/metrics";
import { logger } from "../config/logger";

export class MetricsCollectorService {
  private metrics: MetricPoint[] = [];

  async recordMetric(name: string, value: number, tags: Record<string, string> = {}) {
    const metric: MetricPoint = {
      id: `m_${Date.now()}`,
      name,
      value,
      tags,
      timestamp: new Date().toISOString()
    };
    this.metrics.push(metric);
    logger.info({ metricName: name, value }, "Metric recorded");
  }

  async getAll(): Promise<MetricPoint[]> {
    return this.metrics;
  }
}
